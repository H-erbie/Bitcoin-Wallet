import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { GoKebabHorizontal } from "react-icons/go";
import { FiCreditCard } from "react-icons/fi";
import { GrSubtractCircle } from "react-icons/gr";
import { TfiUpload } from "react-icons/tfi";
import { RiCheckboxIndeterminateLine } from "react-icons/ri";
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  return (
    <nav className='header-container'>
        <button className='previous-page-btn btn'>
            <FaChevronLeft className='previous-page-icon '/>
        </button>
        <a href="/" className='app-name'>Bitcoin Wallet</a>
        <div onClick={()=> setShowDropdown(false)} className={showDropdown ? "menu-overlay show-overlay" : "menu-overlay"}></div>
        <div className={showDropdown ? "menu-items show-menu-items" : "menu-items"}>
            <button className='menu-item first-child btn'>edit<FiCreditCard className='rotate-icon'/></button>
            <button className='menu-item btn'>courier info <RiCheckboxIndeterminateLine/></button>
            <button className='menu-item btn'>share <TfiUpload/></button>
            <button className='menu-item remove btn'>remove<GrSubtractCircle/></button>
        </div>
        <button className='kebab-menu-btn btn' onClick={()=> setShowDropdown(!showDropdown)}>
            <GoKebabHorizontal className={showDropdown ? "kebab-icon btn rotate-kebab" : 'kebab-icon btn'}/>
        </button>
    </nav>
  )
}


export default Header