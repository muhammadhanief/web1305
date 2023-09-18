import React from "react";
import SkeletonParallax from "../skeletonParallax";
import Keempat from "../isi/keempat";

const fourthParallax = () => {
  return (
    <SkeletonParallax
      content={<Keempat></Keempat>}
      titleParallax="Kedalaman Kemiskinan"
      color="black"
      bg="bg-bg4"
      bgHero="bg-hero4"
    ></SkeletonParallax>
  );
};

export default fourthParallax;
