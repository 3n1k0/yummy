import React from "react";
import { render, screen } from "@testing-library/react";
import CategoryCarousel from "./CategoryCarousel";

const sampleCategories = [
  { id: 1, name: "Category 1", strCategoryThumb: "image_url_1" },
  { id: 2, name: "Category 2", strCategoryThumb: "image_url_2" },
  { id: 3, name: "Category 3", strCategoryThumb: "image_url_3" },
];

test("renders the correct number of CategoryCard components", () => {
  render(
    <CategoryCarousel
      categories={sampleCategories}
      heading="Featured Categories"
    />,
  );

  const categoryCards = screen.queryAllByText(/Category \d/);
  expect(categoryCards).toHaveLength(sampleCategories.length);
});

test("renders the provided categories correctly", () => {
  render(
    <CategoryCarousel
      categories={sampleCategories}
      heading="Featured Categories"
    />,
  );

  sampleCategories.forEach((category) => {
    const categoryNameElement = screen.queryByText(category.name);
    expect(categoryNameElement).toBeInTheDocument();
  });
});

test("renders the 'View all categories' link correctly", () => {
  render(
    <CategoryCarousel
      categories={sampleCategories}
      heading="Featured Categories"
    />,
  );

  const seeMoreLink = screen.queryByText("View all categories");
  expect(seeMoreLink).toBeInTheDocument();
});
