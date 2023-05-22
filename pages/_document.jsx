import { Navigation } from "@/components";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const navigationItems = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "/categories", label: "Categories" },
    { id: 3, url: "/blog", label: "Blog" },
  ];

  return (
    <Html lang="en">
      <Head />
      <Navigation navigationItems={navigationItems} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
