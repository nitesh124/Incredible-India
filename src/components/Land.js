import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "../App.css";

import { ReactComponent as Climate } from "../img/16810494391591204135.svg";
import { ReactComponent as Food } from "../img/18395208121586787144.svg";
import { ReactComponent as Monuments } from "../img/17969464561535782589.svg";
import { ReactComponent as Beauty } from "../img/308446901591204142.svg";

class Services extends Component {
  render() {
    return (
      <div className="wrapped-services">
        <div className="subComponent" id="servicesBody">
          <Container>
            <section className="svg-group text-center">
              <Row>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                  <Climate width="55" height="55" strokeWidth="1" />
                    <p>Climate</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <Monuments width="55" height="55" strokeWidth="1" />
                    <p>Monuments</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <Food width="55" height="55" strokeWidth="1" />
                    <p>Food</p>
                  </div>
                </Col>
                <Col lg="3" md="6" sm="6">
                  <div className="svg-card-2">
                    <Beauty width="55" height="55" strokeWidth="1" />
                    <p>Nature</p>
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

export default Services;
