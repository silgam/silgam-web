import Head from "next/head";

import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export default function Layout({
  children,
  title,
  hideHeader,
  hideFooter,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title || "실전 감각, 실감"}</title>
      </Head>
      {!hideHeader && <Header />}
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
