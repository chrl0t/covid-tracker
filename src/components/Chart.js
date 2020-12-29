import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../api";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
  });

  const lineChart =
    dailyData.length !== 0 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: "#004d99",
              fill: true
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "red",
              backgroundColor: "red",
              fill: true
            }
          ]
        }}
        options={{ maintainAspectRatio: false }}
        width={450}
        height={450}
        responsive={true}
      />
    ) : null;

  return <div className='container'>{lineChart}</div>;
};

export default Chart;
