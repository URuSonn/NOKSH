import { Typography } from "@mui/material";
import styles from "../styles/Home.module.css";
import { ContactLinks } from "./ContactLinks";
import classes from "./Header.module.css";
import { UsingFunction } from "./UsingFunction";

export function Header(props) {
  console.log("props", props.color);
  const title = props.title;
  const color = props.color;
  return (
    <>
      <div className={styles.description}>
        <Typography
          component="h1"
          style={{ color: `${color}`, fontWeight: "bold" }}>
          {title}
        </Typography>
        <UsingFunction />
      </div>
      <ContactLinks />
      {/* <hr className={classes.Line} /> */}
    </>
  );
}
