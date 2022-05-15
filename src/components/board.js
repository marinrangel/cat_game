import React from "react";
import Cell from "./cell";

const Board = (props) => {
  return (
    <div className="board">
      {props.cells.map((cell, i) => (
        <Cell
          handleCellClick={props.handleCellClick}
          gameOver={props.gameOver}
          value={cell}
          key={i}
          id={i}
        />
      ))}
    </div>
  );
};

Board.defaultProps = {
  handleCellClick: () => {},
  gameOver: false,
  cells: [],
};

export default Board;
