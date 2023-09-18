import React from "react";
import SkeletonParallax from "../skeletonParallax";
import Ketiga from "../isi/ketiga";
const thirdParallax = () => {
  return (
    <SkeletonParallax
      content={<Ketiga></Ketiga>}
      titleParallax="Menentukan Garis Kemiskinan"
      color="white"
      bg="bg-bg3"
      bgHero="bg-hero3"
    ></SkeletonParallax>
  );
};

export default thirdParallax;
