import FormInput from "../components/FormComponent/FormInput";

import React, { useState } from "react";
import { render } from "@testing-library/react";

describe("<FormInput />", () => {
  const { getByLabelText } = render(<FormInput labelId="username" />);
  test("that input contains HTML and text", () => {});
});
