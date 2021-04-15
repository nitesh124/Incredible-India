import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";
import Slidebar from "./Slidebar";
import { ReactComponent as Climate } from "../img//2929545431554125873.svg";
import { ReactComponent as Food } from "../img/9295138671579770860.svg";
import { ReactComponent as Art } from "../img/19439378321536040028.svg";
import { ReactComponent as Fort } from "../img/18908328531548407841.svg";

class About extends Component {
  render() {
    return (
      <div id='about'>
        <Slidebar />

        <div className="subComponent" id="aboutBody">
          <Container>
            <header className="headerTitle text-center">
              <h1>About India</h1>
              <p></p>
            </header>
            <section className="svg-group text-center subComponent">
              <Row>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Climate width="48" height="48" strokeWidth="1" />
                    <p>Wide range of weather conditions across a large Geographic scale </p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Food width="48" height="48" strokeWidth="1" />
                    <p>Variety of Regional and Traditional Cuisines</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Art width="48" height="48" strokeWidth="1" />
                    <p>Art including Painting, Sculpture, Pottery, and Textile </p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card">
                    <Fort width="48" height="48" strokeWidth="1" />
                    <p>Kaleidoscopic variety and rich cultural heritage</p>
                  </div>
                </Col>
              </Row>
            </section>
          </Container>
        </div>
      </div>
    );
  }
}

export default About;
