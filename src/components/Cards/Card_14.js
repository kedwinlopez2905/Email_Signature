import React from "react";
import { Link } from "react-router-dom";
import TitleCard from "./TitleCard";

const Card_14 = () => {
  return (
    <div className="relative px-4 py-8 mt-6 shadow-md rounded-2xl group">
      {/* Content with hover blur effect */}
      <div className="relative duration-300 cursor-pointer group-hover:blur-lg ">
        <div className="flex justify-between">
          <div className="">
            <h1 className="text-[14px] text-[#231e1c]">DAVID THOMPSON</h1>
            <p className="text-[12px] text-[#231e1c]">
            Sales Associate Sunshine Homes
            </p>
            <div className="flex">
              <h1 className="text-[#8ea2bf] text-[12px]">website: &nbsp;</h1>
              <h1 className="text-[11px]">mysignature.io</h1>
            </div>
            <div className="flex">
              <h1 className="text-[#8ea2bf] text-[12px]">email: &nbsp;</h1>
              <h1 className="text-[11px]">sto@mysignature.io</h1>
            </div>
            <div className="flex">
              <h1 className="text-[#8ea2bf] text-[12px]">phone: &nbsp;</h1>
              <h1 className="text-[11px]">+90 783 267 2789</h1>
            </div>
            <div className="flex gap-1 mt-2">
              <span className="bg-[#8ea2bf] flex justify-center items-center rounded-[10%] w-[20px] text-center text-[12px] h-[20px]">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-[13.2px]"
                >
                  <path
                    d="M1024 512.329c0-282.951-229.23-512.329-512-512.329s-512 229.378-512 512.329c0 255.715 187.23 467.671 432 506.101v-358.005h-130v-148.096h130v-112.872c0-128.403 76.44-199.328 193.39-199.328 56 0 114.61 10.006 114.61 10.006v126.081h-64.56c-63.6 0-83.44 39.496-83.44 80.052v96.061h142l-22.7 148.096h-119.3v358.005c244.77-38.43 432-250.386 432-506.101z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </span>
              <span className="bg-[#8ea2bf] flex justify-center items-center rounded-[10%] w-[20px] text-center text-[12px] h-[20px]">
                <svg
                  viewBox="0 0 1053 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-[13.2px]"
                >
                  <path
                    d="M529.314 0c-282.77 0-512 229.23-512 512s229.23 512 512 512c282.77 0 512-229.23 512-512s-229.23-512-512-512zM796.625 362.543c26.244-3.104 51.27-10.053 74.533-20.331-17.39 25.922-39.386 48.681-64.758 66.899 0.252 5.533 0.377 11.115 0.377 16.715 0 170.821-130.525 367.774-369.199 367.774-73.275 0-141.499-21.39-198.893-58.078 10.132 1.205 20.486 1.814 30.938 1.814 60.81 0 116.752-20.658 161.171-55.331-56.794-1.050-104.705-38.423-121.215-89.764 7.917 1.504 16.036 2.305 24.415 2.305 11.817 0 23.303-1.571 34.181-4.541-59.351-11.867-104.097-64.102-104.097-126.73 0-0.541 0-1.088 0.010-1.638 17.486 9.708 37.509 15.518 58.768 16.185-34.798-23.175-57.722-62.754-57.722-107.587 0-23.684 6.406-45.902 17.573-64.989 64.005 78.225 159.623 129.679 267.465 135.069-2.226-9.468-3.379-19.327-3.379-29.459 0-71.37 58.111-129.255 129.761-129.255 37.344 0 71.066 15.694 94.738 40.805 29.544-5.796 57.326-16.542 82.4-31.358-9.708 30.2-30.269 55.504-57.066 71.496z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </span>
              <span className="bg-[#8ea2bf] flex justify-center items-center rounded-[10%] w-[20px] text-center text-[12px] h-[20px]">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-[13.2px]"
                >
                  <path
                    d="M519.85 160.015c0.849 0.003 1.763 0.006 2.74 0.009l10.445 0.047c32.116 0.171 97.222 0.754 168.688 2.734l17.984 0.525 18.156 0.587c3.035 0.103 6.074 0.209 9.114 0.317l18.242 0.685c36.455 1.44 72.559 3.302 104.981 5.708 20 2.453 63.6 2.657 102.6 44.352 30.8 31.68 40.8 103.829 40.8 103.829v0l0.268 2.306c1.612 14.109 9.951 90.704 10.132 167.131v0 79.302c0 84.821-10.2 169.437-10.2 169.437s-10 72.149-40.8 103.829c-39 41.695-82.6 41.899-102.6 44.352-24.317 1.77-50.71 3.251-77.773 4.491l-18.126 0.791c-3.032 0.126-6.069 0.249-9.108 0.37l-18.25 0.689c-97.327 3.504-193.246 4.282-224.543 4.448l-5.095 0.025c-0.718 0.003-1.369 0.006-1.951 0.008h-4.71c-19.049-0.186-268.198-2.748-347.044-10.413-22.8-4.497-74-3.066-113-44.761-30.6-31.68-40.6-103.829-40.6-103.829s-10.2-84.821-10.2-169.437l0.031-87.507c0.349-46.459 3.568-92.038 6.292-122.816l0.935-10.225c1.356-14.348 2.462-24.089 2.82-27.157l0.122-1.034c0 0 9.8-72.149 40.6-103.829 39-41.695 82.6-41.899 102.6-44.352 29.721-2.206 62.534-3.954 95.877-5.339l27.346-1.054c88.16-3.149 175.135-3.956 213.942-4.163l10.445-0.047c0.977-0.003 1.891-0.006 2.74-0.009zM406 369.702v294.114l276.6-146.546-276.6-147.568z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className="">
            <img
              alt=""
              src="https://img.mysignature.io/p/e/f/7/ef73206a-9bed-5f2e-aebf-6d8be914e210.png?time=1709220593"
              className="h-28 w-26"
            />
          </div>
        </div>
        <div>
          <img
            alt=""
            src="https://img.mysignature.io/a/v1/a/e/8/ae87af79-4eb9-5bfe-9ad4-c968b1aa3263.png"
            className="h-8 mt-6 mb-4 w-70"
          />
        </div>
        <div className="flex gap-2">
            <img alt="" src="https://img.mysignature.io/b/e/f/7/ef73206a-9bed-5f2e-aebf-6d8be914e210.png?time=1709220593"/>
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
export default Card_14;
