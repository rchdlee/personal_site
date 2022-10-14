import classes from "./Skillstack.module.css";

const Skillstack = () => {
  return (
    <div className={classes["skillstack-container"]}>
      <div className={classes["skills-and-courses"]}>
        <div className={classes["skills-container"]}>
          <h2>My Current Skillstack</h2>
          <ul className={classes.skills}>
            <li>HTML/CSS/CSS Modules</li>
            <li>Javascript (ES6)</li>
            <li>React (Redux, Hooks/Custom Hooks, React Router)</li>
            <li>Webpack</li>
            <li>Git/Github</li>
            <br />
            <li>Up next to learn: either Node.JS or </li>
          </ul>
        </div>
        <div className={classes["courses-container"]}>
          <h4>Courses that helped me get here:</h4>
          <ul className={classes.courses}>
            <li>CS50 @ Harvard</li>
            <li>Jonas Scmedtmann's HTML & CSS Udemy Course</li>
            <li>Jonas Schmedtmann's Javascript Udemy Course</li>
            <li>Maximilian Schwarzmüller’s React JS Udemy Course</li>
            <br />
            <li>...and of course, Google and Stack Overflow</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skillstack;
