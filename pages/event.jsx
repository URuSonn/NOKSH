import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

import { Header } from "@/components/Header";
import { EVENTS_PROPS, EVENT_PAGE_TITLE } from "@/utils/path";
import FlightIcon from "@mui/icons-material/Flight";
import { Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { EventList } from "@/components/EventList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const title = EVENT_PAGE_TITLE;
  const pageColor = `radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Header title={title} color={pageColor} />

        <Container
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            backgroundColor: "rgba(89, 90, 90, 0.908)",
            padding: "5rem",
          }}>
          <Typography component="h2" sx={{ textAlign: "center" }}>
            EVENTS
          </Typography>
          <Typography
            component="h2"
            sx={{ fontSize: "2rem", fontWeight: "bold" }}>
            CALENDER
          </Typography>

          <EventList />
        </Container>

        <Footer />
      </main>
    </>
  );
}
