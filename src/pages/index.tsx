import {
  Hero,
  Portfolio,
  Workflow,
  TextSection,
  TextImage,
  Reviews,
  Technologies,
  AppFeatures,
  FAQ,
  Footer,
} from "@/components/sections";
import Head from "next/head";

export default function Home() {
  return (
    <main className="Home">
      <Head>
        <title>Pixelwave - The no-code agency you needed</title>
      </Head>
      <Hero />
      <TextImage model={0} />
      <Workflow />
      <Portfolio />
      <TextSection />
      <TextImage model={1} />
      <Reviews />
      <Technologies />
      <AppFeatures />
      <FAQ />
      <Footer />
    </main>
  );
}
