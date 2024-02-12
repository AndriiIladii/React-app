import React from "react";
import styles from "./Square.module.css";

const Square = (props) => {
  const squareClasses = `${styles.square} ${props.customBorderClass}`;
  return (
    <button className={squareClasses} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
