import LineChartLightWeight from "../../components/charts/LineChartLightWeight/LineChartLightWeight";
import LineChartReChart from "../../components/charts/LineChartReChart/LineChartReChart";
import LineChartReChart2 from "../../components/charts/LineChartReChart2/LineChartReChart2";

const LineChartReChartPage = () => {
  const data = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
    { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <div className={"w-full h-full "}>
      <LineChartReChart 
        data={data}
        dataKeyX={"name"}
        dataKeyY={"pv"}
      />
      <LineChartReChart2 
        data={data}
        dataKey={"pv"}
      />
    </div>
  );
};

export default LineChartReChartPage;
