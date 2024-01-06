import React from "react";
// import "./Result.css";
import "./Resultstyle.scss";

const Result = (props) => {
  const { date, city, sunrise, sunset, temp, feels_like, pressure, wind, err } =
    props.weather;
  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    content = (
      <div>
        <div>
          <h1>Pogoda {city}</h1>
          <div className="timeBox">
            Wschód słonca {sunriseTime} zachod {sunsetTime}
            <h4>
              <span>teraz</span> : {date}
            </h4>
          </div>
          <div>
            <div className="dataWeather">
              <div>
                <h4>ikona pogody</h4>
                <span id="temp">{temp}&#186;</span>
                <h5>Odczuwalna:</h5>
                {feels_like}&#186;C
              </div>
              <div>
                <h5>Wiatr</h5>
                <span>Predkość: {wind} m/s</span>
              </div>
              <div>
                <h5>Ciśnienie atmosferyczne</h5>
                <span>{pressure} hPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="result">{err ? `Nie mamy w bazie ${city}` : content}</div>
    </React.Fragment>
  );
};

export default Result;
