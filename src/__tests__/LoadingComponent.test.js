import React from "react";
import { render, getByTestId } from "@testing-library/react";

import { LoadingComponent } from "../components/common";

describe("Loading Common Component", () => {
  test("it should mount a div based on props", () => {
    const { getByText, rerender, debug } = render(
      <LoadingComponent message="Loading Content" />
    );
    const message = getByText(/loading content/i);
    expect(message.textContent).toBe("Loading Content");
    rerender(<LoadingComponent message="Loading User Profile" />);
    const newMessage = getByText(/loading user profile/i);
    expect(newMessage.textContent).toBe("Loading User Profile");
  });
});
