import Head from "next/head";

import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children?: React.ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export default function Layout({
  children,
  hideHeader,
  hideFooter,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>실전 감각, 실감</title>
      </Head>
      {!hideHeader && <Header />}
      {children}
      {!hideFooter && <Footer />}
    </>
  );
}
