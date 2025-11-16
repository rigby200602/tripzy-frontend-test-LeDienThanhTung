import Link from 'next/link';
import React from 'react'
import { MdEmergency } from "react-icons/md";

const Header = () => {
  return (
    <div className='flex text-[#19C0FF] text-[28px] font-bold mx-[12.5%] pt-4'>
      <MdEmergency className='mt-[0.5%]'/>
      <Link href={'/'}>Tripzy</Link>
    </div>
  )
}

export default Header