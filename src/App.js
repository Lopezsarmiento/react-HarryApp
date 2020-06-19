import React from "react";
import "./App.css";
import CardList from "./components/cardList";
import Container from "react-bootstrap/Container";
import Detail from "./components/detail";

function App() {
  return (
    <Container className="mt-3 mb-3 shadow-lg boxcontainer">
      <CardList></CardList>
    </Container>
  );
}

export default App;
