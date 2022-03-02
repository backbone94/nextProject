import "../styles/globals.css";
import type { AppProps } from "next/app";
import Top from "../components/Top";
import Footer from "../components/Footer";
import { Provider } from "react-redux";
import { store, persistor } from "../store/index";
import { PersistGate } from "redux-persist/integration/react";
import "antd/dist/antd.css";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Top />
          <Component {...pageProps} />
          <Footer />
        </PersistGate>
      </Provider>
    </>
  );
}
export default MyApp;
