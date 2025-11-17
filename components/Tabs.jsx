'use client'

import React, { useState } from "react";
import { FaBusAlt, FaHotel } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";

const tabs = [
  {
    id: 1,
    title: "Bus & Shuttle",
    component: "FaBusAlt",
    backgroundColor: "bg-[#D3F3FF]",
    textColor: "text-[#19C0FF] ",
    hoverBg: "hover:bg-[#EBF9FF]",
  },
  {
    id: 2,
    title: "Hotel & Accommodation",
    component: "FaHotel",
    backgroundColor: "bg-[#E8FBCC]",
    textColor: "text-[#447A11] ",
    hoverBg: "hover:bg-[#F4FFEB]",
  },
  {
    id: 3,
    title: "Flight",
    component: "MdFlightTakeoff",
    backgroundColor: "bg-[#E1EDFE]",
    textColor: "text-[#5664E1] ",
    hoverBg: "hover:bg-[#EBF4FF]",
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1)
  const handleClick = (id) => {
    setActiveTab(id)
    console.log("Active Tab ID:", id)
  }
  return (
    <div className="flex flex-col bg-white rounded-2xl h-60 w-[75%] shadow-lg">
      <div className="flex rounded-2xl shadow-md h-[30%]">
        <div className="flex w-full cursor-pointer">
          {tabs.map((tab, index) => {
            // Check which icon to use 
            const Component =
              tab.component === "FaBusAlt"
                ? FaBusAlt
                : tab.component === "FaHotel"
                ? FaHotel
                : MdFlightTakeoff;
            return (
              <div
                onClick={() => handleClick(tab.id)}
                key={index}
                className={`w-full flex m-2 rounded-xl ${tab.hoverBg}`}
              >
                <div
                  className={`rounded-full h-12 w-12 m-1 p-3 ${tab.backgroundColor}`}
                >
                  <Component className={`text-2xl ${tab.textColor}`} />
                </div>
                <p className="font-medium my-auto text-center">{tab.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        {/* Content for the selected tab can go here */}
      </div>
    </div>
  );
};

export default Tabs;
