import React from "react";
import { Link } from "react-router-dom";
import TitleCard from "./TitleCard";

const Card_2 = () => {
  return (
    <div className="relative px-4 py-8 mt-6 shadow-md rounded-2xl group">
      {/* Content with hover blur effect */}
      <div className="relative duration-300 cursor-pointer group-hover:blur-lg ">
        <div className="flex">
          <div className="">
            <img alt="" src="img/c01e7193-d60c-5afe-8eb4-f0dd5d22876c.png" className="w-full"/>
            <h1 className="text-[14px]">
              VANESSA SLATER REALTOR<br/> IN SKYLINE REALTY
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
              src="img/390e98a2-420e-52a6-a8a8-ef6aa04f2b12.png"
              className="mr-28"
            />
          </div>
        </div>
        <div className="flex mt-4">
          <img alt="" src="img/amazon_shape2_white.png" className="w-24 h-8" />
          <img alt="" src="img/ebay_shape2_white.png" className="w-24 h-8" />
        </div>
        <div>
          <img
            alt=""
            src="img/978bfbea-ac34-57fd-b81a-9e0edf7e0eeb.png"
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
