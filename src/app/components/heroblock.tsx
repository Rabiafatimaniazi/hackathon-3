import React from "react";
import Image from "next/image";

export default function Heroblock() {
  return (
    <div className="flex justify-center items-center bg-[#2A254B]">
      <div className="container mx-auto px-6 py-12 flex flex-col-reverse lg:flex-row lg:items-center lg:space-x-10">
        {/* Text Section */}
        <div className="text-white space-y-6 max-w-lg lg:max-w-none lg:space-y-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-normal leading-snug">
            The furniture brand for the <br /> future, with timeless designs
          </h1>
          <button className="bg-[#F9F9F926] text-white py-3 px-8 rounded-md text-sm sm:text-base font-medium">
            View collection
          </button>
          <p className="text-sm sm:text-base leading-relaxed">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand. <br />
            Featuring tasteful fonts, colors, and a beautiful way to display
            things digitally using modern web technologies.
          </p>
        </div>

        {/* Image Section */}
            
        <div className="  hidden md:block ">
          <Image
            src="/hero img.png"
            alt="Hero Image"
            width={520}
            height={584}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
