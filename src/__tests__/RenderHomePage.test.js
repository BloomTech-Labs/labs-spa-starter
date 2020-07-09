import RenderHomePage from "../components/pages/Home/RenderHomePage";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";

describe("<RenderHomePage /> test suite", () => {
  test("it handles a loading state", () => {
    const { getByText } = render(
      <Router>
        <RenderHomePage userInfo={{ name: "Sara" }} />
      </Router>
    );
    expect(getByText(/hi sara welcome to labs basic spa/i).innerHTML).toBe(
      "Hi Sara Welcome to Labs Basic SPA"
    );
  });
});
