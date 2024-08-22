import React from "react";
import { Link } from "react-router-dom";
import TitleCard from "./TitleCard";

const Card_2 = () => {
  return (
    <div className="relative px-4 py-8 mt-6 shadow-md rounded-2xl group">
      {/* Content with hover blur effect */}
      <div className="relative duration-300 cursor-pointer group-hover:blur-lg ">
        <div className="flex " >
          <div className="mr-4 border-r-2 border-red-600 ">
            <img
              alt=""
              src="img/3/profile.png"
              className="w-48 mr-4"
            />
          </div>
          <div className="ml-4 ">
            <h1 className="text-[14px]">
              VANESSA SLATER REALTOR IN SKYLINE REALTY
            </h1>
            <h1 className="text-[11px]">
              +1 983 333 3739
              <br />
              vanessa@skyline.com
              <br />
              mysignature.io
            </h1>
          </div>
        </div>
        {/* <div>
          <img
            alt=""
            src="img/3/brand.gif"
            className="mt-6 mb-8"
          />
        </div> */}
        <div className="flex mt-4">
          <img alt="" src="img/3/instagram_v1_shape3_i.png" className="w-24 h-8" />
          <img alt="" src="img/3/pinterest_v1_shape3_i.png" className="w-24 h-8" />
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
