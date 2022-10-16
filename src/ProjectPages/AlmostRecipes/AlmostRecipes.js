import classes from "./AlmostRecipes.module.css";
import AlmostRecipesHero from "./AlmostRecipesHero";
import AppIntro from "./AppIntro";
import CoolFeatures from "./CoolFeatures";
import Overview from "./Overview";
import Technologies from "./Technologies";

const AlmostRecipes = () => {
  return (
    <div>
      <AlmostRecipesHero />
      <AppIntro />
      <Overview />
      <Technologies />
      <CoolFeatures />
    </div>
  );
};

export default AlmostRecipes;
