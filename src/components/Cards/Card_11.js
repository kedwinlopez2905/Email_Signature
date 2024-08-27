import React from "react";
import { Link } from "react-router-dom";
import TitleCard from "./TitleCard";

const Card_11 = () => {
  return (
    <div className="relative px-4 py-8 mt-6 shadow-md rounded-2xl group">
      {/* Content with hover blur effect */}
      <div className="relative duration-300 cursor-pointer group-hover:blur-lg ">
        <img
          alt=""
          src="https://img.mysignature.io/a/v1/f/e/6/fe6b83cb-1be8-5787-8ad3-1070f2223202.png"
          className="w-full "
        />
        <div className="flex">
          <div className="pr-4 border-r-2 border-[#097d5e] mr-4">
            <img
              alt=""
              src="https://img.mysignature.io/p/a/c/c/acc5a5b2-2dc5-5836-a8df-bb818f28dfde.png?time=1708938021"
              className="w-28 h-28 "
            />
          </div>
          <div className="">
            <h1 className="text-[14px] text-[#097d5e]">Giuliana Thompson</h1>
            <h1 className="text-[11px]">
              name@example.com
              <br />
              mysignature.io
              <br />
              +1 341 113 7834
              <br />
            </h1>
            <div className="flex gap-1">
              <span className="bg-[#e7f1ff] flex justify-center items-center rounded-[50%] w-[26px] text-center text-[12px] h-[26px]">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-[13.2px]"
                >
                  <path
                    d="M682.653 512c0-93.991-76.659-170.654-170.654-170.654s-170.654 76.659-170.654 170.654c0 93.995 76.659 170.654 170.654 170.654s170.654-76.659 170.654-170.654zM774.646 512c0 145.323-117.325 262.645-262.645 262.645s-262.645-117.325-262.645-262.645c0-145.32 117.325-262.645 262.645-262.645s262.645 117.325 262.645 262.645zM846.641 238.688c0 33.997-27.331 61.328-61.328 61.328s-61.328-27.331-61.328-61.328c0-33.996 27.331-61.328 61.328-61.328s61.328 27.331 61.328 61.328v0zM512 92.033c-74.66 0-234.647-5.999-301.975 20.666-23.331 9.332-40.662 20.666-58.661 38.662s-29.33 35.33-38.662 58.661c-26.666 67.328-20.666 227.315-20.666 301.975s-5.999 234.647 20.666 301.975c9.332 23.331 20.666 40.662 38.662 58.661s35.33 29.33 58.661 38.662c67.328 26.666 227.315 20.666 301.975 20.666s234.647 5.999 301.975-20.666c23.331-9.332 40.662-20.666 58.661-38.662s29.33-35.33 38.662-58.661c26.666-67.328 20.666-227.315 20.666-301.975s5.999-234.647-20.666-301.975c-9.332-23.331-20.666-40.662-38.662-58.661s-35.33-29.33-58.661-38.662c-67.328-26.666-227.315-20.666-301.975-20.666zM1023.958 512c0 70.66 0.667 140.655-3.332 211.316-4 81.995-22.666 154.655-82.66 214.651s-132.656 78.66-214.651 82.66c-70.66 4-140.655 3.332-211.316 3.332s-140.655 0.667-211.316-3.332c-81.995-4-154.655-22.666-214.651-82.66s-78.66-132.656-82.66-214.651c-4-70.66-3.332-140.655-3.332-211.316s-0.667-140.655 3.332-211.316c4-81.995 22.666-154.655 82.66-214.651s132.656-78.66 214.651-82.66c70.66-4 140.655-3.332 211.316-3.332s140.655-0.667 211.316 3.332c81.995 4 154.655 22.666 214.651 82.66s78.66 132.656 82.66 214.651c4 70.66 3.332 140.655 3.332 211.316z"
                    fill="#097D5E"
                  ></path>
                </svg>
              </span>
              <span className="bg-[#e7f1ff] flex justify-center items-center rounded-[50%] w-[26px] text-center text-[12px] h-[26px]">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-[13.2px]"
                >
                  <path
                    d="M1024 512.329c0-282.951-229.23-512.329-512-512.329s-512 229.378-512 512.329c0 255.715 187.23 467.671 432 506.101v-358.005h-130v-148.096h130v-112.872c0-128.403 76.44-199.328 193.39-199.328 56 0 114.61 10.006 114.61 10.006v126.081h-64.56c-63.6 0-83.44 39.496-83.44 80.052v96.061h142l-22.7 148.096h-119.3v358.005c244.77-38.43 432-250.386 432-506.101z"
                    fill="#097D5E"
                  ></path>
                </svg>
              </span>
              <span className="bg-[#e7f1ff] flex justify-center items-center rounded-[50%] w-[26px] text-center text-[12px] h-[26px]">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-[13.2px]"
                >
                  <path
                    d="M1021.082 142.656l-154.528 733.189c-11.658 51.746-42.061 64.626-85.265 40.247l-235.45-174.558-113.61 109.932c-12.573 12.649-23.088 23.228-47.319 23.228l16.916-241.253 436.382-396.723c18.973-17.019-4.115-26.448-29.488-9.429l-539.477 341.756-232.249-73.135c-50.519-15.869-51.433-50.826 10.515-75.205l908.424-352.106c42.061-15.869 78.864 9.429 65.149 74.055z"
                    fill="#097D5E"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          alt=""
          src="https://img.mysignature.io/b/a/c/c/acc5a5b2-2dc5-5836-a8df-bb818f28dfde.png?time=1708938021"
          className="w-64 mt-6 mb-6 h-18"
        />
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
export default Card_11;
