import React, { Component } from "react";
import "../App.css";
import Banner from "./Banner";
import About from "./About";
import List from "./List";
import Land from "./Land";
import Contact from "./Contact";

class Home extends Component {
  render() {
    return (
      <div id='home'>
        <Banner />
        <About />
        <List />
        <Land />
        <Contact />
      </div>
    );
  }
}

export default Home;
