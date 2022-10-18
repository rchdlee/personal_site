import classes from "./AppIntro.module.css";

const AppIntro = () => {
  return (
    <div className={classes["app-intro"]}>
      <p>
        I wanted my first big React project to be something that I could
        personally use - and as a broke college student, I always have leftover
        ingredients from grocery shopping and no idea how to use them.
        <br />
        <br />
        And that's when AlmostRecipes was born. I was already familiar with a{" "}
        <a href="https://spoonacular.com/food-api">recipe API</a> from when I
        was practicing Javascript, so this was the perfect project to make.
        <br />
        <br />
        And so I began... [maybe link to figma that says 'rough figma markups'
        handwritten]
      </p>
    </div>
  );
};

export default AppIntro;
