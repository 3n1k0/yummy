import React from "react";
import { Navigation } from "@/components";
import Footer from "@/components/footer/Footer";

const navigationItems = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "/categories", label: "Categories" }
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