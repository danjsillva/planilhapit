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

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <Header />

      <Component {...pageProps} />

      <ToastContainer
        position="bottom-left"
        closeButton={false}
        hideProgressBar={true}
        toastClassName="toast-container"
      />
    </RecoilRoot>
  );
};

export default MyApp;
