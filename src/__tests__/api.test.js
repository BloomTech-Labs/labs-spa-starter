import { sleep as mockSleep, submitLogin as mockSubmitLogin } from "../api";

jest.mock("../api");

afterEach(() => {
  jest.clearAllMocks();
});

test("sleep", async () => {
  await mockSleep(1000);
  expect(mockSleep).toHaveBeenCalledTimes(1);
  expect(mockSleep).toHaveBeenCalledWith(1000);
});

test("submit Login", () => {
  mockSubmitLogin.mockResolvedValueOnce();
  const fakeUser = {
    username: "yellowSally@flytie.com",
    password: "testing123",
  };

  mockSubmitLogin(fakeUser);
  expect(mockSubmitLogin).toHaveBeenCalledWith(fakeUser);
});
