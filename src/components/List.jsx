import React from "react";
import styles from "./List.module.css";

const List = (props) => {
  return (
    <div className="{styles.wrapper}">
      {props.text}
      <div>{props.children}</div>
    </div>
  );
};

export default List;
