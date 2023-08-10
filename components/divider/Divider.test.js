import React from "react";
import { render } from "@testing-library/react";
import Divider from "./Divider";

describe("Divider Component", () => {
  it("renders a divider with the correct CSS class", () => {
    const { container } = render(<Divider />);
    const dividerElement = container.querySelector(".divider");

    expect(dividerElement).toBeInTheDocument();
  });
});
