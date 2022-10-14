import Arrows from "../Images/Arrows";
import PantryMobile from "../Images/pantry_screenshot_mobile.png";
import BookmarksMobile from "../Images/bookmarks_screenshot_mobile.png";
import RecipeMobile from "../Images/recipe_screenshot_mobile.png";

import PantrySC from "../Images/pantry_screenshot.png";
import BookmarksSC from "../Images/bookmarks_screenshot.png";
import ShoppingListSC from "../Images/shoppinglist_screenshot.png";

import classes from "./AlmostRecipes.module.css";

const AlmostRecipes = () => {
  return (
    <div>
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
      <div className={classes["app-intro"]}>
        <p>
          I wanted my first big React project to be something that I could
          personally use - and as a broke college student, I always have
          leftover ingredients from grocery shopping and no idea how to use
          them.
          <br />
          <br />
          And that's when AlmostRecipes was born. I was already familiar with a{" "}
          <a href="https://spoonacular.com/food-api">recipe API</a> from when I
          was practicing Javascript, so this was the perfect project to make.
          <br />
          <br />
          And so I began...
        </p>
      </div>
      <div className={classes["app-overview"]}>
        <h4>App Overview</h4>
        <div className={classes["features-container"]}>
          <div className={classes.features}>
            <div className={classes.activedesc}>
              <p>
                1. Search for recipes based on the ingredients you currently
                have
              </p>
            </div>
            <div>
              <p>2. Add your favorite recipes to your bookmarks</p>
            </div>
            <div>
              <p>
                3. Curate a shopping list from any additional ingredients you
                need to cook your recipes!
              </p>
            </div>
          </div>
          {/* <div className={classes.tsratsra}> */}
          <div className={classes["web-screenshot-container"]}>
            <img className={classes.active} src={PantrySC} alt="" />
            <img src={BookmarksSC} alt="" />
            <img src={ShoppingListSC} alt="" />
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className={classes.technologies}>
        <h3>Technologies I used</h3>
        <ul>
          <li>HTML/CSS</li>
          <li>React JS</li>
          <li>Hooks</li>
          <li>Redux</li>
          <li>React Router</li>
          <li>Firebase (for deployment)</li>
        </ul>
      </div>
      <div className={classes["cool-features-container"]}>
        <h2>Features that I kinda broke my back making and want to share</h2>
        <div className={classes["cool-feature"]}>
          <div>
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
          <div>
            <div>1.</div>
            <img src={PantrySC} alt="" width="300px" />
          </div>
        </div>
        <div className={classes["cool-feature"]}>
          <div>
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
          <div>
            <div>2.</div>

            <img src={PantrySC} alt="" width="300px" />
          </div>
        </div>
        <div className={classes["cool-feature"]}>
          <div>
            <p>
              Bookmarks and shopping list ingredients are saved in localstorage
              - which means they are preserved between page reloads and visits!
            </p>
          </div>
          <div>
            <div>3.</div>

            <img src={PantrySC} alt="" width="300px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlmostRecipes;
