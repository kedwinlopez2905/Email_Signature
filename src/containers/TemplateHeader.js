import { themeChange } from "theme-change";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";
import UserIcon from "@heroicons/react/24/outline/UserIcon";
import Cog6ToothIcon from "@heroicons/react/24/outline/Cog6ToothIcon";
import { openRightDrawer } from "../features/common/rightDrawerSlice";
import { RIGHT_DRAWER_TYPES } from "../utils/globalConstantUtil";

import { NavLink, Routes, Link, useLocation } from "react-router-dom";

function TemplateHeader() {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );

  useEffect(() => {
    themeChange(false);
    if (currentTheme === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
  }, []);

  return (
    <>
      <div className="navbar top-0 flex justify-between z-1000 shadow-md">
        <Link to={"/app/welcome"}>
          <img
            className="mask mask-squircle w-10"
            src="/logo192.png"
            alt="DashWind Logo"
          />
          MySignature
        </Link>
        <div className="flex-none ">
          <label>
            <div className="inline-block float-z">
              <button className="btn px-6 btn-sm normal-case badge badge-secondary">
                login
              </button>
            </div>
          </label>
        </div>
      </div>
    </>
  );
}
export default TemplateHeader;
