import React from "react";
import { Carousel, Image } from "antd";

const contentStyle = {
  minHeight: "450px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

export const CarouselImage = () => {
  return (
    <Carousel autoplay>
      <div>
        <Image height="450px"  src="https://s3-ap-southeast-1.amazonaws.com/o77site/sansiri-prodokbia-pl-rtm-herobanner-desktop-1680x760.jpg" />
      </div>
      <div>
        <Image height="450px" src="https://s3-ap-southeast-1.amazonaws.com/o77site/sansiri-rtmq3-single-house-hero-banner-desktop-1920x665.jpg" />
      </div>
      <div>
        <Image height="450px"  src="https://s3-ap-southeast-1.amazonaws.com/o77site/sansiri-single-house-multi-channel-hero-banner-desktop.jpg" />
      </div>
      <div>
        <Image height="450px"  src="https://s3-ap-southeast-1.amazonaws.com/o77site/sansiri-house-anasiri-hero-desktop-1920x665.jpg" />
      </div>
    </Carousel>
  );
};
