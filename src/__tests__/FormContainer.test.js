import React from "react";
import { render, cleanup } from "@testing-library/react";
import user from "@testing-library/user-event";

import FormContainer from "../components/FormComponent/FormContainer";

afterEach(cleanup);

describe("<FormContainer /> test suite", () => {
  test("contains a form", () => {
    const { getByTestId } = render(<FormContainer />);
  });

  test("button responds to click handler", () => {
    const clickHandler = jest.mock(FormContainer);
    const { getByTestId, getByLabelText } = render(<FormContainer />);
    const button = getByTestId("reusable-button");
    const inputEmail = getByLabelText(/email/i);
    const inputPassword = getByLabelText(/password/i);
    user.type(inputEmail, "Hello");
    user.type(inputPassword, "World");
    button.append("click", clickHandler);
    user.click(button);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
