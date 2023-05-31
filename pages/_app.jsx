import { Navigation } from "@/components";
import "@/globals.scss";
import { Roboto, Source_Serif_Pro } from "next/font/google";
import Layout from "./layout/Layout";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "300"] });
const sourceSherif = Source_Serif_Pro({ subsets: ["latin"], weight: ["700"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Layout className={sourceSherif.className}>
      <Component {...pageProps} />
      </Layout>
    </main>
  );
}
