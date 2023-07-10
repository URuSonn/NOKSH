import Link from "next/link";
import style from "../components/Header.module.css";

export function ContactLinks() {
  return (
    <ul
      className={style.Contact}
      style={{
        width: "100%",
        maxWidth: "1100px",
        display: "flex",
        gap: "10px",
        justifyContent: "start",
        textAlign: "center",
      }}>
      <li>
        <Link href="https://www.youtube.com/" target="blank">
          <div className={style.LinkLabel}>YouTuBe</div>
        </Link>
      </li>
      <li>
        <Link href="https://www.youtube.com/" target="blank">
          <div className={style.LinkLabel}>twitter</div>
        </Link>
      </li>
      <li>
        <Link href="https://line.me/ti/g/bCM96hVjpW" target="blank">
          <div className={style.LinkLabel}>Line</div>
        </Link>
      </li>
      <li>
        <Link href="/event">
          <div className={style.LinkLabel}>Event</div>
        </Link>
      </li>
      <li>
        <Link href="/album">
          <div className={style.LinkLabel}>Album</div>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <div className={style.LinkLabel}>About</div>
        </Link>
      </li>
      <li>
        <Link href="/">
          <div className={style.LinkLabel}>Index</div>
        </Link>
      </li>
    </ul>
  );
}
