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
      <div className="contentbox">
        <div>
          <h2>Pogoda {city}</h2>
        </div>
        <div>
          <span>
            Wschód słonca {sunriseTime} zachod {sunsetTime}
          </span>
          <h4>
            <span>teraz</span> : {date}
          </h4>
          <p>
            Wschód słonca {sunriseTime} zachod {sunsetTime}
          </p>
          <div>
            <div>
              <div>
                <h4>Temperatura</h4>
                <span>{temp}&#186;C</span>
              </div>
              <div>
                <div>
                  <div>
                    <h5>Odczuwalna:</h5>
                    <span>{feels_like}&#186;C</span>
                  </div>
                  <div>
                    <h5>Ciśnienie atmosferyczne</h5>
                    <span>{pressure} hPA</span>
                  </div>
                  <div>
                    <h5>Wiatr</h5>
                    <span>Predkość: {wind} m/s</span>
                  </div>
                </div>
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
