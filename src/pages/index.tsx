import {
  Hero,
  Portfolio,
  Workflow,
  TextSection,
  TextImage,
  Reviews,
  Technologies,
} from "@/components/sections";
import Head from "next/head";

export default function Home() {
  return (
    <main className="Home">
      <Head>
        <title>Pixelwave - The no-code agency you needed</title>
      </Head>
      <Hero />
      <TextImage />
      <Workflow />
      <Portfolio />
      <TextSection />
      <TextImage />
      <Reviews />
      <Technologies />
    </main>
  );
}
