import React from "react";
import "../App.css";
import Boton from "./boton";
import Headerbar from "./header";
import styled, { css } from "styled-components";
import { useSpring, animated } from "react-spring";
import Modalbutton from "./modalbutton";

const Barraslide = () => {
  const props = useSpring({
    config: { duration: 650 },
    opacity: 1,
    transform: "translate(0px, 0px)",
    from: { opacity: 0, transform: "translate(-660px, 0px)" },
    delay: 150
  });

  return (
    <animated.div style={props}>
      <div className="barrasslider">
        <h1 className="titulos">Welcome to my house</h1>
        <h2>Web Dev</h2>
        <Modalbutton></Modalbutton>
      </div>
    </animated.div>
  );
};

const Contentbar = () => {
  const props = useSpring({
    config: { duration: 500 },
    opacity: 1,
    transform: "translate(0px, 0px)",
    from: { opacity: 0, transform: "translate(660px, 0px)" },
    delay: 150
  });
  return (
    <animated.div className="contentbar" style={props}>
      <h1>test</h1>
    </animated.div>
  );
};

const Homepage = () => {
  return (
    <div>
      <Headerbar></Headerbar>
      <Barraslide></Barraslide>
      <Contentbar></Contentbar>
    </div>
  );
};

export default Homepage;
