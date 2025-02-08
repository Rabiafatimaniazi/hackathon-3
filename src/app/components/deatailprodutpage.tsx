import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";

function ProductDetail() {
  return (
    <div className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={"/product detail.png"} height={721} width={759}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
           
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
            The Dandy Chair
            </h1>

            <span className="title-font font-medium text-2xl text-gray-900">
                $250
              </span>
              <br/>
              <br/>

            <h2>Description</h2>
            <p className="leading-relaxed">
        
            A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.
            </p> <br/>
            <ul>
                <li>
                Premium material <br/>
Handmade upholstery<br/>
Quality timeless classic
                </li>
            </ul>


            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button
                  className={`border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none`}
                ></button>
              </div>
              <div className="flex ml-6 items-center">
                <span className="mr-3">Size</span>
                <div className="relative">
                  <select
                    className={`rounded border appearance-none border-gray-300 py-2 focus:outline-none text-base pl-3 pr-10`}
                  >
                    <option>SM</option>
                    <option>M</option>
                    <option>L</option>
                    <option>XL</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-between" >
            <span className="title-font font-medium text-2xl text-gray-900">
                
              </span>

              <button className={`flex text-white bg-[#2A254B] border-0 py-2 px-6  text-[16px] font-normal`}>
              Add to cart
            </button>

              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ProductDetail.defaultProps = {
  theme: "indigo",
};

ProductDetail.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default ProductDetail;
