import { useEffect } from "react";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Cesium from "cesium";
import "cesium/Build/Cesium/Widgets/widgets.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Cesium.buildModuleUrl("/cesium");
  }, []);
  return <Component {...pageProps} />;
}
