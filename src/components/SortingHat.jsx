import React, { useState } from "react";
// bootstrap components
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
// app components
import HeaderTitle from "./common/headerTitle";

const SortingHat = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <HeaderTitle viewName="Sorting Hat"></HeaderTitle>
      <Jumbotron className="shadow">
        <h1>Hello!</h1>
        <blockquote>
          "Oh you may not think I'm pretty, but don't judge on what you see,
          I'll eat myself if you can find a smarter hat than me."
        </blockquote>
        <p>
          <Button variant="warning" size="sm" block onClick={handleShow}>
            Try me and I will tell you where you ought to be
          </Button>
        </p>
      </Jumbotron>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <HeaderTitle viewName="Sorting Hat"></HeaderTitle>
    </React.Fragment>
  );
};

export default SortingHat;
