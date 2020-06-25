import RenderHomePage from "../components/pages/Home/RenderHomePage";

import React from "react";
import { render } from "@testing-library/react";

test("Home has an h1", () => {
  // let's just make sure the component mounts with an H1, you'll want to update this test to include any UI on your landing page you'd like
  const { getByText } = render(<RenderHomePage userInfo={{ name: "Sara" }} />);
  const h1 = getByText(/welcome to labs basic spa/i);
  expect(h1.textContent).toBe("Hi Sara Welcome to Labs Basic SPA");
});
