import styles from "../styles/Home.module.css";
import Image from "next/image";
import { UsingFunction } from "./UsingFunction";

export function Header(props) {
  console.log("props", props);
  const title = props.title;
  return (
    <div className={styles.description}>
      <h1>{title}</h1>

      <UsingFunction />
    </div>
  );
}
