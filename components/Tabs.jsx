import path from 'path'
import React from 'react'

const tabs = [
    { 
        title: "Bus & Shuttle",
        component: "FaBusAlt",
        path: "react-icons/fa"
    },
    {
        title: "Hotel & Accommodation",
        component: "FaHotel",
        path: "react-icons/fa"
    },
    {
        title: "Flight",
        component: "MdFlightTakeoff",
        path: "react-icons/md"
    }
]


const Tabs = () => {
  return (
    <div>Tabs</div>
  )
}

export default Tabs