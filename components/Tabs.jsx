import React from "react";
import { FaBusAlt, FaHotel } from "react-icons/fa";
import { MdFlightTakeoff } from "react-icons/md";

const tabs = [
  {
    title: "Bus & Shuttle",
    component: "FaBusAlt",
    backgroundColor: "bg-[#D3F3FF]",
    textColor: "text-[#19C0FF] ",
    hoverBg: "hover:bg-[#EBF9FF]"
  },
  {
    title: "Hotel & Accommodation",
    component: "FaHotel",
    backgroundColor: "bg-[#E8FBCC]",
    textColor: "text-[#447A11] ",
    hoverBg: "hover:bg-[#F4FFEB]"
  },
  {
    title: "Flight",
    component: "MdFlightTakeoff",
    backgroundColor: "bg-[#E1EDFE]",
    textColor: "text-[#5664E1] ",
    hoverBg: "hover:bg-[#EBF4FF]"
  },
];

const Tabs = () => {
  return (
    <div className="flex w-full cursor-pointer">
      {tabs.map((tab, index) => {
        const Component = tab.component === "FaBusAlt" ? FaBusAlt : 
        tab.component === "FaHotel" ? FaHotel : MdFlightTakeoff;
        return (
          <div key={index} className={`w-full flex m-2 rounded-xl ${tab.hoverBg}`}>
            <div className={`rounded-full h-12 w-12 m-1 p-3 ${tab.backgroundColor}`}>
              <Component className={`text-2xl ${tab.textColor}`} />
            </div>
            <p className="font-medium my-auto text-center">{tab.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tabs;
