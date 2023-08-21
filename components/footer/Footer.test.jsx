import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders navigation links", () => {
    render(<Footer />);

    const categoriesLink = screen.getByRole("link", { name: /categories/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const blogLink = screen.getByRole("link", { name: /blog/i });
    const privacyLink = screen.getByRole("link", { name: /privacy/i });
    const termsLink = screen.getByRole("link", { name: /terms/i });
    const securityLink = screen.getByRole("link", { name: /security/i });

    expect(categoriesLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(blogLink).toBeInTheDocument();
    expect(privacyLink).toBeInTheDocument();
    expect(termsLink).toBeInTheDocument();
    expect(securityLink).toBeInTheDocument();
  });

  it("renders social icons", () => {
    render(<Footer />);

    const facebookIcon = screen.getByTestId("facebook-icon");
    const twitterIcon = screen.getByTestId("twitter-icon");
    const instagramIcon = screen.getByTestId("instagram-icon");

    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
  });

  it("renders copyright information", () => {
    render(<Footer />);

    const copyrightText = screen.getByText(
      /© 2023 Your Company Name. All rights reserved./i,
    );

    expect(copyrightText).toBeInTheDocument();
  });
});
