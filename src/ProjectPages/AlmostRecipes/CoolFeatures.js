import Feature1 from "../../Images/feature1.gif";
import Feature2 from "../../Images/feature2.gif";
import Feature3 from "../../Images/feature3.gif";

import classes from "./CoolFeatures.module.css";

const CoolFeatures = () => {
  return (
    <div className={classes["cool-features-container"]}>
      <h2>Some cool features that I built!</h2>
      <div className={classes["cool-feature"]}>
        <div className={classes["cool-feature-title"]}>
          <p>1. Dynamic URL</p>
        </div>
        <div className={classes["cool-feature-container"]}>
          <div className={classes["cool-feature-desc"]}>
            <p>
              When you click the button to search for recipes, the search query
              in the URL changes so that you can share your search result page
              with others!
            </p>
            <p>
              ...and to also allow easy access back to the search page after
              visiting a recipe page!
            </p>
          </div>
          <div className={classes["feature-image"]}>
            <img src={Feature1} alt="" />
          </div>
        </div>
      </div>
      <div className={classes["cool-feature"]}>
        <div className={classes["cool-feature-title"]}>
          <p>2. Pre-selected Missing Ingredients</p>
        </div>
        <div className={classes["cool-feature-container"]}>
          <div className={classes["cool-feature-desc"]}>
            <p>
              When a user visits a recipe's page after searching, the recipe's
              missing ingredients are preselected to easily allow the user to
              add them to their shopping list...
            </p>
            <p>
              ...but if a user goes directly to a recipe's page (by pasting the
              recipe's link in browser), then no ingredients will be
              pre-selected!
            </p>
          </div>
          <div className={classes["feature-image"]}>
            <img src={Feature2} alt="" width="320px" />
          </div>
        </div>
      </div>
      <div className={classes["cool-feature"]}>
        <div className={classes["cool-feature-title"]}>
          <p>3. Localstorage Data Retrieval</p>
        </div>
        <div className={classes["cool-feature-container"]}>
          <div className={classes["cool-feature-desc"]}>
            <p>
              Bookmarks and shopping list ingredients are saved in localstorage
              (and redux store) - which means they are preserved between page
              reloads and visits!
            </p>
          </div>
          <div className={classes["feature-image"]}>
            <img src={Feature3} alt="" width="320px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoolFeatures;
