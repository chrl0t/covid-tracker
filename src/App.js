import "./App.css";
import Header from "./components/Header";
import CountriesList from "./components/CountriesList/CountriesList";
import Chart from "./components/Chart";
import Footer from "./components/Footer";
import React from "react";
import * as api from "./api";

class App extends React.Component {
  state = {
    data: {},
    country: ""
  };

  componentDidMount() {
    api.fetchData().then((data) => {
      this.setState({ data });
    });
  }

  handleCountryChange = async (country) => {
    const fetchedData = api.fetchData(country).then((data) => {
      console.log(data);
    });
  };

  render() {
    const { data } = this.state;

    return (
      <div className='container'>
        <Header />
        <CountriesList handleCountryChange={this.handleCountryChange} />
        <div className='chart'>
          <Chart />
        </div>
        <Footer data={data} />
      </div>
    );
  }
}

export default App;
