import { useRef, useState } from "react";

import Hero from "./Hero";
import Skillstack from "./Skillstack";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

import Birb1 from "../Images/Birbs/Birb1";
import Birb2 from "../Images/Birbs/Birb2";
import Birb3 from "../Images/Birbs/Birb3";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import classes from "./Home.module.css";

const Home = () => {
  const birb1Ref = useRef();
  const birb2Ref = useRef();
  const birb3Ref = useRef();
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });

  const mouseMoveHandler = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setCurrentPos({ x: mouseX, y: mouseY });
    birb1Ref.current.angleCalc();
    birb2Ref.current.angleCalc();
    birb3Ref.current.angleCalc();
  };

  return (
    <div className={classes["home-container"]} onMouseMove={mouseMoveHandler}>
      <div className={classes["birb1-container"]}>
        <Hero />
        <Birb1 mouseCoords={currentPos} ref={birb1Ref} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "32px",
          marginTop: "164px",
        }}
      >
        <FontAwesomeIcon icon={faAngleDown} style={{}} />
      </div>
      <Skillstack />
      <Birb2 mouseCoords={currentPos} ref={birb2Ref} />

      <Projects />
      <AboutMe />
      <Birb3 mouseCoords={currentPos} ref={birb3Ref} />

      <Contact />
    </div>
  );
};

export default Home;
