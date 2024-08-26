import React from "react";
import { Link } from "react-router-dom";
import TitleCard from "./TitleCard";

const Card_7 = () => {
  return (
    <div className="relative px-4 py-8 mt-6 shadow-md rounded-2xl group">
      {/* Content with hover blur effect */}
      <div className="relative duration-300 cursor-pointer group-hover:blur-lg ">
        <div className="flex">
          <div>
            <img
              alt=""
              src="https://img.mysignature.io/p/b/0/4/b040eb93-bbce-5280-b70e-2e71aee4602f.png?time=1720691375"
              className="mr-4 h-36 w-28"
            />
          </div>
          <div className="">
            <h1 className="text-[14px] text-[#398e80]">Joseph Collins</h1>
            <h1 className="text-[11px]">
              e:&nbsp;name@example.com
              <br />
              m:&nbsp;+1 983 333 3739
              <br />
              w:&nbsp;mysignature.io
              <br />
              Let's make the email!
            </h1>
            <div>
              <span style="display: block; border-radius: 0%; width: 24px; height: 24px; text-align: center; background-color: rgb(255, 0, 105); font-size: 12px; font-family: initial; line-height: 1;">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  // style="position: relative; top: 4.8px; width: 14.4px;"
                >
                  <path
                    d="M682.653 512c0-93.991-76.659-170.654-170.654-170.654s-170.654 76.659-170.654 170.654c0 93.995 76.659 170.654 170.654 170.654s170.654-76.659 170.654-170.654zM774.646 512c0 145.323-117.325 262.645-262.645 262.645s-262.645-117.325-262.645-262.645c0-145.32 117.325-262.645 262.645-262.645s262.645 117.325 262.645 262.645zM846.641 238.688c0 33.997-27.331 61.328-61.328 61.328s-61.328-27.331-61.328-61.328c0-33.996 27.331-61.328 61.328-61.328s61.328 27.331 61.328 61.328v0zM512 92.033c-74.66 0-234.647-5.999-301.975 20.666-23.331 9.332-40.662 20.666-58.661 38.662s-29.33 35.33-38.662 58.661c-26.666 67.328-20.666 227.315-20.666 301.975s-5.999 234.647 20.666 301.975c9.332 23.331 20.666 40.662 38.662 58.661s35.33 29.33 58.661 38.662c67.328 26.666 227.315 20.666 301.975 20.666s234.647 5.999 301.975-20.666c23.331-9.332 40.662-20.666 58.661-38.662s29.33-35.33 38.662-58.661c26.666-67.328 20.666-227.315 20.666-301.975s5.999-234.647-20.666-301.975c-9.332-23.331-20.666-40.662-38.662-58.661s-35.33-29.33-58.661-38.662c-67.328-26.666-227.315-20.666-301.975-20.666zM1023.958 512c0 70.66 0.667 140.655-3.332 211.316-4 81.995-22.666 154.655-82.66 214.651s-132.656 78.66-214.651 82.66c-70.66 4-140.655 3.332-211.316 3.332s-140.655 0.667-211.316-3.332c-81.995-4-154.655-22.666-214.651-82.66s-78.66-132.656-82.66-214.651c-4-70.66-3.332-140.655-3.332-211.316s-0.667-140.655 3.332-211.316c4-81.995 22.666-154.655 82.66-214.651s132.656-78.66 214.651-82.66c70.66-4 140.655-3.332 211.316-3.332s140.655-0.667 211.316 3.332c81.995 4 154.655 22.666 214.651 82.66s78.66 132.656 82.66 214.651c4 70.66 3.332 140.655 3.332 211.316z"
                    fill="#ff0069"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <img
            alt=""
            src="https://img.mysignature.io/addons/v2/ebay_shape1_black.png"
            className="w-24 h-8"
          />
          <img
            alt=""
            src="https://img.mysignature.io/addons/v2/appstore_shape1_black.png"
            className="w-24 h-8"
          />
        </div>
        <div className="flex items-center justify-between">
          <img
            alt=""
            src="https://img.mysignature.io/addons/v2/hand-earth.png"
            className="mt-6 mb-8"
          />
          <h1 className="text-[10px]">
            Please consider the environment before printing this email
          </h1>
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
export default Card_7;
