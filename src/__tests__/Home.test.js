import React from "react";
import { render, act, cleanup } from "@testing-library/react";
import Home from "../components/HomeComponent";
import { useOktaAuth } from "@okta/okta-react";

jest.mock("@okta/okta-react", () => ({
  useOktaAuth: jest.fn(),
}));

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

describe("<Home /> test suite", () => {
  test("authenticated and userProfile not null", async () => {
    useOktaAuth.mockImplementation(() => {
      return {
        authState: {
          isAuthenticated: true,
        },
        authService: {
          getUser: () => Promise.resolve(null),
        },
      };
    });
    await act(async () => {
      const { getByText, debug } = await render(
        <Home LoadingComponent={() => <div>... Fetching User Profile</div>} />
      );
    });
  });

  test("renders loading component based on initial null userInfo state", () => {
    useOktaAuth.mockImplementation(() => {
      return {
        authState: {
          isAuthenticated: true,
        },
        authService: {
          getUser: () => Promise.resolve(null),
        },
      };
    });

    const { getByText, debug } = render(
      <Home LoadingComponent={() => <div>... Fetching User Profile</div>} />
    );
    const loading = getByText(/... fetching user profile/i);
    expect(loading.textContent).toBe("... Fetching User Profile");
  });
});

// if not authenticated set userInfo to null
// is authenticated && user prof is not null
