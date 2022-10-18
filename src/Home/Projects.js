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
        <div>
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
      </div>
      <div className={classes.project}>
        <div>
          <img src={AlmostRecipes1} alt="The AlmostRecipes Homepage" />
        </div>
        <div>
          <h4>AlmostRecipes</h4>
          <p className={classes["project-desc"]}>
            A search-by-ingrdients recipe app for your leftover groceries! Built
            using React.JS and the Spoonacular API
          </p>
          {/* <Link to="/projects/AlmostRecipes"> */}
          <div className={classes["read-more"]}>
            <p>Read More</p>
            <Arrows />
          </div>
          {/* </Link> */}
        </div>
      </div>
      <div className={classes.project}>
        <div>
          <img src={AlmostRecipes1} alt="The AlmostRecipes Homepage" />
        </div>
        <div>
          <h4>AlmostRecipes</h4>
          <p className={classes["project-desc"]}>
            A search-by-ingrdients recipe app for your leftover groceries! Built
            using React.JS and the Spoonacular API
          </p>
          {/* <Link to="/projects/AlmostRecipes"> */}
          <div className={classes["read-more"]}>
            <p>Read More</p>
            <Arrows />
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
