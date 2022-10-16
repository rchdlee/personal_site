import Arrows from "../../Images/Arrows";
import PantryMobile from "../../Images/pantry_screenshot_mobile.png";
import BookmarksMobile from "../../Images/bookmarks_screenshot_mobile.png";
import RecipeMobile from "../../Images/recipe_screenshot_mobile.png";

import classes from "./AlmostRecipesHero.module.css";

const AlmostRecipesHero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.description}>
        <h1>AlmostRecipes</h1>
        <div className={classes["small-description"]}>
          <p>Project Date: September 2022</p>
          <p>Duration: 2 weeks</p>
        </div>
        <div className={classes["arrow-links"]}>
          <div className={classes["arrow-link"]}>
            <h4>Live Site</h4>
            <Arrows />
          </div>
          <div className={classes["arrow-link"]}>
            <h4>Github Repo</h4>
            <Arrows />
          </div>
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
