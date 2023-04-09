import Head from "next/head";

import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>실전 감각, 실감</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
