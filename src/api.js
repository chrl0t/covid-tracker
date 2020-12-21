import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = () => {
  return axios.get(url).then(({ data }) => {
    return data;
  });
};
