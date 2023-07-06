import styles from "../styles/Home.module.css";
import { ContactLinks } from "./ContactLinks";
import classes from "./Header.module.css";
import { UsingFunction } from "./UsingFunction";

export function Header(props) {
  console.log("props", props);
  const title = props.title;
  return (
    <>
      <div className={styles.description}>
        <h1>{title}</h1>

        <UsingFunction />
      </div>
      <ContactLinks />
      <hr className={classes.Line} />
    </>
  );
}
