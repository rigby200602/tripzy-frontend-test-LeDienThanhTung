import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";

const SubmitButton = () => {
  return (
    <Link href={'/search'}
    className="flex justify-center items-center 
    bg-[#19C0FF] rounded-4xl h-12 w-60 cursor-pointer">
      <span>
        <CiSearch className="mx-1 text-white" size={24}/>
      </span>
      <p className=" text-white font-bold cursor-pointer">Search</p>
    </Link>
  );
};

export default SubmitButton;
