import React from "react";
import { Button } from "reactstrap";
import "../App.css";
const Banner = () => (
  <div>
    <main className="cover-page" id="banner">
      <section className="wrapped-page">
        <div className="item-center">
          <h1>Welcome To India</h1>
          <h3>Culture | Beauty | Tradition</h3>
          <Button outline color="warning" href="#about">
            Explore More
          </Button>
        </div>
      </section>
    </main>
  </div>
);

export default Banner;
