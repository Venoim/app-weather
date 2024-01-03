import React from "react";
import "./Result.css";

const Result = (props) => {
  const { date, city, sunrise, sunset, temp, pressure, wind, err } =
    props.weather;
  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <>
        <h3>Wyszukiwanie dla miasta {city}</h3>
        <h4>Data i godzina {date}</h4>
        <h4>Temperatura {temp} &#176;C</h4>
        <h4>Wschod słonca {sunriseTime}</h4>
        <h4>Zachod {sunsetTime}</h4>
        <h4>Predkosc wiatru {wind} m/s</h4>
        <h4>Cisnienie {pressure} hPa</h4>
      </>
    );
  }

  return (
    <React.Fragment>
      <div className="result">{err ? `Nie mamy w bazie ${city}` : content}</div>
    </React.Fragment>
  );
};

export default Result;
