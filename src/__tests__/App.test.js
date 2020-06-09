import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";

test("renders welcome message", () => {
  const { getByText } = render(<App />);
  const text = "Welcome to Labs Basic SPA";
  const linkElement = getByText(text);
});
