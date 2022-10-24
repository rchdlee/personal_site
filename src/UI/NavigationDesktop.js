import { HashLink } from "react-router-hash-link";

import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Resume from "../Helpers/Richard_Lee_Resume.pdf";
import classes from "./NavigationDesktop.module.css";

const NavigationDesktop = () => {
  return (
    <div className={classes["navigation-container"]}>
      <div className={classes["navigation"]}>
        <HashLink to="/home#" smooth className={`${classes["hash-link"]}`}>
          Home
        </HashLink>
        <HashLink
          to="/home#skills"
          smooth
          className={`${classes["hash-link"]}`}
        >
          Skills
        </HashLink>
        <HashLink
          to="/home#projects"
          smooth
          className={`${classes["hash-link"]}`}
        >
          Projects
        </HashLink>
        <HashLink
          to="/home#aboutme"
          smooth
          className={`${classes["hash-link"]}`}
        >
          About Me
        </HashLink>
        <HashLink
          to="/home#contact"
          smooth
          className={`${classes["hash-link"]}`}
        >
          Contact
        </HashLink>

        <a
          href="https://www.linkedin.com/in/richardyubinlee/"
          className={`${classes["icon"]}`}
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>

        <a
          className={`${classes["icon"]}`}
          href="https://github.com/rchdlee"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href={Resume} target="_blank">
          <div className={classes["resume-button"]}>
            <p>Resume</p>
            <FontAwesomeIcon icon={faUpRightFromSquare} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default NavigationDesktop;
