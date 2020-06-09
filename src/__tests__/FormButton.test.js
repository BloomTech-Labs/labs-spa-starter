import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

import FormButton from "../components/FormComponent/FormButton";

test("renders button w/ text", () => {
  const handleButtonClick = () => "text";

  const { getByTestId } = render(
    <FormButton
      data-testid="reusable-button"
      buttonText="Test Text"
      handleButtonClick={handleButtonClick}
    />
  );
});
