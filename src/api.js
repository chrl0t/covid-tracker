import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = () => {
  return axios.get(url).then(({ data }) => {
    const amendedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate
    };
    return amendedData;
  });
};
