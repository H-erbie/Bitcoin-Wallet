import React, { useState } from "react";
import Tabs from "./Tabs";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import SectionCards from "./SectionCards";
import ColoredDots from "./ColoredDots";

const Stats = () => {
  const [activeTab, setActiveTab] = useState("day");

  const tabs = ["day", "week", "month", "year"];
  const tabData = {
    day: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
    ],
    week: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
    ],
    month: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
    ],
    year: [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ],
  };

  return (
    <div className="stat-container">
      <div className="tabs-container">
        {tabs.map((tab, index) => (
          <Tabs
            key={index}
            tabText={tab}
            btnClass={
              activeTab === tab ? "tab-btn btn active-tab-btn" : "tab-btn btn"
            }
            setActive={setActiveTab}
          />
        ))}
      </div>

      <SectionCards
        sectionTopLeft={
          <>
            <ColoredDots dotClass={"lower-dot"} /> <span>Lower: $4.895</span>
          </>
        }
        sectionTopRight={
          <>
            <ColoredDots dotClass={"higher-dot"} /> <span>Higher: $6.857</span>
          </>
        }
        sectionMidTop={
          <>
            <div className="legend-container">
              <ColoredDots dotClass={"legend-dot"} />
            </div>{" "}
            <span>1BTC = 5.483</span>
          </>
        }
        sectionBase={
          <div className="chart-container">
            <ResponsiveContainer width="100%" heig ht="100%">
              <AreaChart
                width={500}
                height={400}
                data={tabData[activeTab]}
                className="no-scroll"
              >
                <Area
                  type="basis"
                  dataKey="uv"
                  stroke="#ff991a"
                  fill="#fff7ef"
                />
                <Tooltip />
                {/* <Legend/> */}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        }
      />
    </div>
  );
};

export default Stats;
