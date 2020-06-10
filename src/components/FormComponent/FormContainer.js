import React, { useState } from "react";

import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { submitLogin } from "../../api";

const FormContainer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    const { username, password } = event.target.value;
    const newUser = { username, password };
    setIsLoading(true);
    const results = await submitLogin(newUser);
    return results;
  };

  return (
    <form onSubmit={submitHandler}>
      <FormInput placeholder="User Name" name="username" labelId="Email" />
      <FormInput placeholder="Password" name="password" labelId="Password" />
      <FormButton
        isDisabled={isLoading}
        classType="primary"
        type="submit"
        buttonText="Click"
      />
    </form>
  );
};

export default FormContainer;
