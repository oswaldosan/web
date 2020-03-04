import React, { useState } from "react";
import styled, { css } from "styled-components";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Modalbutton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="newBoton" onClick={handleShow}>
        Contact me...
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>Name:</label>
            <input></input>
            <label>Email:</label>
            <input></input>
            <label>Phone:</label>
            <input></input>
            <input type="submit" value="Submit" />
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modalbutton;
