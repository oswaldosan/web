import React from "react";
import Logohead from "../img/nijatonyhead.png";
import styled, { css } from "styled-components";
import Mylink from "./menubar";

const Headerbar = props => {
  return (
    <div>
      <Barrasuperior></Barrasuperior>
      <Cabecera primary="true">
        <Mylink></Mylink>
      </Cabecera>
    </div>
  );
};

export default Headerbar;

const Cabecera = styled.div`
  background: ${props => (props.primary = true ? "#fff" : "red")};
  padding: 15px;
  border-bottom: 1px solid white;
  text-align: center;
  margin: 0 auto;
`;

const Barrasuperior = styled.div`
  background-image: linear-gradient(
    186deg,
    rgb(50, 255, 245) -100%,
    rgb(1, 191, 227) 80%
  );
  width: 100%;
  height: 10px;
`;
