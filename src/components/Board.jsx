import React from "react";
import Square from "./Square";
import styles from "./Board.module.css";

const Board = ({ squares, click }) => {
  return (
    <div className={styles.board}>
      {squares.map((value, index) => (
        <Square key={index} value={value} onClick={() => click(index)} />
      ))}
    </div>
  );
};

export default Board;
