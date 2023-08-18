import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("renders a button element with the provided text", () => {
    const type = "submit";
    const text = "Click me";
    render(<Button type={type} text={text} />);
    const button = screen.getByRole("button", { name: text });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", type);
  });

  it("renders with the correct CSS class", () => {
    const { container } = render(<Button type="button" text="Test" />);
    const button = container.firstChild;

    expect(button).toHaveClass("button");
  });
});
