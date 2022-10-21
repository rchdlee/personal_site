import { useRef } from "react";
import classes from "./Hero.module.css";

import Birb from "../Images/birb.svg";
import Playground from "../Helpers/Playground";

const Hero = () => {
  const eyeRef = useRef();

  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - ey;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  };

  const mouseMoveHandler = (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const rekt = eyeRef.current.getBoundingClientRect();
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
    console.log(angleDeg);
  };

  return (
    <div className={classes["hero-container"]} onMouseMove={mouseMoveHandler}>
      {/* <div className={classes.squares}>
        <div className={`${classes.square} ${classes.green}`}></div>
        <div className={`${classes.square} ${classes.black}`}></div>
        <div className={`${classes.square} ${classes.brown}`}></div>
        <div className={`${classes.square} ${classes.cream}`}></div>
        <div className={`${classes.square} ${classes.grey}`}></div>
      </div> */}
      <h1>Hi, I'm Richard!</h1>
      <h3>
        I'm a self-taught frontend dev, studying psychology and neuroscience at
        UPenn
      </h3>
      {/* <Playground /> */}
      {/* <img src={Birb} alt="birb" width="120" /> */}
    </div>
  );
};

export default Hero;
