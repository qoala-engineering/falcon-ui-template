import { Inter } from "next/font/google";
import Head from "next/head";

import { Test } from "@/components/Test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js + Tailwind CSS + Storybook</title>
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <Test />
      </main>
    </>
  );
}
