import { useRef, useState } from "react";

import Hero from "./Hero";
import Skillstack from "./Skillstack";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

import classes from "./Home.module.css";

const Home = () => {
  const eyeRef = useRef();
  const [eyeDeg, setEyeDeg] = useState(0);

  const angle = (cx, cy, ex, ey) => {
    const dy = ey - cy;
    const dx = ex - cx;
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
    setEyeDeg(180 - angleDeg);
  };

  return (
    <div className={classes["home-container"]} onMouseMove={mouseMoveHandler}>
      <Hero />
      <Skillstack />
      <div className={classes["bird-container"]}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="180"
            height="180"
            fill="none"
            viewBox="0 0 60 60"
          >
            <g>
              <g className={classes["beak-open"]}>
                <path
                  fill="#BB7E5D"
                  d="M48.5 19c.333-1 2.8-2 4-2 1.2 0-2.726 2.998-2.726 2.998L49.5 20c1.5 0 3.208-.143 4.705-.055C54.911 19.988 54 21 50 22.5c-.184-1.102-.24-1.949-.5-2.5a2.1 2.1 0 00-1-1z"
                ></path>
                <path
                  stroke="#36342f"
                  d="M49.5 20c1.5 0 3.208-.143 4.705-.055C54.911 19.988 54 21 50 22.5c-.184-1.102-.24-1.949-.5-2.5zm0 0a2.1 2.1 0 00-1-1c.333-1 2.8-2 4-2 1.2 0-2.726 2.998-2.726 2.998L49.5 20z"
                ></path>
              </g>
              <g className={classes["beak-closed"]}>
                <path
                  fill="#BB7E5D"
                  d="M49 18.5c.994-.497 3.247-.5 5.357-.5 2.093 0-1.856 2.645-4.434 3.967-.034.144-.066.033-.066.033L50 20l-1-1.5z"
                ></path>
                <path
                  stroke="#36342f"
                  d="M54.357 18c-2.11 0-4.363.003-5.357.5l1 1.5m4.357-2c2.111 0-1.924 2.69-4.5 4m4.5-4c-1 .5-3.357 1.5-4.357 2m-.143 2s.143.5.143-2m-.143 2L50 20"
                ></path>
              </g>
              <g>
                <path
                  fill="#C7D0D7"
                  d="M33.5 24l1-4.5c0-1.686 5.51-4.5 8-4.5 2.261 0 6 3.5 7.227 5.855.273.645 0 1.873 0 1.873-.405 1.34-1.088 2.768-1.625 3.893-.214.446-.404.845-.545 1.171l.696 4.674C48.068 34.32 45.726 41.831 44.5 44c-.833 1.333-3.903 3.98-10.696 4.49C27 49 21.696 48.2 20 48c-.315-.139-.653-.3-1-.483-2.052-1.081-4.44-2.918-4.512-5.283-2.963.587-7.516.779-9.423.8.325-.722 1.394-2.954 3.065-6.1.894-1.68 2.57-3.422 4.285-4.97-.12-.119-.255-.245-.398-.38-.915-.859-2.182-2.049-2.052-3.792.15-2.017-1.13-3.379-1.13-3.379L5 14.5l2.892 1.299-.565-7.76 2.45 2.703L9 4c2.905 4.026 6.98 12.322 7.49 14.046.177.602.6 1.643 1.094 2.858.919 2.26 2.082 5.125 2.369 6.888 1.499-.223 2.712-.33 3.51-.4.367-.034.646-.058.824-.083.478-.066 1.06-.064 3.713-1.309 1.672-.785 4.171-1.416 5.5-2z"
                ></path>
                <path
                  stroke="#36342f"
                  d="M14.488 42.234c.071 2.365 2.46 4.202 4.512 5.283.347.183.685.344 1 .483 1.696.2 7 1 13.804.49 6.793-.51 9.863-3.157 10.696-4.49 1.226-2.17 3.568-9.68 3.753-11.534l-.696-4.674c.14-.326.331-.725.545-1.171.537-1.125 1.22-2.553 1.625-3.893 0 0 .273-1.228 0-1.873C48.5 18.5 44.76 15 42.5 15c-2.49 0-8 2.814-8 4.5l-1 4.5c-1.329.584-3.828 1.215-5.5 2-2.653 1.245-3.235 1.243-3.713 1.31-.178.024-.457.049-.825.081-.797.07-2.01.178-3.51.401m-5.464 14.442c-2.963.587-7.516.779-9.423.8.325-.722 1.394-2.954 3.065-6.1m6.358 5.3C20.158 41.387 31.6 38.655 32 34.5M8.13 36.934c.894-1.68 2.57-3.422 4.285-4.97m-4.285 4.97c1.464-2.754 5.029-5.67 7.42-7.628m-3.135 2.658c-.12-.119-.255-.246-.398-.38-.915-.859-2.182-2.049-2.052-3.792.15-2.017-1.13-3.379-1.13-3.379L5 14.5l2.892 1.299-.565-7.76 2.45 2.703L9 4c2.905 4.026 6.98 12.322 7.49 14.046.177.602.6 1.643 1.094 2.858.919 2.26 2.082 5.125 2.369 6.888m-7.538 4.172c1.094-.987 2.204-1.895 3.136-2.658m4.402-1.514c-.4.06-1.094.227-1.762.388-.768.184-1.5.36-1.702.354-.283.236-.599.494-.939.772"
                ></path>
              </g>
              <circle
                ref={eyeRef}
                className={classes["eye"]}
                cx="41.5"
                cy="20.5"
                r="3"
                fill="#fff"
                stroke="#36342f"
              ></circle>
              <path
                stroke="#36342f"
                d="M19 47.5L18 50l3.948 3.605m0 0l-.448.895-1 1.5 1.5-1.5 2 1v-1l3.5 1.5-5.552-2.395z"
              ></path>
              <path
                stroke="#36342f"
                d="M26 48.5L24 51l5 2.5m0 0V55l.5-.5 2 .5v-.5l2 .5-4.5-1.5z"
              ></path>
              <path
                fill="#36342f"
                d="M43 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                className={classes.eyeball}
              ></path>
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 4 4"
            fill="none"
            className={classes["eyeball-test"]}
            style={{
              transform: `rotate(${eyeDeg - 90}deg)`,
            }}
          >
            <path
              id="eyeballz"
              d="M4 2C4 3.10457 3.10457 4 2 4C0.89543 4 0 3.10457 0 2C0 0.89543 0.89543 0 2 0C3.10457 0 4 0.89543 4 2Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
};

export default Home;
