import React from "react";
import { Navigation } from "@/components";
import Footer from "@/components/footer/Footer";

const navigationItems = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "/categories", label: "Categories" },
  { id: 3, url: "/my-recipes", label: "My Recipes" },
  { id: 4, url: "/submit-recipe", label: "Submit Recipe" },
];

const Layout = ({ children }) => {
  return (
    <>
      <Navigation navigationItems={navigationItems} />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
