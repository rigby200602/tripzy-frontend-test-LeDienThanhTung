import React from "react";
import { FaBusAlt } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div
      className="flex justify-between items-center 
    rounded-xl border border-gray-400 px-4 h-12 w-52"
    >
      <span>
        <FaBusAlt className="text-black outline-none" size={16} />
      </span>
      <input
        name="Search"
        type="text"
        placeholder="Enter city, terminal,..."
        className="outline-none mx-2 text-[#65686F] text-md font-medium"
      />
    </div>
  );
};

export default SearchBar;
