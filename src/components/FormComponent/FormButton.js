import React from "react";
import PropTypes from "prop-types";

const FormButton = (props) => {
  return (
    <button
      disabled={props.isDisabled}
      className={props.classType || "primary"}
      type={props.type}
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
