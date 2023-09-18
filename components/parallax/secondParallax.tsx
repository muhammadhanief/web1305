import React from "react";
import Image from "next/image";
import { LoremIpsum } from "lorem-ipsum";
import SkeletonParallax from "../skeletonParallax";
import Kedua from "../isi/kedua";

const secondParallax = () => {
  return (
    <SkeletonParallax
      content={<Kedua></Kedua>}
      titleParallax="Mengukur Kemiskinan"
      color="black"
      bg="bg-bg2"
      bgHero="bg-hero2"
    ></SkeletonParallax>
  );
};

export default secondParallax;
