import React from "react";
import Header from "@/components/Header";

const Search = () => {
  return (
    <div className="w-full h-full">
      <Header />
      <div className="flex justify-center items-center mt-6 h-[75%]">
        <div className="container flex flex-col rounded-2xl bg-white w-[75%] shadow-lg h-full">
          <p className="px-16 mt-10 font-semibold text-2xl">From:</p>
          <p className="px-16 mt-10 font-semibold text-2xl">To:</p>
          <p className="px-16 mt-10 font-semibold text-2xl">Departure date:</p>
          <p className="px-16 mt-10 font-semibold text-2xl">Return date:</p>
          <p className="px-16 mt-10 font-semibold text-2xl">No. of passenger:</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
