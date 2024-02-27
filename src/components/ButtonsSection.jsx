import React from "react";
import SectionCards from "./SectionCards";
import { FaDollarSign } from "react-icons/fa6";

const ButtonsSection = () => {
  return <div className="section-btns-container">
<div className="buy">
<SectionCards sectionBase={<p>Buy BTC</p>} sectionTopLeft={<FaDollarSign/>} />

</div>
<div className="sell">
<SectionCards sectionBase={<p>Sell BTC</p>} sectionTopLeft={<FaDollarSign/>} />

</div>
  </div>;
};

export default ButtonsSection;
