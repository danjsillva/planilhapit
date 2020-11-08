import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />

      <ToastContainer
        position="top-center"
        closeButton={false}
        hideProgressBar={true}
        toastClassName="toast-container"
      />
    </RecoilRoot>
  );
}

export default MyApp;
