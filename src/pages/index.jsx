import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/src/styles/Home.module.css";
import { Header } from "@/src/components/Header";
import { INDEX_PAGE_TITLE } from "@/src/utils/path";
import { Footer } from "@/src/components/Footer";
import { Box, Typography } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const title = INDEX_PAGE_TITLE;
  const DEMO_LIST = [
    "あああああああああ",
    "いいいいいい",
    "うううううう",
    "えええええええ",
    "おおおおおおおお",
  ];
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
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {DEMO_LIST.map((text) => {
            return (
              <Typography
                sx={{
                  "&::after": {
                    background: "green",
                    content: '"iii"',
                    borderBottom: "1px solid white",
                  },
                }}>
                {text}
              </Typography>
            );
          })}
        </Box>
        <Footer />
      </main>
    </>
  );
}