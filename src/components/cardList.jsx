import React from "react";
// bootstrap components
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
// app components
import HeaderTitle from "./common/headerTitle";

const CardList = () => {
  const items = [
    {
      id: 1,
      name: "Card one",
      text:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
    },
    {
      id: 2,
      name: "Card two",
      text:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      id: 3,
      name: "Card three",
      text:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action....This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      id: 4,
      name: "Card four",
      text:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      id: 5,
      name: "Card five",
      text:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
    {
      id: 6,
      name: "Card six",
      text:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
    },
  ];
  return (
    <React.Fragment>
      <HeaderTitle viewName="Characters"></HeaderTitle>
      <CardColumns>
        {items.map((item) => (
          <Card key={item.id} className="mt-3 shadow">
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.text}</Card.Text>
              <Button variant="outline-dark" size="sm" block>
                See more
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    </React.Fragment>
  );
};

export default CardList;
