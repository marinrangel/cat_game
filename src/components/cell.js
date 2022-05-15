import React from "react";
import { FaTimes, FaRegCircle } from "react-icons/fa";

const Cell = (props) => {
  return (
    <div
      className={"cell " + (props.gameOver ? " none" : "")}
      onClick={() => props.handleCellClick(props.id)}
    >
      {props.value === "X" && <FaTimes />}
      {props.value === "O" && <FaRegCircle />}
    </div>
  );
};

Cell.defaultProps = {
  handleCellClick: () => {},
  gameOver: false,
  value: "",
};

export default Cell;
