import Hotjar from "@hotjar/browser";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import { useEffect } from "react";
import { IconContext } from "react-icons";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@/styles/GlobalStyles";
import { defaultTheme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  const blockKakaoInAppBrowser = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const targetUrl = window.location.href;

    if (/kakaotalk/i.exec(userAgent)) {
      window.location.href = `kakaotalk://web/openExternal?url=${encodeURIComponent(
        targetUrl,
      )}`;
    }
  };

  useEffect(() => {
    blockKakaoInAppBrowser();

    const siteId = 3666393;
    const hotjarVersion = 6;
    Hotjar.init(siteId, hotjarVersion, {
      debug: process.env.NODE_ENV !== "production",
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0XX1KQVQYK"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0XX1KQVQYK');
        `}
      </Script>

      <IconContext.Provider value={{}}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </IconContext.Provider>
    </>
  );
}
