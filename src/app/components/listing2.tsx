

import React from "react";
import Image from "next/image";

export default function Listing2() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4">
      {/* Header Section */}
      <div>
        <h1 className="font-bold text-2xl sm:text-4xl text-left ml-4 mb-8">
          New Ceramics
        </h1>
      </div>

      {/* Image Listing Section */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8">
        {/* Image 1 */}
        <div className="flex justify-center">
          <Image
            src="/listing1.png"
            alt="Ceramic item 1"
            width={630}
            height={462}
            className="rounded-lg"
          />
        </div>

        {/* Image 2 */}
        <div className="flex justify-center">
          <Image
            src="/Product 0.png"
            alt="Ceramic item 2"
            width={305}
            height={462}
            className="rounded-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="flex justify-center">
          <Image
            src="/listing2.png"
            alt="Ceramic item 3"
            width={305}
            height={462}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
