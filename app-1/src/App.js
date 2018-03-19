import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userInput: ""
    };
  }
  handleChange(value) {
    this.setState({ userInput: value });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Drills App 1</h2>
        </div>

        <p>{this.state.userInput}</p>
        <input
          placeholder="enter some text"
          onChange={e => this.handleChange(e.target.value)}
        />
      </div>
    );
  }
}

export default App;
