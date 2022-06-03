import React from "react";
import Controll from "../controll/Controll";
import Hero from "../hero/Hero";
import ImageInfoLeft from "../image-info-left/ImageInfoLeft";
import ImageInfoRight from "../image-info-right/ImageInfoRight";

const Home = () => {
  return (
    <>
      <Hero />
      <Controll />
      <ImageInfoRight />
      <ImageInfoLeft />
    </>
  );
};

export default Home;
