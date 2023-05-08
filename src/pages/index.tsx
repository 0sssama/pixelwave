import { Hero, Portfolio, Workflow } from "@/components/sections";
import TextSection from "@/components/sections/TextSection";
import Head from "next/head";

export default function Home() {
  return (
    <main className="Home">
      <Head>
        <title>Pixelwave - The no-code agency you needed</title>
      </Head>
      <Hero />
      <Workflow />
      <Portfolio />
      <TextSection />
    </main>
  );
}
