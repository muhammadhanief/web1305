import React from "react";
import SkeletonParallax from "../skeletonParallax";
import Pertama from "../isi/pertama";

const firstParallax = () => {
  return (
    <SkeletonParallax
      titleParallax="Memahami Kemiskinan"
      color="white"
      bg="bg-bg1"
      bgHero="bg-hero1"
      content={<Pertama></Pertama>}
    ></SkeletonParallax>
  );
};

export default firstParallax;
