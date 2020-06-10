import React from "react";
import { render, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import { submitLogin as mockSubmitLogin } from "../api";

import FormContainer from "../components/FormComponent/FormContainer";

jest.mock("../api");
afterEach(() => {
  jest.clearAllMocks();
});

describe("<FormContainer /> test suite", () => {
  test("button responds to click handler", () => {
    mockSubmitLogin.mockResolvedValueOnce();
    const { getByText, getByLabelText } = render(<FormContainer />);
    const button = getByText(/click/i);
    const inputEmail = getByLabelText(/email/i);
    const inputPassword = getByLabelText(/password/i);
    user.type(inputEmail, "Hello");
    user.type(inputPassword, "World");
    user.click(button);
    expect(button).toBeDisabled();
    expect(mockSubmitLogin).toHaveBeenCalledTimes(1);
  });
});
