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
  handleCitySubmit = (e) => {
    e.preventDefault();
    console.log("potwierdzony formularz");
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("oj nie działa");
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          err: false,
          date: "",
          city: "",
          sunrise: "",
          sunset: "",
          temp: "",
          pressure: "",
          wind: "",
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          err: true,
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleImputChange}
          submit={this.handleCitySubmit}
        />
        <Result error={this.state.err} />
      </div>
    );
  }
}

export default App;
