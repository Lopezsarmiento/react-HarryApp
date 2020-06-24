import React from "react";
// bootstrap components
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Feature = ({ title, text }) => {
  return (
    <Jumbotron className="text-center">
      <h1>{title}</h1>
      <p>{text}</p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  );
};

export default Feature;
