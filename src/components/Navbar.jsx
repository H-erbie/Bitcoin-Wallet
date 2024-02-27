import React from "react";
import { PiWalletFill } from "react-icons/pi";
import { FaCompass } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { BsGearFill } from "react-icons/bs";
const Navbar = () => {
  const navbarItems = [
    <PiWalletFill />,
    <FaCompass />,
    <FaBell />,
    <BsGearFill />,
  ];
  return (
    <div className="navbar-container">
      {navbarItems.map((icon, index) => (
        <span className={index === 0 ? "navbar-item active-navbar-item" : "navbar-item"} key={index}>{icon}</span>
      ))}
    </div>
  );
};

export default Navbar;
