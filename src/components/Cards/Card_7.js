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
            <h1 className="text-[11px] mt-2">
              e:&nbsp;name@example.com
              <br />
              m:&nbsp;+1 983 333 3739
              <br />
              w:&nbsp;mysignature.io
              <br />
              Let's make the email!
            </h1>
            <div className="flex gap-1">
              {/* style="display: block; border-radius: 0%; width: 24px; height: 24px; text-align: center; background-color: rgb(255, 0, 105); font-size: 12px; font-family: initial; line-height: 1;" */}
              <span className="bg-[#ff0069] mt-3 block rounded-none w-6 h-6 text-center text-[12px] font-serif">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  // style="position: relative; top: 4.8px; width: 14.4px;"
                  className="relative w-4 top-[4.8px] ml-1"
                >
                  <path
                    d="M682.653 512c0-93.991-76.659-170.654-170.654-170.654s-170.654 76.659-170.654 170.654c0 93.995 76.659 170.654 170.654 170.654s170.654-76.659 170.654-170.654zM774.646 512c0 145.323-117.325 262.645-262.645 262.645s-262.645-117.325-262.645-262.645c0-145.32 117.325-262.645 262.645-262.645s262.645 117.325 262.645 262.645zM846.641 238.688c0 33.997-27.331 61.328-61.328 61.328s-61.328-27.331-61.328-61.328c0-33.996 27.331-61.328 61.328-61.328s61.328 27.331 61.328 61.328v0zM512 92.033c-74.66 0-234.647-5.999-301.975 20.666-23.331 9.332-40.662 20.666-58.661 38.662s-29.33 35.33-38.662 58.661c-26.666 67.328-20.666 227.315-20.666 301.975s-5.999 234.647 20.666 301.975c9.332 23.331 20.666 40.662 38.662 58.661s35.33 29.33 58.661 38.662c67.328 26.666 227.315 20.666 301.975 20.666s234.647 5.999 301.975-20.666c23.331-9.332 40.662-20.666 58.661-38.662s29.33-35.33 38.662-58.661c26.666-67.328 20.666-227.315 20.666-301.975s5.999-234.647-20.666-301.975c-9.332-23.331-20.666-40.662-38.662-58.661s-35.33-29.33-58.661-38.662c-67.328-26.666-227.315-20.666-301.975-20.666zM1023.958 512c0 70.66 0.667 140.655-3.332 211.316-4 81.995-22.666 154.655-82.66 214.651s-132.656 78.66-214.651 82.66c-70.66 4-140.655 3.332-211.316 3.332s-140.655 0.667-211.316-3.332c-81.995-4-154.655-22.666-214.651-82.66s-78.66-132.656-82.66-214.651c-4-70.66-3.332-140.655-3.332-211.316s-0.667-140.655 3.332-211.316c4-81.995 22.666-154.655 82.66-214.651s132.656-78.66 214.651-82.66c70.66-4 140.655-3.332 211.316-3.332s140.655-0.667 211.316 3.332c81.995 4 154.655 22.666 214.651 82.66s78.66 132.656 82.66 214.651c4 70.66 3.332 140.655 3.332 211.316z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </span>
              <span className="bg-[#1877f2] mt-3 block rounded-none w-6 h-6 text-center text-[12px] font-serif">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  // style="position: relative; top: 4.8px; width: 14.4px;"
                  className="relative w-4 top-[4.8px] ml-1"
                >
                  <path
                    d="M1024 512.329c0-282.951-229.23-512.329-512-512.329s-512 229.378-512 512.329c0 255.715 187.23 467.671 432 506.101v-358.005h-130v-148.096h130v-112.872c0-128.403 76.44-199.328 193.39-199.328 56 0 114.61 10.006 114.61 10.006v126.081h-64.56c-63.6 0-83.44 39.496-83.44 80.052v96.061h142l-22.7 148.096h-119.3v358.005c244.77-38.43 432-250.386 432-506.101z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </span>
              <span className="bg-[#000000] mt-3 block rounded-none w-6 h-6 text-center text-[12px] font-serif">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  // style="position: relative; top: 4.8px; width: 14.4px;"
                  className="relative w-4 top-[4.8px] ml-1"
                >
                  <path
                    d="M959.851 414.292c-8.556 0.813-17.146 1.239-25.742 1.277-94.288 0.013-182.228-46.466-233.877-123.613v420.932c0 171.822-142.425 311.111-318.116 311.111s-318.116-139.289-318.116-311.111c0-171.822 142.425-311.111 318.116-311.111 6.641 0 13.132 0.584 19.661 0.985v153.312c-6.529-0.766-12.945-1.934-19.661-1.934-89.669 0-162.36 71.090-162.36 158.785s72.691 158.785 162.36 158.785c89.686 0 168.888-69.103 168.888-156.814l1.567-714.895h149.974c14.142 131.528 122.584 234.263 257.455 243.905v170.387z"
                    fill="#ffffff"
                  ></path>
                </svg>
              </span>
              <span className="bg-[#0f9d58] mt-3 block rounded-none w-6 h-6 text-center text-[12px] font-serif">
                <svg
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="relative w-4 top-[4.8px] ml-1"
                >
                  <path
                    d="M1018.366 67.964l-465.206 930.414c-7.996 15.991-23.987 25.441-41.432 25.441-3.634 0-7.268-0.726-10.903-1.454-21.079-5.088-35.617-23.261-35.617-45.067v-418.686h-418.686c-21.807 0-39.979-14.538-45.067-35.617s5.088-42.886 23.987-52.336l930.414-465.206c6.542-3.634 13.811-5.088 21.079-5.088 12.357 0 23.987 4.362 32.709 13.811 14.538 13.811 18.173 35.617 8.722 53.79z"
                    fill="#ffffff"
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
