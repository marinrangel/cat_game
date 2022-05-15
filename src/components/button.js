import React from "react";

const Button = (props) => {
  return (
    <button className="btn" onClick={() => props.handleClick()}>
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  handleClick: () => {},
};

export default Button;
