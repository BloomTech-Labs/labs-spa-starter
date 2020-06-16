import React, { useState } from "react";

import { FormButton, FormInput } from "../ReusableComponents/";

import { submitLogin } from "../../api";

const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { username, password } = event.target.elements;
    const newUser = { username: username.value, password: password.value };
    // this is a fake api call. API methods should be defined in the `../api/index.js` file
    const results = await submitLogin(newUser);
    // console.log(results) if you wanna see what `submitLogin()` resolves.
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

export default LoginContainer;
