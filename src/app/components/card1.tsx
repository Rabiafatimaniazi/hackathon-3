import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

function LightContentC(props: any) {
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-10 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
            What makes our brand different
          </h1>
        </div>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {/* Card 1 */}
          <div className="p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div>
                <Image
                  src={"/diliver picture.png"}
                  alt="Next day delivery"
                  width={24}
                  height={24}
                />
              </div>
              <h2 className="text-lg text-[#2A254B] font-medium title-font mb-2">
                Next day as standard
              </h2>
              <p className="leading-relaxed text-base text-[#2A254B]">
                Order before 3pm and get your order the next day as standard.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div>
                <Image
                  src={"/diliver picture.png"}
                  alt="Handmade goods"
                  width={24}
                  height={24}
                />
              </div>
              <h2 className="text-lg text-[#2A254B] font-medium title-font mb-2">
                Made by true artisans
              </h2>
              <p className="leading-relaxed text-base text-[#2A254B]">
                Handmade crafted goods made with real passion and craftsmanship.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div>
                <Image
                  src={"/diliver picture.png"}
                  alt="Unbeatable prices"
                  width={24}
                  height={24}
                />
              </div>
              <h2 className="text-lg text-[#2A254B] font-medium title-font mb-2">
                Unbeatable prices
              </h2>
              <p className="leading-relaxed text-base text-[#2A254B]">
                For our materials and quality, you won’t find better prices
                anywhere.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="p-4">
            <div className="border border-gray-200 p-6 rounded-lg">
              <div>
                <Image
                  src={"/diliver picture.png"}
                  alt="Recycled packaging"
                  width={24}
                  height={24}
                />
              </div>
              <h2 className="text-lg text-[#2A254B] font-medium title-font mb-2">
                Recycled packaging
              </h2>
              <p className="leading-relaxed text-base text-[#2A254B]">
                We use 100% recycled packaging to ensure our footprint is
                manageable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

LightContentC.defaultProps = {
  theme: "indigo",
};

LightContentC.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default LightContentC;
