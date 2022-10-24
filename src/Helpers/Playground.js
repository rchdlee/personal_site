import { useState, useRef } from "react";
import Birb1 from "../Images/Birbs/Birb1";
import Birb2 from "../Images/Birbs/Birb2";
import Birb3 from "../Images/Birbs/Birb3";
import classes from "./Playground.module.css";

const Playground = () => {
  const birb1Ref = useRef();
  const birb2Ref = useRef();
  const birb3Ref = useRef();
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });

  const mouseMoveHandler = (event) => {
    console.log("mouse move ahndler");
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    setCurrentPos({ x: mouseX, y: mouseY });
    birb1Ref.current.angleCalc();
    birb2Ref.current.angleCalc();
    birb3Ref.current.angleCalc();
  };

  return (
    <div
      className={classes["playground-container"]}
      onMouseMove={mouseMoveHandler}
    >
      <div style={{ marginTop: "180px" }}></div>
      <Birb1 mouseCoords={currentPos} ref={birb1Ref} />
      <Birb2 mouseCoords={currentPos} ref={birb2Ref} />
      <Birb3 mouseCoords={currentPos} ref={birb3Ref} />
    </div>
  );
};

export default Playground;
