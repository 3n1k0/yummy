import Hero from "@/components/hero/Hero";
import Header from "@/components/hero/Hero";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Hero />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
