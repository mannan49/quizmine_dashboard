import React from "react";
import { BsSearch } from "react-icons/bs";
import TodayDate from "./TodaysDate";

const SearchCard = () => {
  return (
    <div className="bg-main border-blue-500 px-10 py-3 mt-16 lg:mt-0  rounded-xl lg:flex justify-between">
      <div class="relative flex items-center lg:w-1/3 z-index">
        <input
          type="text"
          placeholder="Search..."
          class="bg-headline border rounded-full py-2 px-4 w-full focus:outline-none focus:ring focus:border-gray-300"
        />
        <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <BsSearch />
        </div>
      </div>
      <div className="bg-headline border rounded-full py-2 px-4 hidden md:block">
        <TodayDate />
      </div>
    </div>
  );
};

export default SearchCard;
