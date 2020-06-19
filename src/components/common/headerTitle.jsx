import React from "react";
// bootstrap components
import Navbar from "react-bootstrap/Navbar";
// app components

const HeaderTitle = (props) => {
  return (
    <Navbar className="">
      <Navbar.Brand>{props.viewName}</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a href="#login">Main</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderTitle;
