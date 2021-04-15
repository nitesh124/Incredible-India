import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import ThingsToTry from "./ThingsToTry";
import "../App.css";
import img1 from "../img/jovyn-chamb-iWMfiInivp4-unsplash.jpg";
import img2 from "../img/billeasy-Mawa0oZ3YKs-unsplash.jpg";
import img3 from "../img/faris-mohammed-EY9ajqIl9c0-unsplash.jpg";
import img4 from "../img/anantha-krishnan-WR267TZrces-unsplash.jpg";
import img5 from "../img/prashant-mishra-F9VIeTbGazU-unsplash.jpg";
import img6 from "../img/claudette-bleijenberg-eiqplkJblxA-unsplash.jpg";
import img7 from "../img/brian-wangenheim-0dhiDkRp-Wk-unsplash.jpg";
import img8 from "../img/partho-roy-o9e6ItFOIh0-unsplash.jpg";
import img9 from "../img/andrew-chobaniuk-J0LvK2H1FPA-unsplash.jpg";
import img10 from "../img/manyu-varma-ef3A5EDR7Jk-unsplash.jpg";
const india = [
  {
    id: 1,
    category: ["Architecture"],
    img: img1,
    alt: "",
    title: "Taj Mahal",
    subtitle: "Agra"
  },
  {
    id: 2,
    category: ["Architecture", "Culture"],
    img: img2,
    alt: "",
    title: "Ganesh Festival",
    subtitle: "Maharashtra"
  },
  {
    id: 3,
    category: ["Food"],
    img: img3,
    alt: "",
    title: "Biriyani",
    subtitle: "Hyderabad"
  },
  {
    id: 4,
    category: ["Climate"],
    img: img7,
    alt: "",
    title: "Desert",
    subtitle: "Rajasthan"
  },
  {
    id: 5,
    category: ["Food","Culture"],
    img: img5,
    alt: "",
    title: "Pooja",
    subtitle: "Rajasthan"
  },
  {
    id: 6,
    category: ["Climate", "Architecture"],
    img: img6,
    alt: "",
    title: "Fort",
    subtitle: "India"
  },
  {
    id: 7,
    category: ["Culture","Festivals"],
    img: img4,
    alt: "",
    title: "Onam",
    subtitle: "Kerala"
  },
  {
    id: 8,
    category: ["Festivals","Culture"],
    img: img8,
    alt: "",
    title: "Diwali",
    subtitle: "Kerala"
  },
  {
    id: 9,
    category: ["Climate"],
    img: img9,
    alt: "",
    title: "Dassam Falls",
    subtitle: "Jharkhand"
  },
  {
    id: 10,
    category: ["Festivals"],
    img: img10,
    alt: "",
    title: "Festival",
    subtitle: "Madhya Pradesh"
  }
];

const itemCategories = [
  "all",
  "Architecture",
  "Food",
  "Culture",
  "Climate",
  "Festivals"
];

class Package extends Component {
  state = {
    cards: [],
    category: "all"
  };

  componentDidMount() {
    this.setState({ cards: india });
  }

  render() {
    const { cards, category } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Things to Do in India</h1>
            <p></p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === category ? "dark" : "light"}
                onClick={() => this.setState({ category: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {category !== "all"
                  ? cards.map(thingstotry => {
                    return thingstotry.category.map(catItem => {
                      return catItem === category ? (
                        <ThingsToTry key={thingstotry.id} thingstotry={thingstotry} />
                      ) : null;
                    });
                  })
                  : cards.map(thingstotry => (
                    <ThingsToTry key={thingstotry.id} thingstotry={thingstotry} />
                  ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
