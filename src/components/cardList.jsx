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
      role: "student",
      school: "Hogwarts School of Witchcraft and Wizardry.",
    },
    {
      id: 2,
      name: "Card two",
      role: "Head, Department of International Magical Cooperation",
    },
    {
      id: 3,
      name: "Card three",
      role: "Auror",
    },
    {
      id: 4,
      name: "Card four",
      role: "student",
      school: "Beauxbatons Academy of Magic",
    },
    {
      id: 5,
      name: "Card five",
      role:
        "Employee, Department for the Regulation and Control of Magical Creatures",
    },
    {
      id: 6,
      name: "Card six",
      role: "Head, Department of International Magical Cooperation",
    },
  ];
  return (
    <React.Fragment>
      <HeaderTitle viewName="Characters"></HeaderTitle>
      <CardColumns>
        {items.map((item) => (
          <Card key={item.id} className="shadow">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {item.role}
              </Card.Subtitle>
              {item.school && <Card.Text>{item.school}</Card.Text>}
              <Button variant="outline-dark" size="sm" block>
                See more
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
      <HeaderTitle viewName="Characters"></HeaderTitle>
    </React.Fragment>
  );
};

export default CardList;
