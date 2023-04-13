import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "@/styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}
