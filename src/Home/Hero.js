import { useRef } from "react";
import classes from "./Hero.module.css";

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
      <h1>Hi, I'm Richard!</h1>
      <h3>
        I'm a self-taught frontend dev, studying psychology and neuroscience at
        UPenn
      </h3>
    </div>
  );
};

export default Hero;
