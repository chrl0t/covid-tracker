import "./App.css";
import Header from "./components/Header";
import CountriesList from "./components/CountriesList";
import Chart from "./components/Chart";
import Footer from "./components/Footer";
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
        <Header />
        <CountriesList />
        <div className='chart'>
          <Chart />
        </div>
        <Footer data={data} />
      </div>
    );
  }
}

export default App;
