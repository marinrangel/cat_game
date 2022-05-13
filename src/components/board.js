import React from "react";
import Cell from "./cell";

const Board = (props) => {
  return (
    <div className="board">
      {props.cells.map((cell, i) => (
        <Cell
          key={i}
          id={i}
          value={cell}
          handleCelClick={props.handleCelClick}
        />
      ))}
    </div>
  );
};

Board.defaultProps = {
  cells: [],
  handleCelClick: () => {},
};

export default Board;
