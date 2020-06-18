import React from "react";
import "./App.css";
import CardList from "./components/cardList";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container className="mt-5 mb-5 shadow-lg boxcontainer">
      <CardList></CardList>
    </Container>
  );
}

export default App;
