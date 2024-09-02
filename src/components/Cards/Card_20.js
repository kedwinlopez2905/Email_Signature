import React from "react";
import { Link } from "react-router-dom";
import TitleCard from "./TitleCard";

const Card_20 = () => {
  return (
    <div className="relative px-4 py-8 mt-6 shadow-md rounded-2xl group">
      {/* Content with hover blur effect */}
      <div className="relative duration-300 cursor-pointer group-hover:blur-lg ">
        <div>
          <img
            alt=""
            src="https://img.mysignature.io/a/v1/3/d/3/3d347537-6b72-5567-97e8-1479a7b7ba1c.png"
          />
        </div>
        <div className="flex mt-2">
          <div className="flex-1 pr-2 border-r-2 border-[#3d2407]">
            <img
              alt=""
              src="https://img.mysignature.io/p/e/1/0/e10d1f37-8498-5e33-8e2a-ea0c5f876941.png?time=1709565519"
              className="w-28"
            />
          </div>
          <div className="ml-2">
            <h1 className="text-[14px] text-[#3d2407]">Ameera Charles</h1>
            <div className="flex">
              <h1 className="text-[#3d2407] text-[12px]">?: &nbsp;</h1>
              <h1 className="text-[11px]">mya@villegas.io</h1>
            </div>
            <div className="flex">
              <h1 className="text-[#3d2407] text-[12px]">?: &nbsp;</h1>
              <h1 className="text-[11px]">mysignature.io</h1>
            </div>
            <div className="flex">
              <h1 className="text-[#3d2407] text-[12px]">?: &nbsp;</h1>
              <h1 className="text-[11px]">987 Comfort Blvd, Paris</h1>
            </div>
            <div className="flex gap-2 mt-1">
              <span className="bg-[#f97125] flex justify-center items-center rounded-[10%] w-[20px] text-center text-[12px] h-[20px]">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-[13px]"
                >
                  <path
                    d="M682.653 512c0-93.991-76.659-170.654-170.654-170.654s-170.654 76.659-170.654 170.654c0 93.995 76.659 170.654 170.654 170.654s170.654-76.659 170.654-170.654zM774.646 512c0 145.323-117.325 262.645-262.645 262.645s-262.645-117.325-262.645-262.645c0-145.32 117.325-262.645 262.645-262.645s262.645 117.325 262.645 262.645zM846.641 238.688c0 33.997-27.331 61.328-61.328 61.328s-61.328-27.331-61.328-61.328c0-33.996 27.331-61.328 61.328-61.328s61.328 27.331 61.328 61.328v0zM512 92.033c-74.66 0-234.647-5.999-301.975 20.666-23.331 9.332-40.662 20.666-58.661 38.662s-29.33 35.33-38.662 58.661c-26.666 67.328-20.666 227.315-20.666 301.975s-5.999 234.647 20.666 301.975c9.332 23.331 20.666 40.662 38.662 58.661s35.33 29.33 58.661 38.662c67.328 26.666 227.315 20.666 301.975 20.666s234.647 5.999 301.975-20.666c23.331-9.332 40.662-20.666 58.661-38.662s29.33-35.33 38.662-58.661c26.666-67.328 20.666-227.315 20.666-301.975s5.999-234.647-20.666-301.975c-9.332-23.331-20.666-40.662-38.662-58.661s-35.33-29.33-58.661-38.662c-67.328-26.666-227.315-20.666-301.975-20.666zM1023.958 512c0 70.66 0.667 140.655-3.332 211.316-4 81.995-22.666 154.655-82.66 214.651s-132.656 78.66-214.651 82.66c-70.66 4-140.655 3.332-211.316 3.332s-140.655 0.667-211.316-3.332c-81.995-4-154.655-22.666-214.651-82.66s-78.66-132.656-82.66-214.651c-4-70.66-3.332-140.655-3.332-211.316s-0.667-140.655 3.332-211.316c4-81.995 22.666-154.655 82.66-214.651s132.656-78.66 214.651-82.66c70.66-4 140.655-3.332 211.316-3.332s140.655-0.667 211.316 3.332c81.995 4 154.655 22.666 214.651 82.66s78.66 132.656 82.66 214.651c4 70.66 3.332 140.655 3.332 211.316z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </span>
              <span className="bg-[#f97125] flex justify-center items-center rounded-[10%] w-[20px] text-center text-[12px] h-[20px]">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-[13px]"
                >
                  <path
                    d="M1024 512.329c0-282.951-229.23-512.329-512-512.329s-512 229.378-512 512.329c0 255.715 187.23 467.671 432 506.101v-358.005h-130v-148.096h130v-112.872c0-128.403 76.44-199.328 193.39-199.328 56 0 114.61 10.006 114.61 10.006v126.081h-64.56c-63.6 0-83.44 39.496-83.44 80.052v96.061h142l-22.7 148.096h-119.3v358.005c244.77-38.43 432-250.386 432-506.101z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </span>
              <span className="bg-[#f97125] flex justify-center items-center rounded-[10%] w-[20px] text-center text-[12px] h-[20px]">
                <svg
                  viewBox="0 0 1053 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-[13px]"
                >
                  <path
                    d="M529.314 0c-282.77 0-512 229.23-512 512s229.23 512 512 512c282.77 0 512-229.23 512-512s-229.23-512-512-512zM796.625 362.543c26.244-3.104 51.27-10.053 74.533-20.331-17.39 25.922-39.386 48.681-64.758 66.899 0.252 5.533 0.377 11.115 0.377 16.715 0 170.821-130.525 367.774-369.199 367.774-73.275 0-141.499-21.39-198.893-58.078 10.132 1.205 20.486 1.814 30.938 1.814 60.81 0 116.752-20.658 161.171-55.331-56.794-1.050-104.705-38.423-121.215-89.764 7.917 1.504 16.036 2.305 24.415 2.305 11.817 0 23.303-1.571 34.181-4.541-59.351-11.867-104.097-64.102-104.097-126.73 0-0.541 0-1.088 0.010-1.638 17.486 9.708 37.509 15.518 58.768 16.185-34.798-23.175-57.722-62.754-57.722-107.587 0-23.684 6.406-45.902 17.573-64.989 64.005 78.225 159.623 129.679 267.465 135.069-2.226-9.468-3.379-19.327-3.379-29.459 0-71.37 58.111-129.255 129.761-129.255 37.344 0 71.066 15.694 94.738 40.805 29.544-5.796 57.326-16.542 82.4-31.358-9.708 30.2-30.269 55.504-57.066 71.496z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div>
          <img
            alt=""
            src="https://img.mysignature.io/b/e/1/0/e10d1f37-8498-5e33-8e2a-ea0c5f876941.png?time=1709565519"
            className="w-48 mt-6 mb-4"
          />
        </div>
        <div className="flex items-center gap-2">
          <img
            alt=""
            src="https://img.mysignature.io/addons/v2/hand-leaves.png"
          />
          <p className="text-[11px] text-center">
            Please don’t print this email
          </p>
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
export default Card_20;
