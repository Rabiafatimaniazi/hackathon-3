"use clint";
import React from "react";
import Imagecard2 from "../components/imagecard2";
import Feature from "../components/Feature ";
import Listing from "../components/listling";
import Image from "next/image";
import Emailinput from "../components/email";

export default function Homepage() {
  return (
    <div>
      <div>
        <Image
          src={"/homepage2hero.jpg"}
          alt="home2hro"
          width={1440}
          height={704}
        />
      </div>

      <Feature />
      <Listing />
      <Imagecard2 />
      <Emailinput/>
    </div>
  );
}
