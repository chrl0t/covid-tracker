import React from "react";
import { format } from "date-fns";

function DataCards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <div className='data-cards-container'>
      <div className='data-card'>
        <header className='data-card-header'>Infected</header>
        <div className='data-card-data'>
          {" "}
          Total Infections: {confirmed.value}
          <footer className='data-card-footer'>
            {" "}
            Last Updated: {format(new Date(lastUpdate), "dd/MM/yyyy' - 'HH:mm")}
          </footer>
        </div>
      </div>
      <div className='data-card'>
        <header className='data-card-header'>Recovered</header>
        <div className='data-card-data'> {recovered.value}</div>
      </div>
      <div className='data-card'>
        <header className='data-card-header'>Deaths</header>
        <div className='data-card-data'> {deaths.value}</div>
      </div>
      {/* <div className='data-card'>
        <header className='data-card-header'>Last Updated </header>
        <div className='data-card-data'>
          {" "}
          {format(new Date(lastUpdate), "dd/MM/yyyy' - 'HH:mm")}
        </div>
      </div> */}
    </div>
  );
}

export default DataCards;
