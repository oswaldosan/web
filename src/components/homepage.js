import React from "react";
import "../App.css";
import Boton from "./boton";
import Headerbar from "./header";
import styled, { css } from "styled-components";

const Homepage = () => {
  return (
    <div>
      <Headerbar></Headerbar>
      <h1>Homepage</h1>
      <Boton></Boton>
    </div>
  );
};

export default Homepage;
