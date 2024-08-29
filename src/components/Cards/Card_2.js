import React from "react";
import { Link } from "react-router-dom";
import TitleCard from "./TitleCard";

const Card_2 = () => {
  return (
    <div className="relative px-4 py-8 mt-6 shadow-md rounded-2xl group">
      {/* Content with hover blur effect */}
      <div className="relative duration-300 cursor-pointer group-hover:blur-lg ">
        <img
          alt=""
          src="https://img.mysignature.io/a/v1/c/0/1/c01e7193-d60c-5afe-8eb4-f0dd5d22876c.png"
          className="w-full"
        />
        <div className="flex justify-between" >
          <div className="">
            <h1 className="text-[14px] mb-4">
              VANESSA SLATER REALTOR
              <br /> IN SKYLINE REALTY
            </h1>
            <h1 className="text-[11px]">
              +1 983 333 3739
              <br />
              vanessa@skyline.com
              <br />
              mysignature.io
            </h1>
          </div>
          <div>
            <img
              alt=""
              src="https://img.mysignature.io/p/3/9/0/390e98a2-420e-52a6-a8a8-ef6aa04f2b12.png?time=1709198100"
              className="w-32 h-32"
            />
          </div>
        </div>
        <div className="flex gap-1 mt-4">
          <img
            alt=""
            src="https://img.mysignature.io/addons/v2/amazon_shape2_white.png"
            className="w-24 h-8"
          />
          <img
            alt=""
            src="https://img.mysignature.io/addons/v2/ebay_shape2_white.png"
            className="w-24 h-8"
          />
        </div>
        <div>
          <img
            alt=""
            src="https://img.mysignature.io/b/9/7/8/978bfbea-ac34-57fd-b81a-9e0edf7e0eeb.png?time=1709108740"
            className="mt-6 mb-8"
          />
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
export default Card_2;
