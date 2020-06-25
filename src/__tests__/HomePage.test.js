import { HomePage } from "../components/pages";

import React from "react";
import { render } from "@testing-library/react";

test("Home has an h1", () => {
  // let's just make sure the component mounts with an H1, you'll want to update this test to include any UI on your landing page you'd like
  const { getByText, rerender } = render(
    <HomePage userInfo={{ name: "Freddy" }} />
  );
  const h1 = getByText(/hi freddy welcome to labs basic spa/i);
  expect(h1.textContent).toBe("Hi Freddy Welcome to Labs Basic SPA");
  rerender(<HomePage userInfo={{ name: "Bart" }} />);
  expect(getByText(/hi bart welcome to labs basic spa/i).textContent).toBe(
    "Hi Bart Welcome to Labs Basic SPA"
  );
});
