import React, { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import {
  Navbars,
  Table,
  Intro,
  Outtro,
  Blog,
  CarouselImage,
  HouseFeatured, MadeForLife, Footerer
} from "@/components/index";
import { DrawerProvider } from "@/contexts/DrawerContext";
import { Layout, Breadcrumb } from "antd";
import Sticky from "react-stickynode";
import { theme } from "@/components/Styled/theme";

const App = () => {
  const [goingUp, setGoingUp] = useState(false);

  const prevScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
          <Navbars goingUp={goingUp} />
        </Sticky>
        <CarouselImage />
        <Intro />
        <HouseFeatured />
        <Outtro/>
        <MadeForLife/>
        <Blog/>
        <Footerer/>
      </Layout>
    </ThemeProvider>
  );
};
export default App;
