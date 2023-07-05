import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { NextImage } from "@/components/NextImage";
import { DocsGrid } from "@/components/DocsGrid";
import { Header } from "@/components/Header";
import { INDEX_PAGE_TITLE } from "@/utils/path";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const title = INDEX_PAGE_TITLE;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header title={title} />
        <NextImage />
        <DocsGrid />
      </main>
    </>
  );
}
