import React, { useState } from "react";
import { useOktaAuth } from "@okta/okta-react";

import { FormButton, FormInput } from "../ReusableComponents";

const LoginContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { authService, authState } = useOktaAuth();

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const { username, password } = event.target.elements;
    const newUser = { username: username.value, password: password.value };
    // we will take this user and eventually send it up to Okta to store there :) No need to handle users.
    // You'll be able to use the `authState`
    // this is a fake api call. API methods should be defined in the `../api/index.js` file
    authService.login("/");
    const { accessToken } = authState;
    // now you can
    // console.log(accessToken)
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
