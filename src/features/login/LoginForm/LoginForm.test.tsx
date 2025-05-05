import { render, screen, fireEvent } from "@testing-library/react";
import LoginForm from "./LoginForm";

jest.mock("@utils/delay", () => ({
  delay: () => Promise.resolve(),
}));

test("logs in successfully with valid credentials", async () => {
  render(<LoginForm />);

  fireEvent.change(screen.getByPlaceholderText(/email/i), {
    target: { value: "test@example.com" },
  });

  fireEvent.change(screen.getByPlaceholderText(/password/i), {
    target: { value: "validPassword" },
  });

  fireEvent.click(screen.getByRole("button"));

  const heading = await screen.findByRole("heading", {
    name: /login successful/i,
  });

  expect(heading).toBeInTheDocument();
});
