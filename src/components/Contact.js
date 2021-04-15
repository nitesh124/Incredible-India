import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";

import { ReactComponent as Phone } from "../img/17041734501530272912.svg";
import { ReactComponent as Mail } from "../img/16039538201535696657.svg";
import { ReactComponent as Map } from "../img/10123041601535956912.svg";
import "../App.css";

class Contact extends Component {
  render() {
    return (
      <div className="subComponent-lg" id="contactBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Want to Know more About India</h1>
            <p>GET IN TOUCH WITH US</p>
          </header>
          <section className="svg-group text-center">
            <Row>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                <Phone width="40" height="40" strokeWidth="1" />
                  <p>+91 8686 884 885</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                <Map width="40" height="40" strokeWidth="1" />
                  <p>Hyderabad</p>
                </div>
              </Col>
              <Col lg="4" md="4">
                <div className="svg-card-3">
                <Mail width="40" height="40" strokeWidth="1" />
                  <p><a href="mailto:niteshvarma1995@gmail.com">Gmail</a></p>
                </div>
              </Col>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Contact;
