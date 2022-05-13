import React from "react";
import { FaTimes, FaRegCircle } from "react-icons/fa";

const Cell = (props) => {
  return (
    <div className="cell" onClick={() => props.handleCelClick(props.id)}>
      {props.value === "X" && <FaTimes />}
      {props.value === "O" && <FaRegCircle />}
    </div>
  );
};

Cell.defaultProps = {
  value: "",
  handleCelClick: () => {},
};

export default Cell;
