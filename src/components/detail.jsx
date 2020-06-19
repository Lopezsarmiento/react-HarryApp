import React from "react";
// bootstrap components
import Card from "react-bootstrap/Card";
// app components
import HeaderTitle from "./common/headerTitle";

const Detail = () => {
  const item = {
    id: 1,
    name: "Card one",
    role: "student",
    school: "Hogwarts School of Witchcraft and Wizardry.",
    house: "Ravenclaw",
    alias: "Padfoot",
    animagus: "black dog",
    bloodStatus: "half-blood",
    species: "human",
  };

  return (
    <React.Fragment>
      <HeaderTitle viewName="Character Details"></HeaderTitle>
      <Card className="shadow overflow-auto">
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Character Name
          </Card.Subtitle>
          <Card.Text className="mb-2">{item.name}</Card.Text>
          <hr></hr>
          <Card.Title></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Role</Card.Subtitle>
          <Card.Text className="mb-2">{item.role}</Card.Text>
          {item.school && (
            <React.Fragment>
              <hr></hr>
              <Card.Title></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">School</Card.Subtitle>
              <Card.Text className="mb-2">{item.school}</Card.Text>
            </React.Fragment>
          )}
          {item.house && (
            <React.Fragment>
              <Card.Title></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">House</Card.Subtitle>
              <Card.Text className="mb-2">{item.house}</Card.Text>
            </React.Fragment>
          )}
          {item.alias && (
            <React.Fragment>
              <hr></hr>
              <Card.Title></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">alias</Card.Subtitle>
              <Card.Text className="mb-2">{item.alias}</Card.Text>
            </React.Fragment>
          )}
          {item.animagus && (
            <React.Fragment>
              <hr></hr>
              <Card.Title></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                animagus
              </Card.Subtitle>
              <Card.Text className="mb-2">{item.animagus}</Card.Text>
            </React.Fragment>
          )}
          {item.bloodStatus && (
            <React.Fragment>
              <hr></hr>
              <Card.Title></Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                bloodStatus
              </Card.Subtitle>
              <Card.Text className="mb-2">{item.bloodStatus}</Card.Text>
            </React.Fragment>
          )}
        </Card.Body>
      </Card>
      <HeaderTitle viewName="Character Details"></HeaderTitle>
    </React.Fragment>
  );
};

export default Detail;
