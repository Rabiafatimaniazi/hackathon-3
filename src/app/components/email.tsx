

import React from "react";
import PropTypes from  "prop-types";

function Emailinput(props:any ) {
  return (
    <section className="text-gray-600 body-font bg-[#F9F9F9]">
      <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center bg-white">
        
        <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#2A254B]">
          Join the club and get the benefits
          </h1>
          <p className="mb-8 leading-relaxed text-[16] font-normal taxt-[#2A254B] ">
          Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more
          </p>
          <div className="flex w-full justify-center items-end">
            <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-[#2A254B]"
              >
                
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className={`w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-${props.theme}-200 focus:bg-transparent border border-gray-300 focus:border-${props.theme}-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
              />
            </div>
            <button className={`flex text-white bg-[#2A254B] border-0 py-2 px-6 focus:outline-none hover:bg-${props.theme}-600 rounded text-[16] font-normal`}>
            signup
            </button>
          </div>
         
          
        </div>
      </div>
    </section>
  );
}

Emailinput.defaultProps = {
  theme: 'indigo'
};

Emailinput.propTypes = {
  theme: PropTypes.string.isRequired
};

export default Emailinput;