import React from "react";
import { Link } from "react-router-dom";
import TitleCard from "./TitleCard";

const Card_9 = (color = "#53286f") => {
  return (
    <div className="relative px-4 py-8 mt-6 shadow-md rounded-2xl group">
      {/* Content with hover blur effect */}
      <div className="relative duration-300 cursor-pointer group-hover:blur-lg ">
        <img
          alt=""
          src="https://img.mysignature.io/a/v1/2/9/c/29c1d8c3-1ece-5bd1-9bb6-79cce90994a7.png"
        />
        <div className="flex">
          <div className="pr-4 border-r-2 border-[#53286f]">
            <img
              alt=""
              src="https://img.mysignature.io/p/c/2/9/c2915c4e-d50a-51b5-9ca8-99cfbde9ba00.png?time=1711368244"
              className="h-32 w-28"
            />
          </div>
          <div className="ml-2">
            <div className="flex">
              <h1 className="text-[14px] text-[#53286f]">George Stery&nbsp;</h1>
            </div>

            <div className="flex my-1">
              <h1 className="text-[#53286f] text-[12px]">
                hope@mysignature.io &nbsp;
              </h1>
            </div>
            <div className="flex">
              <h1 className="text-[#53286f] text-[12px]">
                mysignature.io &nbsp;
              </h1>
            </div>
            <div className="flex my-1">
              <h1 className="text-[#53286f] text-[12px]">
                + 533 - 540 - 782&nbsp;
              </h1>
            </div>
            <div className="flex gap-2 mt-1">
              <span className="bg-[#53286f] flex justify-center items-center rounded-[15%] w-[26px] text-center text-[12px] h-[26px]">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  // style="position: relative; top: 4.4px; width: 13.2px;"
                  className="relative w-[13.2px]"
                >
                  <path
                    d="M365.714 327.385h202.407v104.748h2.894c28.16-50.993 97.095-104.748 199.819-104.748 213.653 0 253.166 134.28 253.166 308.924v355.692h-210.983v-315.321c0-75.212-1.525-171.953-109.746-171.953-109.883 0-126.651 81.907-126.651 166.491v320.783h-210.905v-664.615zM0 327.385h219.429v664.615h-219.429v-664.615zM219.429 142.769c0 61.176-49.121 110.769-109.714 110.769s-109.714-49.593-109.714-110.769c0-61.176 49.121-110.769 109.714-110.769s109.714 49.593 109.714 110.769z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
              </span>
              <span className="bg-[#53286f] flex justify-center items-center rounded-[15%] w-[26px] text-center text-[12px] h-[26px]">
                <svg
                  viewBox="0 0 1053 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-[13.2px]"
                >
                  <path
                    d="M529.314 0c-282.77 0-512 229.23-512 512s229.23 512 512 512c282.77 0 512-229.23 512-512s-229.23-512-512-512zM796.625 362.543c26.244-3.104 51.27-10.053 74.533-20.331-17.39 25.922-39.386 48.681-64.758 66.899 0.252 5.533 0.377 11.115 0.377 16.715 0 170.821-130.525 367.774-369.199 367.774-73.275 0-141.499-21.39-198.893-58.078 10.132 1.205 20.486 1.814 30.938 1.814 60.81 0 116.752-20.658 161.171-55.331-56.794-1.050-104.705-38.423-121.215-89.764 7.917 1.504 16.036 2.305 24.415 2.305 11.817 0 23.303-1.571 34.181-4.541-59.351-11.867-104.097-64.102-104.097-126.73 0-0.541 0-1.088 0.010-1.638 17.486 9.708 37.509 15.518 58.768 16.185-34.798-23.175-57.722-62.754-57.722-107.587 0-23.684 6.406-45.902 17.573-64.989 64.005 78.225 159.623 129.679 267.465 135.069-2.226-9.468-3.379-19.327-3.379-29.459 0-71.37 58.111-129.255 129.761-129.255 37.344 0 71.066 15.694 94.738 40.805 29.544-5.796 57.326-16.542 82.4-31.358-9.708 30.2-30.269 55.504-57.066 71.496z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
              </span>
              <span className="bg-[#53286f] flex justify-center items-center rounded-[15%] w-[26px] text-center text-[12px] h-[26px]">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-[13.2px]"
                >
                  <path
                    d="M160 358.558c0-94.11 36.184-176.162 82.265-229.954l-0.115-0.999c51.994-62.748 142.984-127.605 268.809-127.605 60.833 0 107.108 16.346 107.108 16.346l-0.308 0.326 0.828-0.326c86.67 28.421 160.908 87.838 205.649 175.629 0.247-0.041 39.763 68.507 39.763 167.11 0 105.458-40.035 180.861-40.035 180.861-25.113 52.958-73.758 116.453-100.247 149.854l-6.377 8.004c-4.846 6.057-8.456 10.524-10.363 12.985-41.595 52.729-84.23 107.567-118.027 169.261-17.158 32.165-28.077 65.911-42.115 110.204-6.759 20.564-15.598 33.747-34.836 33.747-17.678 0-25.997-7.909-34.836-33.747-15.078-46.929-23.397-73.294-43.675-112.313-16.638-30.056-48.355-79.621-79.551-119.168v0l-9.516-12.761c-48.779-64.333-114.523-136.661-150.106-218.72v0c0 0-34.316-69.075-34.316-168.733zM512 220.935c-58.109 0-94.475 37.567-102.366 46.583l-1.386 1.633c-0.158 0.193-0.237 0.295-0.237 0.295l-0.108-0.006 0.032 0.032c0.076-0.026 0.075-0.025 0.072-0.022l0.524 0.523-6.961 8.343c-8.997 13.721-24.236 42.394-24.236 79.187 0 75.93 60.313 136.041 134.665 136.041 49.895 0 83.133-27.563 96.645-41.36l6.303-7.678 4.679-5.8 3.409-4.404c9.084-14.438 23.108-42.387 23.108-77.326 0-77.512-64.473-136.041-134.145-136.041z"
                    fill="#FFFFFF"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div>
          <img
            alt=""
            src="https://img.mysignature.io/a/v1/d/e/6/de630aa7-c440-5dd9-bf04-a152e22e6b74.png"
            className="w-32 h-8 mt-6 mb-6"
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
export default Card_9;
