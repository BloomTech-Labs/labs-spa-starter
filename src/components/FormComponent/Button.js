import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      onClick={props.handleButtonClick}
      className={props.classType || "primary"}
    >
      {props.buttonText}
    </button>
  );
};

export default Button;

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleButtonClick: PropTypes.func,
};
