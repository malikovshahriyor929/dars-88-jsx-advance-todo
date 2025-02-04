import React from "react";
import { NavLink } from "react-router-dom";

import { GoHome } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { IoTriangleSharp } from "react-icons/io5";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-2 items-center py-3">
      <p className="bg-black rounded-md p-2 text-white">
        <IoTriangleSharp />
      </p>
      <div className="flex items-center gap-5 flex-col mx-2 ">
        <NavLink className="p-2 text-[22px]" to={"/"}>
          <GoHome />
        </NavLink>
        <NavLink className="p-2 text-[22px]" to={"/cart"}>
          <FaShoppingCart />
        </NavLink>
        <NavLink className="p-2 text-[22px]" to={"/product"}>
          <FiBox />
        </NavLink>
        <NavLink className="p-2 text-[22px]" to={"/user"}>
          <FaRegUser />
        </NavLink>
      </div>
    </div>
  );
};

export default SideBar;
