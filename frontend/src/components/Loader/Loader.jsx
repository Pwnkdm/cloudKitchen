import React from 'react'
import styles from "./style/loader.module.css";

const Loader = () => {
  return (
    <div className={styles.container}>
    <div className={styles.slice}></div>
    <div className={styles.slice}></div>
    <div className={styles.slice}></div>
    <div className={styles.slice}></div>
    <div className={styles.slice}></div>
    <div className={styles.slice}></div>
    </div>
  )
}

export default Loader