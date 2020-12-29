import React from "react";
import { format } from "date-fns";

function Footer({
  data: { confirmed, recovered, deaths, lastUpdate },
  country
}) {
  if (!confirmed) {
    return "Loading...";
  }
  return (
    <footer className='footer'>
      <h2 className='footer-text'>
        {country || "Globally"}: As of{" "}
        {format(new Date(lastUpdate), "HH:mm' on 'dd/MM/yyyy")}, there have been{" "}
        {confirmed.value.toLocaleString()} confirmed cases of COVID-19,
        including {deaths.value.toLocaleString()} deaths. So far there have been{" "}
        {recovered.value.toLocaleString()} recoveries
      </h2>
    </footer>
  );
}

export default Footer;
