import React from "react";
import PropTypes from "prop-types";

const FormButton = (props) => {
  return (
    <button
      onClick={props.handleButtonClick}
      className={props.classType || "primary"}
    >
      {props.buttonText}
    </button>
  );
};

export default FormButton;

FormButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.string,
  handleButtonClick: PropTypes.func,
};
