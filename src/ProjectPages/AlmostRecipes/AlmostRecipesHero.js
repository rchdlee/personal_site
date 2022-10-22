import { useState } from "react";

import Arrows from "../../Images/Arrows";
import PantryMobile from "../../Images/pantry_screenshot_mobile.png";
import BookmarksMobile from "../../Images/bookmarks_screenshot_mobile.png";
import RecipeMobile from "../../Images/recipe_screenshot_mobile.png";

import classes from "./AlmostRecipesHero.module.css";

const AlmostRecipesHero = () => {
  const [arrowAnimation, setArrowAnimation] = useState(false);

  const mouseEnterHandler = () => {
    setArrowAnimation(true);
  };

  const mouseLeaveHandler = () => {
    setArrowAnimation(false);
  };

  return (
    <div className={classes.hero}>
      <div className={classes.description}>
        <h1>AlmostRecipes</h1>
        <div className={classes["small-description"]}>
          <p>Project Date: September 2022</p>
          <p>Duration: 2 weeks</p>
        </div>
        <div className={classes["arrow-links"]}>
          <a
            href="https://myrecipes-5a39a.web.app/search"
            target="_blank"
            className={classes["arrow-link"]}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <h4>Live Site</h4>
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
                      arrowAnimation ? classes.arrow1anim : ""
                    }`}
                  />
                  <path
                    id="arrow2"
                    d="M7 9L18 16.7241L7 25"
                    strokeWidth="2"
                    className={`${classes.arrow2} ${
                      arrowAnimation ? classes.arrow2anim : ""
                    }`}
                  />
                  <path
                    id="arrow3"
                    d="M21 9L32 16.7241L21 25"
                    strokeWidth="2"
                    className={`${classes.arrow3} ${
                      arrowAnimation ? classes.arrow3anim : ""
                    }`}
                  />
                </g>
              </g>
            </svg>
          </a>
          <a
            className={classes["arrow-link"]}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            href="https://github.com/rchdlee/almostrecipes"
            target="_blank"
          >
            <h4>Github Repo</h4>
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
                      arrowAnimation ? classes.arrow1anim : ""
                    }`}
                  />
                  <path
                    id="arrow2"
                    d="M7 9L18 16.7241L7 25"
                    strokeWidth="2"
                    className={`${classes.arrow2} ${
                      arrowAnimation ? classes.arrow2anim : ""
                    }`}
                  />
                  <path
                    id="arrow3"
                    d="M21 9L32 16.7241L21 25"
                    strokeWidth="2"
                    className={`${classes.arrow3} ${
                      arrowAnimation ? classes.arrow3anim : ""
                    }`}
                  />
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
      <div className={classes["screenshot-container"]}>
        <div className={classes["mobile-screenshots"]}>
          <img src={PantryMobile} alt="pantry" />
          <img className={classes.test} src={RecipeMobile} alt="pantry" />
          <img src={BookmarksMobile} alt="pantry" />
        </div>
      </div>
    </div>
  );
};

export default AlmostRecipesHero;
