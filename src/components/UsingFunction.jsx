import styles from "./UsingFunction.module.css";

//   const spinText = keyframes`70%{transform:rotateX(0deg)}100%{transform:rotateX(360deg)}`;

export function UsingFunction() {
  return (
    <div>
      <div style={{ minWidth: "300px", textAlign: "center" }}>
        <div className={styles.SpinText}>
          <span>R</span>
          <span>E</span>
          <span>A</span>
          <span>C</span>
          <span>T</span>
          <span>-</span>
          <span>N</span>
          <span>E</span>
          <span>X</span>
          <span>T</span>
          <span>.</span>
          <span>J</span>
          <span>S</span>
          <span>-</span>
          <span>V</span>
          <span>E</span>
          <span>R</span>
          <span>C</span>
          <span>E</span>
          <span>L</span>
        </div>
      </div>
    </div>
  );
}
