import classes from "./Technologies.module.css";

const Technologies = () => {
  return (
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
  );
};

export default Technologies;
