import classNames from "classnames/bind";
import styles from "./BoxBitcoinDominance.module.scss";
import TreeMapChart from "../../../../components/charts/TreeMapChart/TreeMapChart";
import TabButtons from "../../../../components/TabButtons/TabButtons";
import { useState } from "react";
import LineChartReChart from "../../../../components/charts/LineChartReChart/LineChartReChart";
import LineChartLightWeight from "../../../../components/charts/LineChartLightWeight/LineChartLightWeight";

// eslint-disable-next-line no-unused-vars
const cx = classNames.bind(styles);

const BoxBitcoinDominance = () => {
  const dataExample = [
    { time: "2024-03-01", value: 45000 },
    { time: "2024-03-02", value: 46000 },
    { time: "2024-03-03", value: 45500 },
    { time: "2024-03-04", value: 47000 },
    { time: "2024-03-05", value: 45000 },
    { time: "2024-03-06", value: 46000 },
    { time: "2024-03-07", value: 45500 },
    { time: "2024-03-08", value: 47000 },
    { time: "2024-03-09", value: 49000 },
    { time: "2024-03-10", value: 57000 },
    { time: "2024-03-11", value: 77000 },
    { time: "2024-03-12", value: 27000 },
    { time: "2024-03-13", value: 97000 },
    { time: "2024-03-14", value: 77000 },
    { time: "2024-03-15", value: 67000 },
    { time: "2024-03-16", value: 47000 },
  ];
  const [activeTabTime, setActiveTabTime] = useState("1h");

  const tabsTime = [
    { id: "1h", label: "1h" },
    { id: "3h", label: "3h" },
    { id: "1d", label: "1d" },
    { id: "1w", label: "1w" },
    { id: "1m", label: "1m" },
  ];

  return (
    <div className="w-full h-full">
      <div className="w-full h-full bg-white/70 shadow-md rounded-[32px] p-[24px] flex flex-col gap-y-[16px]">
        <h1 className="h-auto justify-start text-black text-2xl font-semibold font-['Inter']">
          Bitcoin Dominance
        </h1>
        <div className="w-full h-auto flex justify-between items-center">
          <div className="inline-flex justify-start items-center gap-3">
            <div className="px-6 py-3 bg-[#76e1db] rounded-[60px] flex justify-center items-center gap-2.5">
              <div className="justify-center text-[#0c2c40] text-[21px] font-semibold font-['Poppins']">
                54.86 %
              </div>
            </div>
            <div className="justify-center text-green-500  text-[21px] font-semibold font-['Poppins']">
              +0.76%
            </div>
          </div>

          <div className=" inline-flex justify-start items-start gap-2.5">
            <TabButtons
              tabs={tabsTime}
              activeTab={activeTabTime}
              onTabClick={setActiveTabTime}
              tabType="type2"
            />
          </div>
        </div>
        {/* box chart */}
        <div className="w-full h-full">
          <LineChartLightWeight data={dataExample} height={350} />
        </div>
      </div>
    </div>
  );
};

export default BoxBitcoinDominance;
