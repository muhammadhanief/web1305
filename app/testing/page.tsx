import React from "react";
import Image from "next/image";
import Pertama from "@/public/skrips/pertama.jpeg";

const page = () => {
  return (
    <div>
      <Image src={Pertama} alt="" width={200} />
    </div>
  );
};

export default page;
