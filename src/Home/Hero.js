import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={classes["hero-container"]}>
      <div className={classes.squares}>
        <div className={`${classes.square} ${classes.green}`}></div>
        <div className={`${classes.square} ${classes.black}`}></div>
        <div className={`${classes.square} ${classes.brown}`}></div>
        <div className={`${classes.square} ${classes.cream}`}></div>
        <div className={`${classes.square} ${classes.grey}`}></div>
      </div>
      <h1>Hi, I'm Richard!</h1>
      <h3>
        I'm a self-taught frontend dev, studying psychology and neuroscience at
        UPenn
      </h3>
    </div>
  );
};

export default Hero;
