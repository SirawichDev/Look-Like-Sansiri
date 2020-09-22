import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import "antd/dist/antd.css";
import "../styles/global.css";
import "antd-mobile/dist/antd-mobile.css";
import "react-table-6/react-table.css";
import "rc-drawer/assets/index.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div style={{ width: "100%" }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
