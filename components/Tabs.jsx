"use client";

import React, { useEffect, useRef, useState } from "react";
import { FaBusAlt, FaHotel } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";
import SearchBar from "@/components/SearchBar";
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

const tabs = [
  {
    id: 1,
    title: "Bus & Shuttle",
    component: "FaBusAlt",
    backgroundColor: "bg-[#D3F3FF]",
    textColor: "text-[#19C0FF] ",
    activeBg: "focus:bg-[#EBF9FF]",
  },
  {
    id: 2,
    title: "Hotel & Accommodation",
    component: "FaHotel",
    backgroundColor: "bg-[#E8FBCC]",
    textColor: "text-[#447A11] ",
    activeBg: "focus:bg-[#F4FFEB]",
  },
  {
    id: 3,
    title: "Flight",
    component: "MdFlightTakeoff",
    backgroundColor: "bg-[#E1EDFE]",
    textColor: "text-[#5664E1] ",
    activeBg: "focus:bg-[#EBF4FF]",
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);
  const handleClick = (id) => {
    setActiveTab(id);
  };
  // Set default active tab
  const defaultTab = useRef();
  useEffect(() => {
    defaultTab.current.focus();
  }, []);
  return (
    <div className="flex flex-col bg-white rounded-2xl h-60 w-[75%] shadow-lg">
      <div className="flex rounded-2xl shadow-md h-[30%]">
        <div className="flex w-full">
          {tabs.map((tab, index) => {
            // Check which icon to use
            const Component =
              tab.component === "FaBusAlt"
                ? FaBusAlt
                : tab.component === "FaHotel"
                ? FaHotel
                : MdFlightTakeoff;
            return (
              <button
                ref={index === 0 ? defaultTab : null}
                onClick={() => handleClick(tab.id)}
                key={index}
                className={`w-full flex m-2 rounded-xl cursor-pointer outline-none ${tab.activeBg}`}
              >
                <div
                  className={`rounded-full h-12 w-12 m-1 p-3 ${tab.backgroundColor}`}
                >
                  <Component className={`text-2xl ${tab.textColor}`} />
                </div>
                <p className="font-medium my-auto text-center">{tab.title}</p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center h-full">
        {/* Content for the selected tab can go here */}
        {activeTab === 1 ? (
          <div className="grid grid-cols-3">
            <div className="flex h-full w-full gap-2 mx-2">
              <div className="flex-col">
                <p className="font-medium text-[#65686F]">From</p>
                <SearchBar />
              </div>
              <div className="my-7">
                <button className="border border-gray-500 rounded-full h-10 w-10 cursor-pointer">
                  <HiOutlineSwitchHorizontal color="blue" size={20} className="mx-2"/>
                </button>
              </div>
              <div className="flex-col">
                <p className="font-medium text-[#65686F]">To</p>
                <SearchBar />
              </div>
            </div>
          </div>
        ) : (
          <p className="text-[#767689] font-normal">No Data</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
