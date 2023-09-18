import React from "react";
import { LoremIpsum } from "lorem-ipsum";
import SkeletonParallax from "../skeletonParallax";
import Kelima from "../isi/kelima";

const fifthParallax = () => {
  return (
    <div>
      <SkeletonParallax
        content={<Kelima></Kelima>}
        titleParallax="Keparahan Kemiskinan (P2)"
        color="white"
        bg="bg-bg5"
        bgHero="bg-hero5"
        alt="Tabel5.1"
      ></SkeletonParallax>
    </div>
  );
};

export default fifthParallax;
