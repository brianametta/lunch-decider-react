import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenLunch: null,
      lunchOptions: [
        "Luna Grill",
        "Sandwiches",
        "Pizza",
        "Taco Bell",
        "Chiles",
        "Applebees",
        "Souplantation"
      ]
    };
  }

  GenerateLunchIdea = () => {
    var randomNum = Math.floor(
      Math.random() * Math.floor(this.state.lunchOptions.length)
    );
    this.setState({ chosenLunch: this.state.lunchOptions[randomNum] });
  };

  render() {
    return (
      <div>
        <h1>Lunch Generator</h1>
        <button
          onClick={this.GenerateLunchIdea}
          className="btn btn-primary btn-sm"
        >
          What's for lunch?
        </button>
        <h3>{this.state.chosenLunch}</h3>
      </div>
    );
  }
}

export default App;
