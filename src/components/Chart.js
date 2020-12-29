import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../api";
import { Line, Bar } from "react-chartjs-2";

const Chart = ({ data: { confirmed, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
  }, []);

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

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Deaths"],
        datasets: [
          {
            label: "People",
            backgroundColor: ["#004d99", "red"],
            data: [confirmed.value, deaths.value]
          }
        ]
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` }
      }}
    />
  ) : null;

  return <div className='container'>{country ? barChart : lineChart}</div>;
};

export default Chart;
