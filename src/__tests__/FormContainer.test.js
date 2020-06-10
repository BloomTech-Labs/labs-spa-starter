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
    const fakeUser = {
      username: "test@email.com",
      password: "testing123",
    };
    const { getByText, getByLabelText } = render(<FormContainer />);
    const button = getByText(/click/i);
    getByLabelText(/email/i).value = fakeUser.username;
    getByLabelText(/password/i).value = fakeUser.password;
    user.click(button);

    expect(button).toBeDisabled();
    expect(mockSubmitLogin).toHaveBeenCalledTimes(1);
    expect(mockSubmitLogin).toHaveBeenCalledWith({
      ...fakeUser,
    });
  });
});
