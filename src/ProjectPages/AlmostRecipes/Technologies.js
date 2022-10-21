import classes from "./Technologies.module.css";
import HTML from "../../Images/Icons/html.png";
import CSS from "../../Images/Icons/css.png";
import React from "../../Images/Icons/react.png";
import Firebase from "../../Images/Icons/firebase.png";

const Technologies = () => {
  return (
    // <div className={classes.technologies}>
    //   <h3>Technologies I used</h3>
    //   <ul>
    //     <li>HTML/CSS</li>
    //     <li>React JS</li>
    //     <li>Hooks</li>
    //     <li>Redux</li>
    //     <li>React Router</li>
    //     <li>Firebase (for deployment)</li>
    //   </ul>
    // </div>
    <div className={classes["technologies"]}>
      <h2>Technologies I used</h2>
      <div className={classes["technologies-container"]}>
        <div className={classes["skill"]}>
          <img src={HTML} alt="HTML" className={classes["html"]} />
          <p>HTML</p>
        </div>
        <div className={classes["skill"]}>
          <img src={CSS} alt="CSS" className={classes["css"]} />
          <p>CSS</p>
          <ul>
            <li>CSS Modules</li>
          </ul>
        </div>
        <div className={classes["skill"]}>
          <img src={React} alt="React" className={classes["react"]} />
          <p>React.JS</p>
          <ul>
            <li>Redux</li>
            <li>React Router</li>
          </ul>
        </div>
        <div className={classes["skill"]}>
          <img src={Firebase} alt="Firebase" className={classes["firebase"]} />
          <p>Firebase</p>
          <ul>
            <li>for deployment</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
