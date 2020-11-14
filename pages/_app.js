import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/header";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Head>
        <script
          data-ad-client="ca-pub-8531805358090283"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Head>

      <Header />

      <Component {...pageProps} />

      <ToastContainer
        position="top-center"
        closeButton={false}
        hideProgressBar={true}
        toastClassName="toast-container"
      />
    </RecoilRoot>
  );
};

export default MyApp;
