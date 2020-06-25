import RenderHomePage from "../components/pages/Home/RenderHomePage";
import React from "react";
import { render, act, cleanup } from "@testing-library/react";
import { useOktaAuth } from "@okta/okta-react";

jest.mock("@okta/okta-react", () => ({
  useOktaAuth: jest.fn(),
}));

afterEach(() => {
  cleanup();
  jest.resetAllMocks();
});

test("Home has an h1", () => {
  // let's just make sure the component mounts with an H1, you'll want to update this test to include any UI on your landing page you'd like
  const { getByText } = render(<RenderHomePage userInfo={{ name: "Sara" }} />);
  const h1 = getByText(/welcome to labs basic spa/i);
  expect(h1.textContent).toBe("Hi Sara Welcome to Labs Basic SPA");


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
