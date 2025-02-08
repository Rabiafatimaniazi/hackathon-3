import React from "react";
import Image from "next/image";

export default function Imagecard() {
  return (
    <div className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* Left Content */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-2xl text-3xl mb-4 font-normal text-[#2A254B]">
            From a studio in London to a global brand with
            <br className="hidden lg:inline-block" />
            over 400 outlets
          </h1>
          <p className="mb-8 leading-relaxed text-sm">
            When we started Avion, the idea was simple: make high-quality
            furniture affordable and available for the mass market.
            <br />
            <br />
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe, and design. Our Chelsea boutique became the hotbed
            for the London interior design community.
          </p>
          <button className="inline-flex text-[#2A254B] bg-[#F9F9F9] py-2 px-6 rounded text-lg hover:bg-indigo-600">
            Get in touch
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="Studio with furniture and homeware"
            src="/Image.png"
            width={720}
            height={603}
          />
        </div>
      </div>
    </div>
  );
}