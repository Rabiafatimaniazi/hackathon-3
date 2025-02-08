import React from "react";
import PropTypes from  "prop-types";

function LightCTAA(props:any) {
  return (
    <section className="text-gray-600 body-font bg-[#FFFFFF]" >
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
          <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-[#2A254B] ">
          A brand built on the love of craftmanship,
          quality and outstanding customer service
          </h1>
          <button className={`flex-shrink-0 text-[#2A254B] bg-[#F9F9F9] border-0 py-2 px-8 focus:outline-none hover:bg-${props.theme}-600 rounded text-lg mt-10 sm:mt-0`}>
          View our products
          </button>
        </div>
      </div>
    </section>
  );
}

LightCTAA.defaultProps = {
  theme: 'indigo'
};

LightCTAA.propTypes = {
  theme: PropTypes.string.isRequired
};

export default LightCTAA;