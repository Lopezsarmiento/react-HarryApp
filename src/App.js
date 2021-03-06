import React from "react";
import "./App.css";
import CardList from "./components/cardList";
import Container from "react-bootstrap/Container";
import Detail from "./components/detail";
import SortingHat from "./components/SortingHat";
import Main from "./components/main";

function App() {
  return (
    <Container className="mt-3 mb-3 shadow-lg boxcontainer round">
      <Main></Main>
    </Container>
  );
}

export default App;
