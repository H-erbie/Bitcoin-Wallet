import React from "react";
import bitcoinLogo from "../assets/Bitcoin.svg.png";
import SectionCards from "./SectionCards";
import { FaChevronDown, FaChevronUp, FaDollarSign } from "react-icons/fa6";
const Overview = () => {
  return (
    <div className="overview-container ">
      <SectionCards
        sectionTopLeft={
          <>
            {" "}
            <img src={bitcoinLogo} /> <span>Bitcoin</span>
          </>
        }
        sectionTopRight={<p>BTC</p>}
        sectionMidTop={<p>3.529020 BTC</p>}
        sectionMidBottomLeft={<p>$19.153 USD</p>}
        sectionMidBottomRight={<p>-2.32%</p>}
        sectionBottomShow={<FaChevronDown />}
        sectionBottomHide={<FaChevronUp />}
        sectionBase={
          <>
            <button className="section-base-buy-btn btn"><FaDollarSign/>Buy</button>{" "}
            <button className="section-base-sell-btn btn"><FaDollarSign/>Sell</button>
          </>
        }
      />
    </div>
  );
};

export default Overview;
