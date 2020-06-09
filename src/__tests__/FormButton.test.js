import FormButton from "../components/FormComponent/FormButton";

import user from "@testing-library/user-event";
import React from "react";
import { render } from "@testing-library/react";

describe("<FormButton /> test suite", () => {
  test("button text is determined by props", () => {
    // for this first assertion, we'll simply ensure that the button's text is determined by the props passed to it
    // we'll also ensure that the className defaults to primary where none is passed as props
    const { getByText } = render(<FormButton buttonText="Click Here" />);
    const button = getByText(/click here/i);
    expect(button.textContent).toBe("Click Here");
    expect(button.className).toBe("primary");
  });

  test("button responds to click handler", () => {
    const clickHandler = jest.fn();
    const { getByText } = render(
      <FormButton buttonText="Click Here" handleButtonClick={clickHandler} />
    );
    const button = getByText(/click here/i);
    user.click(button);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
