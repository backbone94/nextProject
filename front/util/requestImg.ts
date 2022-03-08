import { ChangeEvent } from "react";
import axios from "axios";

// Folder 이미지를 s3에 저장하고 이미지 경로 가져오기
const requestImg = async (e: ChangeEvent<HTMLInputElement>) => {
  try {
    const formData = new FormData();
    formData.append("upload", e.target.files[0]);
    const result = await axios.post(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/image`,
      formData
    );
    return result.data.url[0];
  } catch (e) {
    console.log(e);
    alert("server error");
  }
};

export default requestImg;
