import "../styles/globals.css";
import type { AppProps } from "next/app";
import Top from "../components/Top";
import Footer from "../components/Footer";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store, persistor, RootState } from "../store/index";
import { PersistGate } from "redux-persist/integration/react";
import "antd/dist/antd.css";
import styles from "../styles/home.module.css";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <div className={styles.homeContainer}>
            <Top />
            <div className="container">
              <Component {...pageProps} />
            </div>
            <Footer />
          </div>
        </PersistGate>
      </Provider>
    </>
  );
}
export default MyApp;
