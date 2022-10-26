import { useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// import classes from "./AlmostRecipes.module.css";
import AlmostRecipesHero from "./AlmostRecipesHero";
import AppIntro from "./AppIntro";
import CoolFeatures from "./CoolFeatures";
import Overview from "./Overview";
import Technologies from "./Technologies";

const AlmostRecipes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AlmostRecipesHero />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontSize: "32px",
          marginTop: "148px",
        }}
      >
        <FontAwesomeIcon icon={faAngleDown} style={{}} />
      </div>
      <AppIntro />
      <Overview />
      <Technologies />
      <CoolFeatures />
    </div>
  );
};

export default AlmostRecipes;
