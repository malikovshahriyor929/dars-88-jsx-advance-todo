import React from "react";

import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2  text-[14px] text-[#303030] ">
        <p>dashboard</p>
        {">"}
        <p>product</p>
        {">"}
        <p>all product</p>
      </div>
      <div className="flex items-center gap-2 border-2 rounded-lg px-2">
        <IoIosSearch />
        <input
          type="text"
          placeholder="search"
          className=" outline-none  rounded-lg  px-2 w-[150px]"
        />
      </div>
    </div>
  );
};

export default Header;
