import Leaf from "../Images/leaf.svg";
import Dash from "../Images/dash.svg";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <img src={Leaf} className={classes.leaf} />
      <p className={classes.message}>Designed and built with ❤</p>
      <p className={classes.name}>Richard Lee 2022</p>
      <img src={Dash} alt="leaf" className={classes.dash} />
    </div>
  );
};

export default Footer;
