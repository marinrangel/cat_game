import React from "react";

const Input = (props) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") props.enterEvent();
  };

  return (
    <div className="content">
      <input
        onChange={(event) => props.setValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      {props.error !== "" && <span className="absolute">{props.error}</span>}
    </div>
  );
};

Input.defaultProps = {
  enterEvent: () => {},
  setValue: () => {},
  error: "",
};

export default Input;
