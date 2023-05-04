import Head from "next/head";

export default function Home() {
  return (
    <main className="Home flex flex-col items-center justify-center min-h-screen py-2 !gap-0">
      <Head>
        <title>Pixelwave - The no-code agency you needed</title>
      </Head>
      <img
        alt="Pixelwave Icon"
        src="/assets/icon.svg"
        className="max-w-[10rem]"
      />
      <h1 className="main-text mt-10">
        Welcome to <strong className="cap">Pixelwave</strong>!
      </h1>
    </main>
  );
}
