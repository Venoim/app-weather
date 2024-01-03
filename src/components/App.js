// import logo from "../logo.svg";
import Form from "./Form";
import Result from "./Result";
import "./App.css";
import { Component } from "react";

//klucz do API
const APIKey = "8111c344d5b4e675f9b32e6c7c37beee";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
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
  // handleCitySubmit = (e) => {  //Obsługa przycisku
  //   e.preventDefault();
  //   // console.log("potwierdzony formularz");
  //   const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

  //   fetch(API)
  //     .then((response) => {
  //       if (response.ok) {
  //         return response;
  //       }
  //       throw Error("oj nie działa");
  //     })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const time = new Date().toLocaleString();
  //       this.setState((prevState) => ({
  //         err: false,
  //         date: time,
  //         sunrise: data.sys.sunrise,
  //         sunset: data.sys.sunset,
  //         temp: data.main.temp,
  //         pressure: data.main.pressure,
  //         wind: data.wind.speed,
  //         city: prevState.value,
  //       }));
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       this.setState((prevState) => ({
  //         err: true,
  //         city: prevState.value,
  //       }));
  //     });
  // };

  componentDidUpdate(prevProps, prevState) {
    //funkcaj aktualizujaca na bierzaco z wpisywaniu nowej wartosci
    // console.log("pop wartosc" + prevState.value);
    // console.log("aktualna wartosc" + this.state.value);
    if (this.state.value.length === 0) return;
    if (prevState.value !== this.state.value) {
      const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

      fetch(API) // metoda pobierania danych API
        .then((response) => {
          if (response.ok) {
            return response;
          }
          throw Error("oj nie działa");
        })
        .then((response) => response.json())
        .then((data) => {
          const time = new Date().toLocaleString();
          this.setState((prevState) => ({
            err: false,
            date: time,
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            temp: data.main.temp,
            pressure: data.main.pressure,
            wind: data.wind.speed,
            city: prevState.value,
          }));
        })
        .catch((err) => {
          console.log(err);
          this.setState((prevState) => ({
            err: true,
            city: prevState.value,
          }));
        });
    }
  }

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleImputChange}
          // submit={this.handleCitySubmit} //Obsługa przycisku
        />
        <Result weather={this.state} />
      </div>
    );
  }
}

export default App;
