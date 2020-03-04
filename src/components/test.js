import React, { useState } from "react";
import "../App.css";
import Boton from "./boton";
import Headerbar from "./header";
import styled, { css } from "styled-components";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Modalbox() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const Test = () => {
  return (
    <div>
      <Headerbar></Headerbar>
      <h1>Test</h1>
      <Boton></Boton>
      <Modalbox></Modalbox>
    </div>
  );
};

export default Test;
