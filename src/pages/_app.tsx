import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import CSPostHogProvider from "./provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <CSPostHogProvider>
        <Component {...pageProps} />
      </CSPostHogProvider>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </RecoilRoot>
  );
}
