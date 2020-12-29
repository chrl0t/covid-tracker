import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = (country) => {
  let amendableUrl = url;

  if (country) {
    amendableUrl = `${url}/countries/${country}`;
  }
  return axios.get(amendableUrl).then(({ data }) => {
    const amendedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate
    };
    return amendedData;
  });
};

export const fetchDailyData = () => {
  return axios.get(`${url}/daily`).then(({ data }) => {
    const amendedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate
    }));
    return amendedData;
  });
};

export const fetchCountries = () => {
  return axios.get(`${url}/countries`).then(({ data }) => {
    let allCountries = data.countries;
    const amendedData = allCountries.map((countries) => countries.name);
    return amendedData;
  });
};
