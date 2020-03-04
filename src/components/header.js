import React from "react";
import Logohead from "../img/nijatonyhead.png";
import styled, { css } from "styled-components";
import Mylink from "./menubar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const Headerbar = props => {
  return (
    <div>
      <Cabecera primary="true">
        <div className="Row">
          <img src={Logohead} width="80px" alt="thelogo"></img>
        </div>
        <Mylink></Mylink>
      </Cabecera>
    </div>
  );
};

export default Headerbar;

const Cabecera = styled.div`
  background: ${props => (props.primary = true ? "#0B243B" : "red")};
  padding: 15px;
  border-bottom: 1px solid white;
`;
