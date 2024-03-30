import { Html, Head, Main, NextScript } from "next/document";
import { Providers } from "./provider";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className=" text-white bg-[#121212]">
        <Providers>
          <Main />
          <NextScript />
        </Providers>
      </body>
    </Html>
  );
}
