import React from "react";
// import "./Result.css";
import "./Resultstyle.scss";

const Result = (props) => {
  const {
    date,
    city,
    // weather,
    sunrise,
    sunset,
    temp,
    feels_like,
    pressure,
    wind,
    err,
  } = props.weather;
  const icon = props.iconWeather;
  let content = null;
  console.log({ icon });

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
                <h3>Polaczenie {icon} </h3>
                <span id="temp">{temp}&#186;</span>
                <h5>Odczuwalna:</h5>
                {feels_like}&#186;C
              </div>
              <div>
                <h5>Wiatr</h5>
                <p>Kierunek: {wind} m/s</p>
                <p>Predkość: {wind} m/s</p>
                <p>w porywach: {wind} m/s</p>
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
