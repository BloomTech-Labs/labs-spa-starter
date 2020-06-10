import React, { useState } from "react";

import FormButton from "./FormButton";
import FormInput from "./FormInput";

const FormContainer = () => {
  const [userPassword, setUserPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const clickHandler = (event) => {
    event.preventDefault();
    // take userPassword and userEmail and send it off to state
    return `
      User's Email is ${userEmail}  
      User's Password is ${userPassword}
    `;
    setUserEmail("");
    setUserPassword("");
    // clean up state
  };

  const inputHandler = (input) => {
    const userInput = input.target;
    // You can use a custom handler here and adapt it to whatever types of inputs you need.
    // Be sure to look at the propTypes supported and required inside of FormInput.js
    if (input.target.name === /email/i) {
      return setUserEmail(userInput.value);
    }
    if (input.target.name === /password/i) {
      return setUserPassword(userInput.value);
    }
  };
  return (
    <form data-testid="reusable-form">
      <FormInput
        placeholder="User Name"
        labelId="Email"
        value={userEmail}
        handleInput={inputHandler}
      />
      <FormInput
        placeholder="Password"
        labelId="Password"
        value={userPassword}
        handleInput={inputHandler}
      />
      <FormButton
        handleButtonClick={clickHandler}
        classType="primary"
        buttonText="Click"
      />
    </form>
  );
};

export default FormContainer;
