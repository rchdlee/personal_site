import { useState } from "react";
import { Link } from "react-router-dom";

import AlmostRecipes1 from "../Images/almostrecipes1.png";
import classes from "./Projects.module.css";

const Projects = () => {
  const [currentImg, setCurrentImg] = useState("");

  const imgMouseOverHandler = (e) => {
    const imgID = e.target.closest("img").id;
    const id = imgID.slice(3, 4);
    setCurrentImg(id);
  };

  const mouseOverHandler = (e) => {
    const id = e.target.closest("a").id;
    setCurrentImg(id);
  };

  const mouseLeaveHandler = () => {
    setCurrentImg("");
  };



  return (
    <div
      className={classes["projects-container"]}
      id="projects"
      style={{ position: "relative" }}
    >
      <h2>Things I've built</h2>
      {/* <div
        style={{
          position: "absolute",
          top: "2px",
          left: "2px",
        }}
      >
        <Playground />
      </div> */}
      <div className={classes.project}>
        <div>
          <Link to="/projects/AlmostRecipes">
            <img
              src={AlmostRecipes1}
              alt="The AlmostRecipes Homepage"
              id="img1"
              onMouseEnter={imgMouseOverHandler}
              onMouseLeave={mouseLeaveHandler}
              className={`${classes.img} ${
                currentImg === "1" ? classes.animation : ""
              }`}
            />
          </Link>
        </div>
        <div className={classes["project-info"]}>
          <a href="https://myrecipes-5a39a.web.app/search" target="_blank" rel="noreferrer">
            <h4 className={classes["project-title"]}>AlmostRecipes</h4>
          </a>
          <p className={classes["project-desc"]}>
            A search-by-ingrdients recipe app for your leftover groceries! Built
            using React.JS and the Spoonacular API
          </p>
          <Link
            to="/projects/AlmostRecipes"
            style={{ textDecoration: "none" }}
            id="1"
            onMouseEnter={mouseOverHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <div className={classes["read-more"]}>
              <p>Read More</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="34"
                viewBox="0 0 40 34"
                fill="none"
              >
                <g id="arrows">
                  <g id="arrowgroup">
                    <path
                      id="arrow1"
                      d="M7 9L18 16.7241L7 25"
                      strokeWidth="2"
                      className={`${classes.arrow1} ${
                        currentImg === "1" ? classes["arrow1-animation"] : ""
                      }`}
                    />
                    <path
                      id="arrow2"
                      d="M7 9L18 16.7241L7 25"
                      strokeWidth="2"
                      className={`${classes.arrow2} ${
                        currentImg === "1" ? classes["arrow2-animation"] : ""
                      }`}
                    />
                    <path
                      id="arrow3"
                      d="M21 9L32 16.7241L21 25"
                      strokeWidth="2"
                      className={`${classes.arrow3} ${
                        currentImg === "1" ? classes["arrow3-animation"] : ""
                      }`}
                    />
                  </g>
                </g>
              </svg>
            </div>
          </Link>
        </div>
      </div>
      <div className={classes.project}>
        <div className={classes["img-container"]}>
          <img src={AlmostRecipes1} alt="The AlmostRecipes Homepage" />
          <div className={classes["banner"]}>
            <p>Page Under Construction</p>
          </div>
        </div>
        <div className={classes["project-info"]}>
          <h4>Personal Website</h4>
          <p
            className={classes["project-desc"]}
            style={{ paddingBottom: "18px" }}
          >
            This site! Everything here was brainstormed, designed, and coded by
            yours truly.
          </p>
          {/* <Link to="/projects/AlmostRecipes"> */}
          {/* <div className={classes["read-more"]}>
            <p>Read More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="34"
              viewBox="0 0 40 34"
              fill="none"
            >
              <g id="arrows">
                <g id="arrowgroup">
                  <path
                    id="arrow1"
                    d="M7 9L18 16.7241L7 25"
                    strokeWidth="2"
                    className={`${classes.arrow1} ${
                      currentImg === "1" ? classes.arrow1anim : ""
                    }`}
                  />
                  <path
                    id="arrow2"
                    d="M7 9L18 16.7241L7 25"
                    strokeWidth="2"
                    className={`${classes.arrow2} ${
                      currentImg === "1" ? classes.arrow2anim : ""
                    }`}
                  />
                  <path
                    id="arrow3"
                    d="M21 9L32 16.7241L21 25"
                    strokeWidth="2"
                    className={`${classes.arrow3} ${
                      currentImg === "1" ? classes.arrow3anim : ""
                    }`}
                  />
                </g>
              </g>
            </svg>
          </div> */}
          {/* </Link> */}
        </div>
      </div>
      <div className={classes.project}>
        <div className={classes["img-container"]}>
          <img src={AlmostRecipes1} alt="The AlmostRecipes Homepage" />
          <div className={classes["banner"]}>
            <p>Building Next!</p>
          </div>
        </div>
        <div className={classes["project-info"]}>
          <h4>Campfire</h4>
          <p
            className={classes["project-desc"]}
            style={{ paddingBottom: "18px" }}
          >
            A discussion site for podcasts - think youtube with a revolving
            comment section for different podcast discussion points.
          </p>
          {/* <Link to="/projects/AlmostRecipes"> */}
          {/* <div className={classes["read-more"]}>
            <p>Read More</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="34"
              viewBox="0 0 40 34"
              fill="none"
            >
              <g id="arrows">
                <g id="arrowgroup">
                  <path
                    id="arrow1"
                    d="M7 9L18 16.7241L7 25"
                    strokeWidth="2"
                    className={`${classes.arrow1} ${
                      currentImg === "1" ? classes.arrow1anim : ""
                    }`}
                  />
                  <path
                    id="arrow2"
                    d="M7 9L18 16.7241L7 25"
                    strokeWidth="2"
                    className={`${classes.arrow2} ${
                      currentImg === "1" ? classes.arrow2anim : ""
                    }`}
                  />
                  <path
                    id="arrow3"
                    d="M21 9L32 16.7241L21 25"
                    strokeWidth="2"
                    className={`${classes.arrow3} ${
                      currentImg === "1" ? classes.arrow3anim : ""
                    }`}
                  />
                </g>
              </g>
            </svg>
          </div> */}
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
