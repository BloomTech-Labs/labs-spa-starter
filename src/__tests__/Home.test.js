import React from "react";
import { render } from "@testing-library/react";
import { HomePage } from "../components/pages/Home";

jest.mock("@okta/okta-react", () => ({
  useOktaAuth: () => {
    return {
      authState: {},
      authService: {}
    };
  }
}));

describe("<HomeContainer /> testing suite", () => {
  test("initial state has loading component", () => {
    const { debug } = render(<HomePage />);
    debug();
  });
});
