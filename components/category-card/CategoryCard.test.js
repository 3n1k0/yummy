/* eslint-disable react/display-name */
import React from "react";
import { render, screen } from "@testing-library/react";
import CategoryCard from "./CategoryCard";
import Image from "next/image";

jest.mock("next/image", () => {
  return ({ alt, ...props }) => <Image alt={alt} {...props} />;
});

describe("CategoryCard", () => {
  const category = {
    strCategory: "Test Category",
    strCategoryThumb: "test-image.jpg",
  };

  it("renders category image and heading correctly", () => {
    render(<CategoryCard category={category} />);

    const link = screen.getByRole("link");
    const image = screen.getByRole("img");
    const heading = screen.getByRole("heading", { level: 3 });

    expect(link).toHaveClass("cardWrapper");
    expect(link).toHaveAttribute("href", `category/test-category`);
    expect(image).toHaveClass("categoryImage");
    expect(image).toHaveAttribute("src", category.strCategoryThumb);
    expect(image).toHaveAttribute("alt", category.strCategory);
    expect(heading).toHaveClass("categoryHeading");
    expect(heading.textContent).toBe(category.strCategory);
  });
});
