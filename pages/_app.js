import "../styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Script from "next/script";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Script
        id="zsiqchat"
        defer
        src="/salesiq.js"
      />
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </SessionProvider>
  );
}

export default MyApp;
