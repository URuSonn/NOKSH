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
          style={{
            color: `${color}`,
            fontWeight: "bold",
            textShadow: `0 1px #bbb,
          1px 3px #333,
          2px 5px #999,
          3px 7px #222,
          4px 9px #777,
          5px 11px #111,
          6px 13px #555,
          7px 15px #000,
          8px 16px #333,
          9px 16px 8px #000`,
          }}>
          {title}
        </Typography>
        <UsingFunction />
      </div>
      <ContactLinks />
      {/* <hr className={classes.Line} /> */}
    </>
  );
}
