import { useState } from "react";
import InFlowOutFlow from "../../../../components/charts/InFlowOutFlow/InFlowOutFlow";
import NetFlowChart from "../../../../components/charts/NetFlowChart/NetFlowChart";
import TabButtons from "../../../../components/TabButtons/TabButtons";
import ButtonCustom from "../../../../components/ButtonCustom/ButtonCustom";
import CandlestickVolume from "../../../../components/charts/CandlestickVolume/CandlestickVolume";
const BoxFOT = () => {
  const [activeTab, setActiveTab] = useState("flows");

  const btcData = [
    { name: "2024-01-01", inflow: 32000, outflow: 28000, price: 42000 },
    { name: "2024-02-01", inflow: 35000, outflow: 37000, price: 45000 },
    { name: "2024-03-01", inflow: 40000, outflow: 39000, price: 47000 },
    { name: "2024-04-01", inflow: 42000, outflow: 45000, price: 48000 },
    { name: "2024-05-01", inflow: 46000, outflow: 43000, price: 50000 },
    { name: "2024-06-01", inflow: 50000, outflow: 52000, price: 91000 },
    { name: "2024-07-01", inflow: 54000, outflow: 51000, price: 83000 },
    { name: "2024-08-01", inflow: 58000, outflow: 60000, price: 55000 },
    { name: "2024-09-01", inflow: 62000, outflow: 59000, price: 77000 },
    { name: "2024-10-01", inflow: 66000, outflow: 68000, price: 59000 },
    { name: "2024-11-01", inflow: 70000, outflow: 72000, price: 61000 },
    { name: "2024-12-01", inflow: 75000, outflow: 73000, price: 63000 },
    { name: "2025-01-01", inflow: 32000, outflow: 28000, price: 42000 },
    { name: "2025-02-01", inflow: 35000, outflow: 37000, price: 45000 },
    { name: "2025-03-01", inflow: 40000, outflow: 39000, price: 47000 },
    { name: "2025-04-01", inflow: 42000, outflow: 45000, price: 48000 },
    { name: "2025-05-01", inflow: 46000, outflow: 43000, price: 50000 },
    { name: "2025-06-01", inflow: 50000, outflow: 52000, price: 91000 },
    { name: "2025-07-01", inflow: 54000, outflow: 51000, price: 83000 },
    { name: "2025-08-01", inflow: 58000, outflow: 60000, price: 55000 },
    { name: "2025-09-01", inflow: 62000, outflow: 59000, price: 77000 },
    { name: "2025-10-01", inflow: 66000, outflow: 68000, price: 59000 },
    { name: "2025-11-01", inflow: 70000, outflow: 72000, price: 61000 },
    { name: "2025-12-01", inflow: 75000, outflow: 73000, price: 63000 },
  ];

  const tabsData = [
    { id: "flows", label: "Funding Rate" },
    { id: "aum", label: "Open Interest" },
    { id: "marketCap", label: "Trading view" },
  ];

  const dataPrice = [
    { time: "2018-10-19", open: 54.9, high: 55.5, low: 54.5, close: 54.9 },
    { time: "2018-10-22", open: 54.98, high: 55.2, low: 54.8, close: 54.98 },
    { time: "2018-10-23", open: 57.21, high: 57.5, low: 56.9, close: 57.21 },
    { time: "2018-10-24", open: 57.42, high: 57.8, low: 57.1, close: 53.42 },
    { time: "2018-10-25", open: 60.43, high: 80.8, low: 56.2, close: 70.43 },
    { time: "2018-10-26", open: 55.51, high: 56.0, low: 55.2, close: 55.51 },
    { time: "2018-10-29", open: 56.48, high: 57.0, low: 56.2, close: 56.48 },
    { time: "2018-10-30", open: 58.18, high: 58.5, low: 65.8, close: 58.18 },
    { time: "2018-10-31", open: 57.09, high: 57.5, low: 56.8, close: 57.09 },
    { time: "2018-11-01", open: 56.05, high: 56.5, low: 55.8, close: 56.05 },
    { time: "2018-11-02", open: 56.63, high: 57.0, low: 56.3, close: 56.63 },
    { time: "2018-11-05", open: 57.21, high: 57.5, low: 56.9, close: 57.21 },
    { time: "2018-11-06", open: 57.21, high: 57.5, low: 56.9, close: 57.21 },
    { time: "2018-11-07", open: 57.65, high: 58.0, low: 57.3, close: 57.65 },
    { time: "2018-11-08", open: 58.27, high: 58.5, low: 57.9, close: 58.27 },
    { time: "2018-11-09", open: 58.46, high: 58.8, low: 58.1, close: 58.46 },
    { time: "2018-11-12", open: 58.72, high: 59.0, low: 58.4, close: 58.72 },
    { time: "2018-11-13", open: 58.66, high: 59.0, low: 58.3, close: 58.66 },
    { time: "2018-11-14", open: 58.94, high: 59.3, low: 58.6, close: 58.94 },
    { time: "2018-11-15", open: 59.08, high: 59.4, low: 58.7, close: 59.08 },
    { time: "2018-11-16", open: 60.21, high: 60.5, low: 59.9, close: 60.21 },
    { time: "2018-11-19", open: 60.62, high: 61.0, low: 60.3, close: 60.62 },
    { time: "2018-11-20", open: 59.46, high: 59.8, low: 59.1, close: 59.46 },
    { time: "2018-11-21", open: 59.16, high: 59.5, low: 58.8, close: 59.16 },
    { time: "2018-11-23", open: 58.64, high: 59.0, low: 58.3, close: 58.64 },
    { time: "2018-11-26", open: 59.17, high: 59.5, low: 58.8, close: 59.17 },
    { time: "2018-11-27", open: 60.65, high: 61.0, low: 60.3, close: 60.65 },
    { time: "2018-11-28", open: 60.06, high: 60.5, low: 59.7, close: 60.06 },
    { time: "2018-11-29", open: 59.45, high: 59.8, low: 59.1, close: 59.45 },
    { time: "2018-11-30", open: 60.3, high: 60.7, low: 59.9, close: 60.3 },
    { time: "2018-12-03", open: 58.16, high: 58.5, low: 57.8, close: 58.16 },
    { time: "2018-12-04", open: 58.09, high: 58.5, low: 57.7, close: 58.09 },
    { time: "2018-12-06", open: 58.08, high: 58.5, low: 57.7, close: 58.08 },
    { time: "2018-12-07", open: 57.68, high: 58.1, low: 57.3, close: 57.68 },
    { time: "2018-12-10", open: 58.27, high: 58.7, low: 57.9, close: 58.27 },
    { time: "2018-12-11", open: 58.85, high: 59.2, low: 58.5, close: 58.85 },
    { time: "2018-12-12", open: 57.25, high: 57.7, low: 56.8, close: 57.25 },
    { time: "2018-12-13", open: 57.09, high: 57.5, low: 56.7, close: 57.09 },
    { time: "2018-12-14", open: 57.08, high: 57.5, low: 56.7, close: 57.08 },
    { time: "2018-12-17", open: 55.95, high: 56.4, low: 55.5, close: 55.95 },
    { time: "2018-12-18", open: 55.65, high: 56.1, low: 55.2, close: 55.65 },
    { time: "2018-12-19", open: 55.86, high: 56.3, low: 55.4, close: 55.86 },
    { time: "2018-12-20", open: 55.07, high: 55.5, low: 54.6, close: 55.07 },
    { time: "2018-12-21", open: 54.92, high: 55.3, low: 54.5, close: 54.92 },
    { time: "2018-12-24", open: 53.05, high: 53.5, low: 52.6, close: 53.05 },
    { time: "2018-12-26", open: 54.44, high: 54.9, low: 54.0, close: 54.44 },
    { time: "2018-12-27", open: 55.15, high: 55.6, low: 54.7, close: 55.15 },
    { time: "2018-12-28", open: 55.27, high: 55.7, low: 54.8, close: 55.27 },
    { time: "2018-12-31", open: 56.22, high: 56.7, low: 55.8, close: 56.22 },
    { time: "2019-01-02", open: 56.02, high: 56.5, low: 55.6, close: 56.02 },
    { time: "2019-01-03", open: 56.22, high: 56.7, low: 55.8, close: 56.22 },
    { time: "2019-01-04", open: 56.36, high: 56.8, low: 55.9, close: 56.36 },
    { time: "2019-01-07", open: 56.72, high: 57.2, low: 56.3, close: 56.72 },
    { time: "2019-01-08", open: 58.38, high: 58.8, low: 57.9, close: 58.38 },
    { time: "2019-01-09", open: 57.05, high: 57.5, low: 56.6, close: 57.05 },
    { time: "2019-01-10", open: 57.6, high: 58.0, low: 57.2, close: 57.6 },
    { time: "2019-01-11", open: 58.02, high: 58.5, low: 57.6, close: 58.02 },
    { time: "2019-01-14", open: 58.03, high: 58.5, low: 57.6, close: 58.03 },
    { time: "2019-01-15", open: 58.1, high: 58.5, low: 57.7, close: 58.1 },
    { time: "2019-01-16", open: 57.08, high: 57.5, low: 56.7, close: 57.08 },
    { time: "2019-01-17", open: 56.83, high: 57.3, low: 56.4, close: 56.83 },
    { time: "2019-01-18", open: 57.09, high: 57.5, low: 56.7, close: 57.09 },
    { time: "2019-01-22", open: 56.99, high: 57.4, low: 56.6, close: 56.99 },
    { time: "2019-01-23", open: 57.76, high: 58.2, low: 57.3, close: 57.76 },
    { time: "2019-01-24", open: 57.07, high: 57.5, low: 56.7, close: 57.07 },
    { time: "2019-01-25", open: 56.4, high: 56.8, low: 56.0, close: 56.4 },
    { time: "2019-01-28", open: 55.07, high: 55.5, low: 54.6, close: 55.07 },
    { time: "2019-01-29", open: 53.28, high: 53.7, low: 52.9, close: 53.28 },
    { time: "2019-01-30", open: 54.0, high: 54.5, low: 53.6, close: 54.0 },
    { time: "2019-01-31", open: 55.06, high: 55.5, low: 54.6, close: 55.06 },
    { time: "2019-02-01", open: 54.55, high: 55.0, low: 54.1, close: 54.55 },
    { time: "2019-02-04", open: 54.04, high: 54.5, low: 53.6, close: 54.04 },
    { time: "2019-02-05", open: 54.14, high: 54.6, low: 53.7, close: 54.14 },
    { time: "2019-02-06", open: 53.79, high: 54.2, low: 53.4, close: 53.79 },
    { time: "2019-02-07", open: 53.57, high: 54.0, low: 53.1, close: 53.57 },
    { time: "2019-02-08", open: 53.95, high: 54.4, low: 53.5, close: 53.95 },
    { time: "2019-02-11", open: 54.05, high: 54.5, low: 53.6, close: 54.05 },
    { time: "2019-02-12", open: 54.42, high: 54.9, low: 54.0, close: 54.42 },
    { time: "2019-02-13", open: 54.48, high: 54.9, low: 54.0, close: 54.48 },
    { time: "2019-02-14", open: 54.03, high: 54.5, low: 53.6, close: 54.03 },
    { time: "2019-02-15", open: 55.16, high: 55.6, low: 54.7, close: 55.16 },
    { time: "2019-02-19", open: 55.44, high: 55.9, low: 55.0, close: 55.44 },
    { time: "2019-02-20", open: 55.76, high: 56.2, low: 55.3, close: 55.76 },
    { time: "2019-02-21", open: 56.15, high: 56.6, low: 55.7, close: 56.15 },
    { time: "2019-02-22", open: 56.92, high: 57.4, low: 56.5, close: 56.92 },
    { time: "2019-02-25", open: 56.78, high: 57.2, low: 56.3, close: 56.78 },
    { time: "2019-02-26", open: 56.64, high: 57.1, low: 56.2, close: 56.64 },
    { time: "2019-02-27", open: 56.72, high: 57.2, low: 56.3, close: 56.72 },
    { time: "2019-02-28", open: 56.92, high: 57.4, low: 56.5, close: 56.92 },
    { time: "2019-03-01", open: 56.96, high: 57.4, low: 56.5, close: 56.96 },
    { time: "2019-03-04", open: 56.24, high: 56.7, low: 55.8, close: 56.24 },
    { time: "2019-03-05", open: 56.08, high: 56.5, low: 55.6, close: 56.08 },
    { time: "2019-03-06", open: 55.68, high: 56.1, low: 55.2, close: 55.68 },
    { time: "2019-03-07", open: 56.3, high: 56.7, low: 55.9, close: 56.3 },
    { time: "2019-03-08", open: 56.53, high: 57.0, low: 56.1, close: 56.53 },
    { time: "2019-03-11", open: 57.58, high: 58.0, low: 57.1, close: 57.58 },
    { time: "2019-03-12", open: 57.43, high: 57.9, low: 57.0, close: 57.43 },
    { time: "2019-03-13", open: 57.66, high: 58.1, low: 57.2, close: 57.66 },
    { time: "2019-03-14", open: 57.95, high: 58.4, low: 57.5, close: 57.95 },
    { time: "2019-03-15", open: 58.39, high: 58.8, low: 57.9, close: 58.39 },
    { time: "2019-03-18", open: 58.07, high: 58.5, low: 57.6, close: 58.07 },
    { time: "2019-03-19", open: 57.5, high: 57.9, low: 57.1, close: 57.5 },
    { time: "2019-03-20", open: 57.67, high: 58.1, low: 57.2, close: 57.67 },
    { time: "2019-03-21", open: 58.29, high: 58.7, low: 57.9, close: 58.29 },
    { time: "2019-03-22", open: 59.76, high: 60.2, low: 59.3, close: 59.76 },
    { time: "2019-03-25", open: 60.08, high: 60.5, low: 59.6, close: 60.08 },
    { time: "2019-03-26", open: 60.63, high: 61.0, low: 60.2, close: 60.63 },
    { time: "2019-03-27", open: 60.88, high: 61.3, low: 60.4, close: 60.88 },
    { time: "2019-03-28", open: 59.08, high: 59.5, low: 58.6, close: 59.08 },
    { time: "2019-03-29", open: 59.13, high: 59.5, low: 58.7, close: 59.13 },
    { time: "2019-04-01", open: 59.09, high: 59.5, low: 58.7, close: 59.09 },
    { time: "2019-04-02", open: 58.53, high: 59.0, low: 58.1, close: 58.53 },
    { time: "2019-04-03", open: 58.87, high: 59.3, low: 58.4, close: 58.87 },
    { time: "2019-04-04", open: 58.99, high: 59.4, low: 58.5, close: 58.99 },
    { time: "2019-04-05", open: 59.09, high: 59.5, low: 58.7, close: 59.09 },
    { time: "2019-04-08", open: 59.13, high: 59.5, low: 58.7, close: 59.13 },
    { time: "2019-04-09", open: 58.4, high: 58.8, low: 58.0, close: 58.4 },
    { time: "2019-04-10", open: 58.61, high: 59.0, low: 58.2, close: 58.61 },
    { time: "2019-04-11", open: 58.56, high: 59.0, low: 58.1, close: 58.56 },
    { time: "2019-04-12", open: 58.74, high: 59.2, low: 58.3, close: 58.74 },
    { time: "2019-04-15", open: 58.71, high: 59.1, low: 58.3, close: 58.71 },
    { time: "2019-04-16", open: 58.79, high: 59.2, low: 58.4, close: 58.79 },
    { time: "2019-04-17", open: 57.78, high: 58.2, low: 57.3, close: 57.78 },
    { time: "2019-04-18", open: 58.04, high: 58.5, low: 57.6, close: 58.04 },
    { time: "2019-04-22", open: 58.37, high: 58.8, low: 57.9, close: 58.37 },
    { time: "2019-04-23", open: 57.15, high: 57.6, low: 56.7, close: 57.15 },
    { time: "2019-04-24", open: 57.08, high: 57.5, low: 56.7, close: 57.08 },
    { time: "2019-04-25", open: 55.85, high: 56.3, low: 55.4, close: 55.85 },
    { time: "2019-04-26", open: 56.58, high: 57.0, low: 56.1, close: 56.58 },
    { time: "2019-04-29", open: 56.84, high: 57.3, low: 56.4, close: 56.84 },
    { time: "2019-04-30", open: 57.19, high: 57.6, low: 56.7, close: 57.19 },
    { time: "2019-05-01", open: 56.52, high: 57.0, low: 56.0, close: 56.52 },
    { time: "2019-05-02", open: 56.99, high: 57.5, low: 56.5, close: 56.99 },
    { time: "2019-05-03", open: 57.24, high: 57.7, low: 56.8, close: 57.24 },
    { time: "2019-05-06", open: 56.91, high: 57.4, low: 56.5, close: 56.91 },
    { time: "2019-05-07", open: 56.63, high: 57.1, low: 56.2, close: 56.63 },
    { time: "2019-05-08", open: 56.38, high: 56.8, low: 55.9, close: 56.38 },
    { time: "2019-05-09", open: 56.48, high: 56.9, low: 56.0, close: 56.48 },
    { time: "2019-05-10", open: 56.91, high: 57.4, low: 56.5, close: 56.91 },
    { time: "2019-05-13", open: 56.75, high: 57.2, low: 56.3, close: 56.75 },
    { time: "2019-05-14", open: 56.55, high: 57.0, low: 56.1, close: 56.55 },
    { time: "2019-05-15", open: 56.81, high: 57.3, low: 56.4, close: 56.81 },
    { time: "2019-05-16", open: 57.38, high: 57.8, low: 56.9, close: 57.38 },
    { time: "2019-05-17", open: 58.09, high: 58.5, low: 57.6, close: 58.09 },
    { time: "2019-05-20", open: 59.01, high: 59.5, low: 58.5, close: 59.01 },
    { time: "2019-05-21", open: 59.5, high: 60.0, low: 59.0, close: 59.5 },
    { time: "2019-05-22", open: 59.25, high: 59.7, low: 58.8, close: 59.25 },
    { time: "2019-05-23", open: 58.87, high: 59.3, low: 58.4, close: 58.87 },
    { time: "2019-05-24", open: 59.32, high: 59.8, low: 58.9, close: 59.32 },
    { time: "2019-05-28", open: 59.57, high: 60.0, low: 59.1, close: 59.57 },
  ];

  const dataVolume = [
    { time: "2018-10-19", value: 19103293.0, color: "#26a69a" },
    { time: "2018-10-22", value: 21737523.0, color: "#26a69a" },
    { time: "2018-10-23", value: 29328713.0, color: "#26a69a" },
    { time: "2018-10-24", value: 37435638.0, color: "#26a69a" },
    { time: "2018-10-25", value: 25269995.0, color: "#ef5350" },
    { time: "2018-10-26", value: 24973311.0, color: "#ef5350" },
    { time: "2018-10-29", value: 22103692.0, color: "#26a69a" },
    { time: "2018-10-30", value: 25231199.0, color: "#26a69a" },
    { time: "2018-10-31", value: 24214427.0, color: "#ef5350" },
    { time: "2018-11-01", value: 22533201.0, color: "#ef5350" },
    { time: "2018-11-02", value: 14734412.0, color: "#26a69a" },
    { time: "2018-11-05", value: 12733842.0, color: "#26a69a" },
    { time: "2018-11-06", value: 12371207.0, color: "#26a69a" },
    { time: "2018-11-07", value: 14891287.0, color: "#26a69a" },
    { time: "2018-11-08", value: 12482392.0, color: "#26a69a" },
    { time: "2018-11-09", value: 17365762.0, color: "#26a69a" },
    { time: "2018-11-12", value: 13236769.0, color: "#26a69a" },
    { time: "2018-11-13", value: 13047907.0, color: "#ef5350" },
    { time: "2018-11-14", value: 18288710.0, color: "#26a69a" },
    { time: "2018-11-15", value: 17147123.0, color: "#26a69a" },
    { time: "2018-11-16", value: 19470986.0, color: "#26a69a" },
    { time: "2018-11-19", value: 18405731.0, color: "#26a69a" },
    { time: "2018-11-20", value: 22028957.0, color: "#ef5350" },
    { time: "2018-11-21", value: 18482233.0, color: "#ef5350" },
    { time: "2018-11-23", value: 7009050.0, color: "#ef5350" },
    { time: "2018-11-26", value: 12308876.0, color: "#26a69a" },
    { time: "2018-11-27", value: 14118867.0, color: "#26a69a" },
    { time: "2018-11-28", value: 18662989.0, color: "#ef5350" },
    { time: "2018-11-29", value: 14763658.0, color: "#ef5350" },
    { time: "2018-11-30", value: 31142818.0, color: "#26a69a" },
    { time: "2018-12-03", value: 27795428.0, color: "#ef5350" },
    { time: "2018-12-04", value: 21727411.0, color: "#ef5350" },
    { time: "2018-12-06", value: 26880429.0, color: "#ef5350" },
    { time: "2018-12-07", value: 16948126.0, color: "#ef5350" },
    { time: "2018-12-10", value: 16603356.0, color: "#26a69a" },
    { time: "2018-12-11", value: 14991438.0, color: "#26a69a" },
    { time: "2018-12-12", value: 18892182.0, color: "#ef5350" },
    { time: "2018-12-13", value: 15454706.0, color: "#ef5350" },
    { time: "2018-12-14", value: 13960870.0, color: "#ef5350" },
    { time: "2018-12-17", value: 18902523.0, color: "#ef5350" },
    { time: "2018-12-18", value: 18895777.0, color: "#ef5350" },
    { time: "2018-12-19", value: 20968473.0, color: "#26a69a" },
    { time: "2018-12-20", value: 26897008.0, color: "#ef5350" },
    { time: "2018-12-21", value: 55413082.0, color: "#ef5350" },
    { time: "2018-12-24", value: 15077207.0, color: "#ef5350" },
    { time: "2018-12-26", value: 17970539.0, color: "#26a69a" },
    { time: "2018-12-27", value: 17530977.0, color: "#26a69a" },
    { time: "2018-12-28", value: 14771641.0, color: "#26a69a" },
    { time: "2018-12-31", value: 15331758.0, color: "#26a69a" },
    { time: "2019-01-02", value: 13969691.0, color: "#ef5350" },
    { time: "2019-01-03", value: 19245411.0, color: "#26a69a" },
    { time: "2019-01-04", value: 17035848.0, color: "#26a69a" },
    { time: "2019-01-07", value: 16348982.0, color: "#26a69a" },
    { time: "2019-01-08", value: 21425008.0, color: "#26a69a" },
    { time: "2019-01-09", value: 18136000.0, color: "#ef5350" },
    { time: "2019-01-10", value: 14259910.0, color: "#26a69a" },
    { time: "2019-01-11", value: 15801548.0, color: "#26a69a" },
    { time: "2019-01-14", value: 11342293.0, color: "#26a69a" },
    { time: "2019-01-15", value: 10074386.0, color: "#26a69a" },
    { time: "2019-01-16", value: 13411691.0, color: "#ef5350" },
    { time: "2019-01-17", value: 15223854.0, color: "#ef5350" },
    { time: "2019-01-18", value: 16802516.0, color: "#26a69a" },
    { time: "2019-01-22", value: 18284771.0, color: "#ef5350" },
    { time: "2019-01-23", value: 15109007.0, color: "#26a69a" },
    { time: "2019-01-24", value: 12494109.0, color: "#ef5350" },
    { time: "2019-01-25", value: 17806822.0, color: "#ef5350" },
    { time: "2019-01-28", value: 25955718.0, color: "#ef5350" },
    { time: "2019-01-29", value: 33789235.0, color: "#ef5350" },
    { time: "2019-01-30", value: 27260036.0, color: "#26a69a" },
    { time: "2019-01-31", value: 28585447.0, color: "#26a69a" },
    { time: "2019-02-01", value: 13778392.0, color: "#ef5350" },
    { time: "2019-02-04", value: 15818901.0, color: "#ef5350" },
    { time: "2019-02-05", value: 14124794.0, color: "#26a69a" },
    { time: "2019-02-06", value: 11391442.0, color: "#ef5350" },
    { time: "2019-02-07", value: 12436168.0, color: "#ef5350" },
    { time: "2019-02-08", value: 12011657.0, color: "#26a69a" },
    { time: "2019-02-11", value: 9802798.0, color: "#26a69a" },
    { time: "2019-02-12", value: 11227550.0, color: "#26a69a" },
    { time: "2019-02-13", value: 11884803.0, color: "#26a69a" },
    { time: "2019-02-14", value: 11190094.0, color: "#ef5350" },
    { time: "2019-02-15", value: 15719416.0, color: "#26a69a" },
    { time: "2019-02-19", value: 12272877.0, color: "#26a69a" },
    { time: "2019-02-20", value: 11379006.0, color: "#26a69a" },
    { time: "2019-02-21", value: 14680547.0, color: "#26a69a" },
    { time: "2019-02-22", value: 12534431.0, color: "#26a69a" },
    { time: "2019-02-25", value: 15051182.0, color: "#ef5350" },
    { time: "2019-02-26", value: 12005571.0, color: "#ef5350" },
    { time: "2019-02-27", value: 8962776.0, color: "#26a69a" },
    { time: "2019-02-28", value: 15742971.0, color: "#26a69a" },
    { time: "2019-03-01", value: 10942737.0, color: "#26a69a" },
    { time: "2019-03-04", value: 13674737.0, color: "#ef5350" },
    { time: "2019-03-05", value: 15749545.0, color: "#ef5350" },
    { time: "2019-03-06", value: 13935530.0, color: "#ef5350" },
    { time: "2019-03-07", value: 12644171.0, color: "#26a69a" },
    { time: "2019-03-08", value: 10646710.0, color: "#26a69a" },
    { time: "2019-03-11", value: 13627431.0, color: "#26a69a" },
    { time: "2019-03-12", value: 12812980.0, color: "#ef5350" },
    { time: "2019-03-13", value: 14168350.0, color: "#26a69a" },
    { time: "2019-03-14", value: 12148349.0, color: "#26a69a" },
    { time: "2019-03-15", value: 23715337.0, color: "#26a69a" },
    { time: "2019-03-18", value: 12168133.0, color: "#ef5350" },
    { time: "2019-03-19", value: 13462686.0, color: "#ef5350" },
    { time: "2019-03-20", value: 11903104.0, color: "#26a69a" },
    { time: "2019-03-21", value: 10920129.0, color: "#26a69a" },
    { time: "2019-03-22", value: 25125385.0, color: "#26a69a" },
    { time: "2019-03-25", value: 15463411.0, color: "#26a69a" },
    { time: "2019-03-26", value: 12316901.0, color: "#26a69a" },
    { time: "2019-03-27", value: 13290298.0, color: "#26a69a" },
    { time: "2019-03-28", value: 20547060.0, color: "#ef5350" },
    { time: "2019-03-29", value: 17283871.0, color: "#26a69a" },
    { time: "2019-04-01", value: 16331140.0, color: "#ef5350" },
    { time: "2019-04-02", value: 11408146.0, color: "#ef5350" },
    { time: "2019-04-03", value: 15491724.0, color: "#26a69a" },
    { time: "2019-04-04", value: 8776028.0, color: "#26a69a" },
    { time: "2019-04-05", value: 11497780.0, color: "#26a69a" },
    { time: "2019-04-08", value: 11680538.0, color: "#26a69a" },
    { time: "2019-04-09", value: 10414416.0, color: "#ef5350" },
    { time: "2019-04-10", value: 8782061.0, color: "#26a69a" },
    { time: "2019-04-11", value: 9219930.0, color: "#ef5350" },
    { time: "2019-04-12", value: 10847504.0, color: "#26a69a" },
    { time: "2019-04-15", value: 7741472.0, color: "#ef5350" },
    { time: "2019-04-16", value: 10239261.0, color: "#26a69a" },
    { time: "2019-04-17", value: 15498037.0, color: "#ef5350" },
    { time: "2019-04-18", value: 13189013.0, color: "#26a69a" },
    { time: "2019-04-22", value: 11950365.0, color: "#26a69a" },
    { time: "2019-04-23", value: 23488682.0, color: "#ef5350" },
    { time: "2019-04-24", value: 13227084.0, color: "#ef5350" },
    { time: "2019-04-25", value: 17425466.0, color: "#ef5350" },
    { time: "2019-04-26", value: 16329727.0, color: "#26a69a" },
    { time: "2019-04-29", value: 13984965.0, color: "#26a69a" },
    { time: "2019-04-30", value: 15469002.0, color: "#26a69a" },
    { time: "2019-05-01", value: 11627436.0, color: "#ef5350" },
    { time: "2019-05-02", value: 14435436.0, color: "#26a69a" },
    { time: "2019-05-03", value: 9388228.0, color: "#26a69a" },
    { time: "2019-05-06", value: 10066145.0, color: "#ef5350" },
    { time: "2019-05-07", value: 12963827.0, color: "#ef5350" },
    { time: "2019-05-08", value: 12086743.0, color: "#ef5350" },
    { time: "2019-05-09", value: 14835326.0, color: "#26a69a" },
    { time: "2019-05-10", value: 10707335.0, color: "#26a69a" },
    { time: "2019-05-13", value: 13759350.0, color: "#ef5350" },
    { time: "2019-05-14", value: 12776175.0, color: "#ef5350" },
    { time: "2019-05-15", value: 10806379.0, color: "#26a69a" },
    { time: "2019-05-16", value: 11695064.0, color: "#26a69a" },
    { time: "2019-05-17", value: 14436662.0, color: "#26a69a" },
    { time: "2019-05-20", value: 20910590.0, color: "#26a69a" },
    { time: "2019-05-21", value: 14016315.0, color: "#26a69a" },
    { time: "2019-05-22", value: 11487448.0, color: "#ef5350" },
    { time: "2019-05-23", value: 11707083.0, color: "#ef5350" },
    { time: "2019-05-24", value: 8755506.0, color: "#26a69a" },
    { time: "2019-05-28", value: 3097125.0, color: "#26a69a" },
  ];

  const tradePoints = [
    { time: "2018-10-25", price: 60, type: "buy" },
    { time: "2018-10-26", price: 55, type: "sell" },
  ];

  return (
    <div className="w-full h-full  rounded-[32px] p-[24px] bg-white">
      <div className="mt-4 ">
        <TabButtons
          tabs={tabsData}
          activeTab={activeTab}
          onTabClick={setActiveTab}
          tabType="type4"
        />
      </div>

      <div className="mt-[27px]">
        {activeTab === "flows" && <NetFlowChart data={btcData} />}
        {activeTab === "aum" && <div>Nội dung của AUM</div>}
        {activeTab === "marketCap" && (
          <CandlestickVolume
            dataPrice={dataPrice}
            dataVolume={dataVolume}
            tradePoints={tradePoints}
          />
        )}
      </div>
    </div>
  );
};

export default BoxFOT;
