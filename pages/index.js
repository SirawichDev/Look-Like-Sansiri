import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  Navbars,
  Table,
  Intro,
  Outtro,
  Blog,
  CarouselImage,
  HouseFeatured,
  MadeForLife,
  Footerer,
  Navbar,
} from "@/components/index";

import { Layout, Breadcrumb, Row, Col, Affix } from "antd";

const { Header, Content } = Layout;
function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  };
}

function useWindowSize() {
  let [windowSize, setWindowSize] = useState(getSize());

  function handleResize() {
    setWindowSize(getSize());
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

const App = () => {
  const size = process.browser && useWindowSize();
  console.log('size', size)
  return (
    <Layout>
      <Col span={24}>
        <Navbar />
        <CarouselImage />
        <Intro />
        <HouseFeatured size={size}/>
        <Outtro />
        <MadeForLife />
        <Blog />
        <Footerer size={size}/>
      </Col>
    </Layout>
  );
};
export default App;
