import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Logohead from "../img/nijatonyhead.png";

const Mylink = props => {
  return (
    <div>
      <Navigation>
        <LinkItem to="/">Home</LinkItem>
        <LinkItem to="/about">About</LinkItem>
        <div className="logo">
          <img src={Logohead} width="65px" alt="thelogo"></img>
        </div>
        <LinkItem to="/test">Tests</LinkItem>
        <LinkItem to="/test">Contact</LinkItem>
      </Navigation>
    </div>
  );
};

export default Mylink;

const LinkItem = styled(Link)`
  color: rgb(109, 118, 147);
  padding: 5px;
  margin-left: 70px;
  margin-right: 70px;
  display: inline-block;
  font-size: 17px;
  font-weight: 400;
  transition: all 1s ease;
  &:hover {
    text-decoration: none;
    color: rgb(1, 191, 227);
  }
`;

const Navigation = styled.div`
  padding: 10px;
`;
