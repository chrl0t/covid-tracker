import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./CountriesList.module.css";

function CountriesList() {
  return (
    <FormControl className={styles.FormControl}>
      <NativeSelect>
        <option value='global'>Global</option>
      </NativeSelect>
    </FormControl>
  );
}

export default CountriesList;
