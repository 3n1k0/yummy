import React from "react";
import { render, findByTestId } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Navigation", () => {
  const navigationItems = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "/categories", label: "Categories" },
  ];

  it("renders navigation items correctly", async () => {
    const { findByTestId } = render(
      <Navigation navigationItems={navigationItems} />,
    );

    await navigationItems.forEach(async (item) => {
      const linkElement = await findByTestId(item.label.toLowerCase());
      expect(linkElement.getAttribute("href")).toBe(item.url);
    });
  });

  it("renders user login links correctly", async () => {
    const { findByTestId } = render(
      <Navigation navigationItems={navigationItems} />,
    );

    const loginLink = await findByTestId("login");
    const registerLink = await findByTestId("register");

    expect(loginLink.getAttribute("href")).toBe("/login");
    expect(registerLink.getAttribute("href")).toBe("/register");
  });
});
