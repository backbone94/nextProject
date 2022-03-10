import "../styles/globals.css";
import type { AppProps } from "next/app";
import Top from "../components/Top";
import Footer from "../components/Footer";
import { Provider, useSelector } from "react-redux";
import { store, persistor, RootState } from "../store/index";
import { PersistGate } from "redux-persist/integration/react";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: -99,
          width: "100%",
          height: "100%",
        }}
      >
        {/* <iframe
          frameBorder="0"
          height="100%"
          width="100%"
          src="https://www.youtube.com/embed/BAwoqiMgDk4?start=5&mute=1&loop=1&autoplay=1&rel=0&controls=0&showinfo=0"
          allow="autoplay; encrypted-media;"
          allowFullScreen
        ></iframe> */}

        {/* <img
          width="100%"
          height="100%"
          src={`https://image.tmdb.org/t/p/original${topRatedList[0].poster_path}`}
          alt="image"
        /> */}
      </div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Top />
          <div className="container">
            <Component {...pageProps} />
          </div>
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}
export default MyApp;
