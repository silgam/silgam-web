import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta
            name="description"
            content="모의고사를 가장 실감나게 푸는 방법! 실감과 함께 실전감각을 키우세요."
          />
          <meta
            property="og:description"
            content="모의고사를 가장 실감나게 푸는 방법! 실감과 함께 실전감각을 키우세요."
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://silgam.app" />
          <meta
            property="og:image"
            content="https://silgam.app/static/images/og-image.png"
          />
          <meta property="og:locale" content="ko_KR" />

          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
          <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#283593" />
          <meta
            name="msapplication-config"
            content="/static/favicon/browserconfig.xml"
          />
          <meta name="theme-color" content="#ffffff" />

          {/* Font */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
}
