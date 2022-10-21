import classes from "./Skillstack.module.css";

import HTML from "../Images/Icons/html.png";
import CSS from "../Images/Icons/css.png";
import JS from "../Images/Icons/javascript.png";
import React from "../Images/Icons/react.png";
import Github from "../Images/Icons/github.png";
import Git from "../Images/Icons/git.png";
import Webpack from "../Images/Icons/webpack.png";
import Firebase from "../Images/Icons/firebase.png";

const Skillstack = () => {
  return (
    <div className={classes["current-skillstack"]}>
      <h2>My Current Skillstack</h2>
      <div className={classes["skills-and-courses"]}>
        <div className={classes["skillstack"]}>
          <div className={classes["skill-row"]}>
            <h4>Proficient</h4>
            <div className={classes["skills-container"]}>
              <div className={classes["skill"]}>
                <img src={HTML} alt="HTML" className={classes["html"]} />
                <p>HTML</p>
              </div>
              <div className={classes["skill"]}>
                <img src={CSS} alt="CSS" className={classes["css"]} />
                <p>CSS</p>
              </div>
              <div className={classes["skill"]}>
                <img src={JS} alt="Javascript" className={classes["js"]} />
                <p>Javascript</p>
                <p className={classes["detail"]}>(ES6)</p>
              </div>
              <div className={classes["skill"]}>
                <img src={React} alt="React JS" className={classes["react"]} />
                <p>React JS</p>
              </div>
            </div>
          </div>
          <div>
            <h4>Novice</h4>
            <div className={classes["skills-container"]}>
              <div className={classes["skill"]}>
                <img src={Github} alt="Github" className={classes["github"]} />
                <p>Github</p>
              </div>
              <div className={classes["skill"]}>
                <img src={Git} alt="Git" className={classes["git"]} />
                <p>Git</p>
              </div>
              <div className={classes["skill"]}>
                <img
                  src={Webpack}
                  alt="Webpack"
                  className={classes["webpack"]}
                />
                <p>Webpack</p>
              </div>
              <div className={classes["skill"]}>
                <img
                  src={Firebase}
                  alt="Firebase"
                  className={classes["firebase"]}
                />
                <p>Firebase</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes["courses"]}>
          <h3>Courses that helped me get here</h3>
          <ul>
            <li>
              <a
                href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0"
                target="blank"
              >
                CS50 @ Harvard
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"
                target="_blank"
              >
                Jonas Schmedtmann’s HTML & CSS Udemy course
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/the-complete-javascript-course/"
                target="_blank"
              >
                Jonas Schmedtmann’s Javascript Udemy course
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                target="_blank"
              >
                Maximilian Schwarzmüller’s React JS Udemy Course
              </a>
            </li>
            <br />
            <li>...and of course, Google and Stackoverflow</li>
          </ul>
        </div>
      </div>
    </div>
    // <div className={classes["skillstack-container"]}>
    //   <div className={classes["skills-and-courses"]}>
    //     <div className={classes["skills-container"]}>
    //       <h2>My Current Skillstack</h2>
    //       <ul className={classes.skills}>
    //         <li>HTML/CSS/CSS Modules</li>
    //         <li>Javascript (ES6)</li>
    //         <li>React (Redux, Hooks/Custom Hooks, React Router)</li>
    //         <li>Webpack</li>
    //         <li>Git/Github</li>
    //         <br />
    //         <li>Up next to learn: Node.js or Three.js</li>
    //       </ul>
    //     </div>
    //     <div className={classes["courses-container"]}>
    //       <h4>...and courses that helped me get here:</h4>
    //       <ul className={classes.courses}>
    //         <li>CS50 @ Harvard</li>
    //         <li>Jonas Scmedtmann's HTML & CSS Udemy Course</li>
    //         <li>Jonas Schmedtmann's Javascript Udemy Course</li>
    //         <li>Maximilian Schwarzmüller’s React JS Udemy Course</li>
    //         <br />
    //         <li>and of course, Google and Stack Overflow</li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Skillstack;
