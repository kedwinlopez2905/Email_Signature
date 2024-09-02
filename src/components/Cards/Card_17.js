import React from "react";
import { Link } from "react-router-dom";

const Card_17 = () => {
  return (
    <div className="relative px-4 py-8 mt-6 shadow-md rounded-2xl group">
      {/* Content with hover blur effect */}
      <div className="relative duration-300 cursor-pointer group-hover:blur-lg ">
        <img
          alt=""
          src="https://img.mysignature.io/a/v1/7/c/a/7ca1ae20-ce8f-52d3-99b7-496ce8e780ae.png"
          className="w-full h-8"
        />
        <div className="flex mt-2">
          <div className="mr-4 ">
            <img
              alt=""
              src="https://img.mysignature.io/p/a/0/5/a054dc89-8662-5a85-91d5-84dd375b9645.png?time=1709627628"
              className="w-32 h-32"
            />
          </div>
          <div className="">
            <h1 className="text-[#c8004c]">Eleanor Waters</h1>
            <h1 className="text-[12px]">Owner &nbsp;• &nbsp;Line Design Studio</h1>
            <h1 className="text-[11px] mt-2">
              e:&nbsp;name@example.com
              <br />
              m:&nbsp;+1 983 333 3739
              <br />
              w:&nbsp;mysignature.io
              <br />
            </h1>
          </div>
        </div>
        <div className="flex gap-1 mt-4">
          <img
            alt=""
            src="https://img.mysignature.io/addons/v2/behance_v1_shape3_i.png"
            className="w-24 h-8"
          />
          <img
            alt=""
            src="https://img.mysignature.io/addons/v2/pinterest_v1_shape3_i.png"
            className="w-24 h-8"
          />
        </div>
        <div className="mt-2">
          <p className="text-[11px]">Please don’t print this email</p>
        </div>
      </div>
      {/* Button that appears on hover */}
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
        <Link to="/steps">
          <button className="px-4 py-2 font-bold text-black bg-cyan-300 rounded-3xl">
            Use Template
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Card_17;
