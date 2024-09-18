import React from "react";
import styles from "./style/counter.module.css";

const Counter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.half}></div>
      <div className={styles.half}></div>
    </div>
  );
};

export default Counter;
