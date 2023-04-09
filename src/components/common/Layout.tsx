import Head from "next/head";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>실전 감각, 실감</title>
      </Head>
      {children}
    </>
  );
}
