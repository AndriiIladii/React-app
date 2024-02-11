import React from "react";
import Square from "./Square";
import styles from "./Board.module.css";

const Board = ({ squares, click }) => {
  return (
    <>
      <div className={styles.board}>
        <Square value={squares[0]} onClick={() => click(0)} />
        <Square value={squares[1]} onClick={() => click(1)} />
        <Square value={squares[2]} onClick={() => click(2)} />

        <Square value={squares[3]} onClick={() => click(3)} />
        <Square value={squares[4]} onClick={() => click(4)} />
        <Square value={squares[5]} onClick={() => click(5)} />

        <Square value={squares[6]} onClick={() => click(6)} />
        <Square value={squares[7]} onClick={() => click(7)} />
        <Square value={squares[8]} onClick={() => click(8)} />
      </div>
    </>
  );
};

export default Board;
