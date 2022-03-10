import { Html, Head, Main, NextScript } from "next/document";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Document = () => {
  return (
    <Html lang="ko">
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
