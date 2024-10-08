import React from "react";
import { Link } from "react-router-dom";
import TitleCard from "./TitleCard";

const Card_12 = () => {
  return (
    <div className="relative px-4 py-8 mt-6 shadow-md rounded-2xl group">
      {/* Content with hover blur effect */}
      <div className="relative duration-300 cursor-pointer group-hover:blur-lg ">
        <img
          alt=""
          src="https://img.mysignature.io/a/v1/a/1/2/a122636a-e914-50fc-8fcd-6351919fcaef.png"
          className="mb-4"
        />
        <div className="flex h-32">
          <img
            alt=""
            src="https://img.mysignature.io/p/9/f/e/9fe4b005-b495-529e-9da9-171c6a58df2c.png?time=1709558814"
            className="w-32 mr-4"
          />
          <div className="">
            <h1 className="text-[14px] text-[#37009a] mt-1">SAHAR WARD</h1>
            <h1 className="text-[bold] text-[11px]">Head Teacher</h1>
            <h1 className="text-[11px]">
              phone:&nbsp;+1 340 364 8934
              <br />
              email:&nbsp;name@skyline.com
              <br />
              mysignature.io
            </h1>
            <div className="flex gap-1 mt-4">
              <span className="bg-[#37009a] flex justify-center items-center rounded-[10%] w-[20px] text-center text-[12px] h-[20px]">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-[13.2px]"
                >
                  <path
                    d="M1024 512.329c0-282.951-229.23-512.329-512-512.329s-512 229.378-512 512.329c0 255.715 187.23 467.671 432 506.101v-358.005h-130v-148.096h130v-112.872c0-128.403 76.44-199.328 193.39-199.328 56 0 114.61 10.006 114.61 10.006v126.081h-64.56c-63.6 0-83.44 39.496-83.44 80.052v96.061h142l-22.7 148.096h-119.3v358.005c244.77-38.43 432-250.386 432-506.101z"
                    fill="#FFC68D"
                  ></path>
                </svg>
              </span>

              <span className="bg-[#37009a] flex justify-center items-center rounded-[10%] w-[20px] text-center text-[12px] h-[20px]">
                <svg
                  viewBox="0 0 1053 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-[13.2px]"
                >
                  <path
                    d="M529.314 0c-282.77 0-512 229.23-512 512s229.23 512 512 512c282.77 0 512-229.23 512-512s-229.23-512-512-512zM796.625 362.543c26.244-3.104 51.27-10.053 74.533-20.331-17.39 25.922-39.386 48.681-64.758 66.899 0.252 5.533 0.377 11.115 0.377 16.715 0 170.821-130.525 367.774-369.199 367.774-73.275 0-141.499-21.39-198.893-58.078 10.132 1.205 20.486 1.814 30.938 1.814 60.81 0 116.752-20.658 161.171-55.331-56.794-1.050-104.705-38.423-121.215-89.764 7.917 1.504 16.036 2.305 24.415 2.305 11.817 0 23.303-1.571 34.181-4.541-59.351-11.867-104.097-64.102-104.097-126.73 0-0.541 0-1.088 0.010-1.638 17.486 9.708 37.509 15.518 58.768 16.185-34.798-23.175-57.722-62.754-57.722-107.587 0-23.684 6.406-45.902 17.573-64.989 64.005 78.225 159.623 129.679 267.465 135.069-2.226-9.468-3.379-19.327-3.379-29.459 0-71.37 58.111-129.255 129.761-129.255 37.344 0 71.066 15.694 94.738 40.805 29.544-5.796 57.326-16.542 82.4-31.358-9.708 30.2-30.269 55.504-57.066 71.496z"
                    fill="#FFC68D"
                  ></path>
                </svg>
              </span>
              <span className="bg-[#37009a] flex justify-center items-center rounded-[10%] w-[20px] text-center text-[12px] h-[20px]">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-[13.2px]"

                >
                  <path
                    d="M365.714 327.385h202.407v104.748h2.894c28.16-50.993 97.095-104.748 199.819-104.748 213.653 0 253.166 134.28 253.166 308.924v355.692h-210.983v-315.321c0-75.212-1.525-171.953-109.746-171.953-109.883 0-126.651 81.907-126.651 166.491v320.783h-210.905v-664.615zM0 327.385h219.429v664.615h-219.429v-664.615zM219.429 142.769c0 61.176-49.121 110.769-109.714 110.769s-109.714-49.593-109.714-110.769c0-61.176 49.121-110.769 109.714-110.769s109.714 49.593 109.714 110.769z"
                    fill="#FFC68D"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div className="flex mt-4">
          <p className="text-[11px]">
            Please consider the environment before printing this email. Every
            unprinted email helps the environment.
          </p>
        </div>
        <div>
          <img
            alt=""
            src="https://img.mysignature.io/b/9/f/e/9fe4b005-b495-529e-9da9-171c6a58df2c.png?time=1709558814"
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
export default Card_12;
