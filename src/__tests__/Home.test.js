import Home from "../components/HomeComponent";

import React from "react";
import { render } from "@testing-library/react";

test("Home has an h1", () => {
  // let's just make sure the component mounts with an H1, you'll want to update this test to include any UI on your landing page you'd like
  const { getByText } = render(<Home />);
  const h1 = getByText(/welcome to labs basic spa/i);
  expect(h1.textContent).toBe("Welcome to Labs Basic SPA");
});
