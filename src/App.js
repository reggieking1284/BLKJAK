import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="title">BLK-JAK</h1>
        <h4>By: Gavin Richards</h4>

        <p id="text-area">Welcome to BLK-JAK!</p>
        <button id="new-game-button">New Game!</button>
        <button id="hit-button">Hit!</button>
        <button id="stay-button">Stay</button>
      </div>
    );
  }
}

export default App;
