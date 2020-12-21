import React from "react";

function DataCards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div>
      <h1>Confirmed Cases: {confirmed.value}</h1>
      <h1>Recovered: {recovered.value}</h1>
      <h1>Deaths: {deaths.value}</h1>
      <h1>Last Updated: {lastUpdate}</h1>
    </div>
  );
}

export default DataCards;
