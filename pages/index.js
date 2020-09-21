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
const App = () => {
  return (
    <Layout>
      <Col span={24}>
        <Navbar />
        <CarouselImage />
        <Intro />
        <HouseFeatured />
        <Outtro />
        <MadeForLife />
        <Blog />
        <Footerer />
        </Col>
    </Layout>
  );
};
export default App;
