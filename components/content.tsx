import { constants } from "fs/promises";
import React from "react";
import Image from "next/image";

type Props = {
  text?: string;
};

const Content = (props: any) => {
  return (
    <div className="lg:mx-36 xl:mx-80 pt-2 lg:pt-4 mx-4 my-8 border lg:border-2 border-black bg-white rounded-xl bg-opacity-70">
      <div
        data-aos="zoom-in"
        // data-aos-once="true"
        className=" py-2 lg:py-4 px-4 lg:px-10 text-justify "
      >
        {props.content}
      </div>
    </div>
  );
};

export default Content;
