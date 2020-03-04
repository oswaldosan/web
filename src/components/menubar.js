import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Mylink = props => {
  return (
    <div>
      <Navigation>
        <LinkItem to="/">Home</LinkItem>
        <LinkItem to="/about">About</LinkItem>
        <LinkItem to="/test">Test</LinkItem>
      </Navigation>
    </div>
  );
};

export default Mylink;

const LinkItem = styled(Link)`
  color: #fff;
  padding: 10px;
  display: inline-block;
`;

const Navigation = styled.div`
  position: absolute;
  top: 4%;
  right: 7%;
`;
