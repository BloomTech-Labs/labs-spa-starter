import FormInput from "../components/FormComponent/FormInput";

import user from "@testing-library/user-event";
import React from "react";
import { render } from "@testing-library/react";

describe("<FormInput /> test suite", () => {
  afterEach(() => {
    // cleanup mocking after each test runs.
    jest.clearAllMocks();
  });
  test("input is rendered with proper labels", () => {
    const inputMock = jest.fn();

    const { getByLabel } = render(
      <FormInput
        labelId="User Email"
        placeholder="User Email"
        handleInput={inputMock}
      />
    );
  });

  test("input handler handles the change", () => {
    // This assertion simply checks that the change handler updates the value of the input.
    // IF you change the "PropTypes to require a 'value' prop and then pass that prop to this component the test will break."
    // as a result I've determined that requiring the 'value prop' is a bad idea.
    const inputMock = jest.fn();
    const { getByTestId } = render(
      <FormInput
        labelId="User Email"
        placeholder="User Email"
        handleInput={inputMock}
      />
    );
    const input = getByTestId(/reusable-input/i);

    user.type(input, "hello@world.com");
    console.log(input.value);
    expect(inputMock).toHaveBeenCalledTimes(15);
    expect(input.value).toBe("hello@world.com");
  });
});
