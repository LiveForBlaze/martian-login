import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { IconInput } from "./IconInput";

describe("<IconInput />", () => {
  it("renders with placeholder", () => {
    render(<IconInput value="" onChange={() => {}} placeholder="Email" />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("renders with a value", () => {
    render(<IconInput value="test@example.com" onChange={() => {}} />);
    expect(screen.getByDisplayValue("test@example.com")).toBeInTheDocument();
  });

  it("calls onChange when input changes", () => {
    const handleChange = jest.fn();
    render(<IconInput value="" onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "abc" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("calls onBlur when input loses focus", () => {
    const handleBlur = jest.fn();
    render(<IconInput value="" onChange={() => {}} onBlur={handleBlur} />);
    const input = screen.getByRole("textbox");
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it("disables the input when disabled is true", () => {
    render(<IconInput value="" onChange={() => {}} disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("renders an icon if provided", () => {
    render(<IconInput value="" onChange={() => {}} icon="fa-envelope" />);
    const icon = screen.getByRole("icon", { hidden: true });
    expect(icon).toHaveClass("fa-envelope");
  });

  it("does not render an icon if not provided", () => {
    render(<IconInput value="" onChange={() => {}} />);
    const icon = screen.queryByRole("icon", { hidden: true });
    expect(icon).not.toBeInTheDocument();
  });
});
