import { useState } from "react";

import PantrySC from "../../Images/pantry_screenshot.png";
import BookmarksSC from "../../Images/bookmarks_screenshot.png";
import ShoppingListSC from "../../Images/shoppinglist_screenshot.png";

import classes from "./Overview.module.css";

const Overview = () => {
  const [currentView, setCurrentView] = useState("1");

  const clickHandler = (e) => {
    const clickedID = e.target.closest("div").id;
    setCurrentView(clickedID);
  };

  return (
    <div className={classes["app-overview"]}>
      <h4>App Overview</h4>
      <div className={classes["features-container"]}>
        <div className={classes.features}>
          <div
            id="1"
            onClick={clickHandler}
            className={`${classes["description"]} ${
              currentView === "1" ? classes["active-desc"] : ""
            }`}
          >
            <p>1</p>
            <p>
              Search for recipes based on the ingredients you currently have
            </p>
          </div>
          <div
            className={`${classes["description"]} ${
              currentView === "2" ? classes["active-desc"] : ""
            }`}
            id="2"
            onClick={clickHandler}
          >
            <p>2</p>
            <p>Add your favorite recipes to your bookmarks</p>
          </div>
          <div
            className={`${classes["description"]} ${
              currentView === "3" ? classes["active-desc"] : ""
            }`}
            id="3"
            onClick={clickHandler}
          >
            <p>3</p>
            <p>
              Curate a shopping list for any additional ingredients you need to
              cook!
            </p>
          </div>
        </div>
        <div className={classes["web-screenshot-container"]}>
          <img
            className={currentView === "1" ? classes["active-img"] : ""}
            src={PantrySC}
            alt=""
          />
          <img
            className={currentView === "2" ? classes["active-img"] : ""}
            src={BookmarksSC}
            alt=""
          />
          <img
            className={currentView === "3" ? classes["active-img"] : ""}
            src={ShoppingListSC}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
