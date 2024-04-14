import React from "react";
import * as styles from "./List.module.css";

const List = (props) => {
  return (
    <div className={styles.test}>
      {props.text}
      <div>{props.children}</div>
    </div>
  );
};

export default List;
