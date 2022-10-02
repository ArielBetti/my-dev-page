import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import NProgress from "nprogress";

import "../styles/globals.css";
import "nprogress/nprogress.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (_url: string) => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  return (
    <div className="bg-grey-50 bg-gray-800 overflow-hidden">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        ></link>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
