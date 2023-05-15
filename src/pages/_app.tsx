import { windowState } from "@/atoms/state";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { Header } from "@/components/sections";
import Script from "next/script";

// component that listens for screen width / height / scroll changes
function WinStateListener() {
  // Import global set function of windowState
  const setWindowState = useSetRecoilState(windowState);

  // on component mounted
  useEffect(() => {
    // sets the windowState to current window h/w/s
    const resetWindowState = () =>
      setWindowState({
        width:
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        height:
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight,
        scroll: document.documentElement.scrollTop || document.body.scrollTop,
      });

    // reset windowState the first time when component mounted.
    resetWindowState();
    // The reset function will get executed in
    // the scroll and resize events.
    window.addEventListener("resize", resetWindowState);
    window.addEventListener("scroll", resetWindowState);
  }, [setWindowState]);

  return null;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Script
        strategy="afterInteractive"
        async={true}
        src="https://www.googletagmanager.com/gtag/js?id=G-0FKV5PKN87"
      />

      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
		  
			gtag('config', 'G-0FKV5PKN87');`,
        }}
      />
      <WinStateListener />
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}
