import Link from "next/link";
import classes from "../components/Header.module.css";

export function ContactLinks() {
  return (
    <ul
      className={classes.Contact}
      style={{
        width: "100%",
        maxWidth: "1100px",
        display: "flex",
        gap: "20px",
        justifyContent: "start",
        textAlign: "center",
      }}>
      <li>
        <Link href="https://www.youtube.com/" target="blank">
          YouTuBe
        </Link>
      </li>
      <li>
        <Link href="https://www.youtube.com/" target="blank">
          twitter
        </Link>
      </li>
      <li>
        <Link href="https://www.youtube.com/" target="blank">
          Line
        </Link>
      </li>
      <li>
        <Link href="/">Event</Link>
      </li>
      <li>
        <Link href="/">Album</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/">Index</Link>
      </li>
    </ul>
  );
}
