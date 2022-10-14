import { Link } from "react-router-dom";

import AlmostRecipes1 from "../Images/almostrecipes1.png";
import Arrows from "../Images/Arrows";
import classes from "./Projects.module.css";

const Projects = () => {
  return (
    <div className={classes["projects-container"]} id="projects">
      <h2>Things I've built</h2>
      <div className={classes.project}>
        <div>
          <img src={AlmostRecipes1} alt="The AlmostRecipes Homepage" />
        </div>
        <h4>AlmostRecipes</h4>
        <p className={classes["project-desc"]}>
          A search-by-ingrdients recipe app for your leftover groceries! Built
          using React.JS and the Spoonacular API
        </p>
        <Link to="/projects/AlmostRecipes">
          <div className={classes["read-more"]}>
            <p>Read More</p>
            <Arrows />
          </div>
        </Link>
      </div>
      <div className={classes.project}>
        <div>
          <img src={AlmostRecipes1} alt="The AlmostRecipes Homepage" />
        </div>
        <h4>AlmostRecipes</h4>
        <p className={classes["project-desc"]}>
          A search-by-ingrdients recipe app for your leftover groceries! Built
          using React.JS and the Spoonacular API
        </p>
        {/* <Link to="/projects/AlmostRecipes"> */}
        <div className={classes["read-more"]}>
          <p>Read More</p>
          <svg
            width="39"
            height="20"
            viewBox="0 0 39 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrowgroup">
              <path
                id="arrow1"
                d="M1 2L12 9.72414L1 18"
                // stroke="black"
                strokeWidth="3"
              />
              <path
                id="arrow2"
                d="M13 2L24 9.72414L13 18"
                // stroke="black"
                strokeWidth="3"
              />
              <path
                id="arrow3"
                d="M25 2L36 9.72414L25 18"
                // stroke="black"
                strokeWidth="3"
              />
            </g>
          </svg>
        </div>
        {/* </Link> */}
      </div>
      <div className={classes.project}>
        <div>
          <img src={AlmostRecipes1} alt="The AlmostRecipes Homepage" />
        </div>
        <h4>AlmostRecipes</h4>
        <p className={classes["project-desc"]}>
          A search-by-ingrdients recipe app for your leftover groceries! Built
          using React.JS and the Spoonacular API
        </p>
        {/* <Link to="/projects/AlmostRecipes"> */}
        <div className={classes["read-more"]}>
          <p>Read More</p>
          <svg
            width="39"
            height="20"
            viewBox="0 0 39 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="arrowgroup">
              <path
                id="arrow1"
                d="M1 2L12 9.72414L1 18"
                // stroke="black"
                strokeWidth="3"
              />
              <path
                id="arrow2"
                d="M13 2L24 9.72414L13 18"
                // stroke="black"
                strokeWidth="3"
              />
              <path
                id="arrow3"
                d="M25 2L36 9.72414L25 18"
                // stroke="black"
                strokeWidth="3"
              />
            </g>
          </svg>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Projects;
