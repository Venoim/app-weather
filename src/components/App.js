import Heading from "./Heading";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";
import "./App.css";
import { useEffect, useState } from "react";

// //klucz do API
const APIKey = "8111c344d5b4e675f9b32e6c7c37beee";
let icon = "";

const App = () => {
  let [inputValue, setInputValue] = useState({
    value: "",
    date: "",
    city: "",
    weather: "",
    sunrise: "",
    sunset: "",
    temp: "",
    feels_like: "",
    pressure: "",
    wind: "",
    err: false,
  });




  const onInputChange = (e) => {
    //metoda wartosc i ustawia w value
    setInputValue({ value: e.target.value });
  };

  const onCitySubmit = async (e) => {
    //Obsługa przycisku
    e.preventDefault();
    // console.log("potwierdzony formularz");
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue.value}&appid=${APIKey}&units=metric`;

    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw Error("oj nie działa");
      }
      const data = await response.json();

      const time = new Date().toLocaleString();
      setInputValue({
        err: false,
        date: time,
        weather: data.weather[0].icon,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        city: inputValue.value,
      });
    } catch (error) {
      setInputValue({
        err: true,
        city: inputValue.value,
      });
    }
  };

  const onWeatherIcon = (e) => {
    const iconCode = inputValue.weather; // Załóżmy, że e.state.weather to tablica z jednym obiektem pogodowym
    console.log("Ikona: " + iconCode);

    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png?appid=${APIKey}`;
    return (
      <div>
        <img src={iconUrl} alt="Weather Icon" />
      </div>
    );
  };



  return (
    <div className="App">
      <Heading />
      <ConterFunction />
      <Form
        value={inputValue.value}
        change={onInputChange}
        submit={onCitySubmit} //Obsługa przycisku
      />
      <Result weather={inputValue} iconWeather={onWeatherIcon()} />
      <Footer />
    </div>
  );

}


const ConterFunction = () => {
  // hooks
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [wynik, setWynik] = useState(0);

  useEffect(() => {
    setWynik(
      value1 * 1 + value2 * 2 + value3 * 3
    )
  }, [value1, value2, value3]);

  return (
    <div>
      <button onClick={() => setValue1(value1 + 1)}>+</button>
      <button onClick={() => setValue1(value1 + 1)}>-</button>
      <span>1x {value1}</span>
      <br />
      <button onClick={() => setValue2(value2 + 1)}>+</button>
      <button onClick={() => setValue2(value2 + 1)}>-</button>
      <span>2x {value2}</span>
      <br />
      <button onClick={() => setValue3(value3 + 1)}>+</button>
      <button onClick={() => setValue3(value3 + 1)}>-</button>
      <span>3x {value3}</span>

      <p>Wynik: {wynik}</p>
    </div >
  )
}

export default App;
// Wzor obiektu
// const obj = {
//   coord: { lon: 18.5418, lat: 50.0971 },
//   weather: [
//     { id: 804, main: "Clouds", description: "overcast clouds", icon: "04d" },
//   ],
//   base: "stations",
//   main: {
//     temp: 0.88,
//     feels_like: -0.49,
//     temp_min: 0.34,
//     temp_max: 2.36,
//     pressure: 1007,
//     humidity: 94,
//   },
//   visibility: 10000,
//   wind: { speed: 1.34, deg: 89, gust: 3.13 },
//   clouds: { all: 100 },
//   dt: 1704443376,
//   sys: {
//     type: 2,
//     id: 2036961,
//     country: "PL",
//     sunrise: 1704437053,
//     sunset: 1704466633,
//   },
//   timezone: 3600,
//   id: 3086586,
//   name: "Rybnik",
//   cod: 200,
// };

//
//   // componentDidUpdate(prevProps, prevState) {
//   //   //funkcaj aktualizujaca na bierzaco z wpisywaniej nowej wartosci
//   //   // console.log("pop wartosc" + prevState.value);
//   //   // console.log("aktualna wartosc" + this.state.value);
//   //   if (this.state.value.length === 0) return;
//   //   if (prevState.value !== this.state.value) {
//   //     const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

//   //     fetch(API) // metoda pobierania danych API
//   //       .then((response) => {
//   //         if (response.ok) {
//   //           return response;
//   //         }
//   //         throw Error("oj nie działa");
//   //       })
//   //       .then((response) => response.json())
//   //       .then((data) => {
//   //         const time = new Date().toLocaleString();
//   //         this.setState((prevState) => ({
//   //           err: false,
//   //           date: time,
//   //           sunrise: data.sys.sunrise,
//   //           sunset: data.sys.sunset,
//   //           temp: data.main.temp,
//   //           feels_like: data.main.feels_like,
//   //           pressure: data.main.pressure,
//   //           wind: data.wind.speed,
//   //           city: prevState.value,
//   //         }));
//   //       })
//   //       .catch((err) => {
//   //         console.log(err);
//   //         this.setState((prevState) => ({
//   //           err: true,
//   //           city: prevState.value,
//   //         }));
//   //       });
//   //   }
//   // }
