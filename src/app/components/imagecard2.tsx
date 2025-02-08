import React from "react";
import Image from "next/image";

export default function Imagecard2() {
  return (
    <div className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 flex-col-reverse md:flex-row items-center">
        {/* Left Content */}
        <div className="bg-[#2A254B] text-white lg:w-1/2 md:w-1/2 w-full py-12 px-8 md:px-12 lg:px-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font text-3xl sm:text-4xl mb-4 font-normal">
            It started with a small idea
          </h1>
          <p className="mb-8 leading-relaxed text-sm sm:text-base">
            A global brand with local beginnings, our story began in a <br />
            small studio in South London in early 2014.
          </p>
          <button className="inline-flex text-white bg-[#F9F9F926] py-2 px-6 rounded text-lg hover:bg-indigo-600">
            View collection
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 md:w-1/2 w-full mb-8 md:mb-0 flex justify-center">
          <Image
            className="object-cover object-center rounded"
            alt="Studio with furniture and homeware"
            src="/Image Block.png"
            width={720}
            height={603}
          />
        </div>
      </div>
    </div>
  );
}
