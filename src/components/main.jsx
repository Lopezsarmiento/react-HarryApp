import React from "react";
// bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Jumbotron from "react-bootstrap/Jumbotron";
// app components
import HeaderTitle from "./common/headerTitle";
import Feature from "./common/feature";

const Main = () => {
  const chars = { title: "Characters", text: "See all characters from books" };
  const spells = { title: "spells", text: "See all spells from books" };
  const houses = { title: "houses", text: "See all houses from books" };
  const sorting = { title: "Sorting hat", text: "find out where you belong" };
  return (
    <React.Fragment>
      <HeaderTitle viewName="Main"></HeaderTitle>
      <Container>
        <Row>
          <Col>
            <Feature title={chars.title} text={chars.text}></Feature>
          </Col>
        </Row>
        <Row>
          <Col>
            <Feature title={spells.title} text={spells.text}></Feature>
          </Col>
          <Col>
            <Feature title={houses.title} text={houses.text}></Feature>
          </Col>
        </Row>
        <Row>
          <Col>
            <Feature title={sorting.title} text={sorting.text}></Feature>
          </Col>
        </Row>
      </Container>
      <HeaderTitle viewName="Main"></HeaderTitle>
    </React.Fragment>
  );
};

export default Main;
