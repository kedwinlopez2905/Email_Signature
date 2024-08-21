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
      <div className="top-0 flex justify-between gap-4 shadow-md navbar z-1000">
        <Link to={"/app/welcome"}>
          <img
            className="w-10 mask mask-squircle"
            src="/logo192.png"
            alt="DashWind Logo"
          />
          MySignature
        </Link>
        <div className="flex-none ">
          <label>
            <div className="inline-block float-z">
              <button className="px-6 normal-case btn btn-sm badge badge-secondary">
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
