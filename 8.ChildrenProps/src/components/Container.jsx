import React from "react";
import styles from "./Container.module.css";
const Container = (props) => {
  return <div className={styles.containerComp}>{props.children}</div>;
};

export default Container;
