import "./App.css";
import DataCards from "./components/DataCards";
import CountriesList from "./components/CountriesList";
import Chart from "./components/Chart";
import React from "react";
import * as api from "./api";

class App extends React.Component {
  state = {
    data: {}
  };

  componentDidMount() {
    api.fetchData().then((data) => {
      this.setState({ data });
    });
  }

  render() {
    const { data } = this.state;

    return (
      <div className='container'>
        <DataCards data={data} />
        <CountriesList />
        <Chart />
      </div>
    );
  }
}

export default App;
