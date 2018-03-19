import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      userInput: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.addToList = this.addToList.bind(this);
  }
  handleChange(value) {
    this.setState({ userInput: value });
  }
  addToList() {
    var newList = this.state.list.slice();
    newList.push(this.state.userInput);
    this.setState({ list: newList });
  }
  render() {
    let { list } = this.state;
    console.log(this.state.list);
    let myList = list.map((list, index) => {
      return <div key={index}>{list}</div>;
    });
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Drills App 2</h2>
        </div>
        <p> {this.state.userInput}</p>
        <input
          placeholder="Enter Item"
          onChange={e => {
            this.handleChange(e.target.value);
          }}
        />
        <button onClick={() => this.addToList()}>Add to List</button>
        <div>{myList.length ? myList : "Add to List"}</div>
      </div>
    );
  }
}

export default App;
