import Heading from "./Heading";
import Form from "./Form";
import Result from "./Result";
import Footer from "./Footer";
import "./App.css";
import { Component } from "react";

// //klucz do API
const APIKey = "8111c344d5b4e675f9b32e6c7c37beee";
let icon = "";

class App extends Component {
  state = {
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
  };

  handleImputChange = (e) => {
    //metoda wartosc i ustawia w value
    this.setState({
      value: e.target.value,
    });
  };
  handleCitySubmit = async (e) => {
    //Obsługa przycisku
    e.preventDefault();
    // console.log("potwierdzony formularz");
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

    try {
      const response = await fetch(API);
      if (!response.ok) {
        throw Error("oj nie działa");
      }
      const data = await response.json();

      const time = new Date().toLocaleString();
      this.setState((prevState) => ({
        err: false,
        date: time,
        weather: data.weather[0].icon,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        city: prevState.value,
      }));
    } catch (error) {
      this.setState((prevState) => ({
        err: true,
        city: prevState.value,
      }));
    }
  };

  handleWeatherIcon = (e) => {
    const iconCode = this.state.weather; // Załóżmy, że e.state.weather to tablica z jednym obiektem pogodowym
    console.log("Ikona: " + iconCode);

    const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png?appid=${APIKey}`;
    return (
      <div>
        <img src={iconUrl} alt="Weather Icon" />
      </div>
    );
  };
  render() {
    return (
      <div className="App">
        <Heading />
        <Form
          value={this.state.value}
          change={this.handleImputChange}
          submit={this.handleCitySubmit} //Obsługa przycisku
        />
        <Result weather={this.state} iconWeather={this.handleWeatherIcon()} />
        <Footer />
      </div>
    );
  }
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
