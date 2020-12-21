import "./App.css";
import DataCards from "./components/DataCards";
import CountriesList from "./components/CountriesList";
import Chart from "./components/Chart";
import React from "react";
import * as api from "./api";

class App extends React.Component {
  componentDidMount() {
    const data = api.fetchData();
    console.log(data);
  }

  render() {
    return (
      <div className='container'>
        <DataCards />
        <CountriesList />
        <Chart />
      </div>
    );
  }
}

export default App;
