import { HashLink } from "react-router-hash-link";

import classes from "./Navbar.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className={classes["navbar-container"]}>
      <div className={classes["navbar"]}>
        <HashLink to="/home#" smooth>
          Home
        </HashLink>
        <HashLink to="/home#projects" smooth>
          Projects
        </HashLink>
        <HashLink to="/home#aboutme" smooth>
          About Me
        </HashLink>
        <HashLink to="/home#contact" smooth>
          Contact
        </HashLink>
        <div className={classes["icon"]}>
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
        <div className={classes["icon"]}>
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className={classes["resume-button"]}>
          <p>Resume</p>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
