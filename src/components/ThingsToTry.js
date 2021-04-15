import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import "../App.css";

const ThingsToTry = ({ thingstotry }) => {
  const { img, alt, title, subtitle } = thingstotry;
  return (
    <Card>
      <CardImg top width="100%" src={img} alt={alt} />
      <CardBody>
        <Button outline color="secondary" className="float-right" href="ReadMode">
          Read more
        </Button>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
      </CardBody>
    </Card>
  );
};
export default ThingsToTry;
