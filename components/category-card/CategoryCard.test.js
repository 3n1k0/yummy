import React from "react";
import { render, screen } from "@testing-library/react";
import CategoryCard from "./CategoryCard";

describe("CategoryCard", () => {
    const category = {
        strCategory: "Test Category",
        strCategoryThumb: "https://example.com/test-image.jpg",
      };
      
  
    it("renders category image and heading correctly", () => {
      render(<CategoryCard category={category} />);
  
      const link = screen.getByRole("link");
      const image = screen.getByRole("img");
      const heading = screen.getByRole("heading", { level: 3 });
  
      expect(link).toHaveClass("link");
      expect(link).toHaveAttribute("href", `category/${category.strCategory}`);
      expect(image).toHaveClass("categoryImage");
      expect(image).toHaveAttribute("src", category.strCategoryThumb);
      expect(image).toHaveAttribute("alt", category.strCategory);
      expect(heading).toHaveClass("categoryHeading");
      expect(heading.textContent).toBe(category.strCategory);
    });
  });
  