import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountriesList.module.css";
import { fetchCountries } from "../../api";

function CountriesList() {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  console.log(fetchedCountries);

  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect>
        <option value='global'>Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
}

export default CountriesList;
