import axios from "axios";

// 번역
const translate = async (korean: string | string[], lan: string = "en") => {
  const translated = await axios.get(
    `https://translation.googleapis.com/language/translate/v2?target=${lan}&q=${korean}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API}`
  );
  return translated.data.data.translations[0].translatedText;
};

export default translate;
