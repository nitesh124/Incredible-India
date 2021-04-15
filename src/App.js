import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import NavbarMain from "./components/Navbar";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMain />
        <Router>
          <Home path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
