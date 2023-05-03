import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Pixelwave - The no-code agency you needed</title>
        <meta
          name="description"
          content="Pixelwave is an agency specialized in crafting beautiful user interfaces and seamless user experiences for complex web applications using no-code technologies."
        />
        <meta
          name="og:title"
          content="Pixelwave - The no-code agency you needed"
        />
        <meta
          name="og:description"
          content="Pixelwave is an agency specialized in crafting beautiful user interfaces and seamless user experiences for complex web applications using no-code technologies."
        />
        <meta name="og:url" content="pixelwave.io" />
        <meta name="og:image" content="/assets/brand.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
