import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { CSSTransition } from "react-transition-group";

import classes from "./Navbar.module.css";

import Resume from "../Helpers/Richard_Lee_Resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faXmark,
  faUpRightFromSquare,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  const clickHandler = () => {
    setMenuIsOpen((prevState) => !prevState);
  };

  const menuCloseHandler = () => {
    setMenuIsOpen(false);
  };

  return (
    <div className={classes["navbar-container"]}>
      <div
        className={`${classes["overlay"]} ${
          !menuIsOpen ? classes["fade"] : ""
        }`}
      >
        <div className={`${classes["navbar"]}`}>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={menuCloseHandler}
            className={`${classes["x-mark"]} ${
              !menuIsOpen ? classes["animation"] : ""
            }`}
          />
          <HashLink
            to="/home#"
            smooth
            className={`${classes["hash-link"]} ${classes["animation"]}`}
          >
            Home
          </HashLink>
          <HashLink
            to="/home#skills"
            smooth
            className={`${classes["hash-link"]} ${classes["animation"]}`}
          >
            Skills
          </HashLink>
          <HashLink
            to="/home#projects"
            smooth
            className={`${classes["hash-link"]} ${classes["animation"]}`}
          >
            Projects
          </HashLink>
          <HashLink
            to="/home#aboutme"
            smooth
            className={`${classes["hash-link"]} ${classes["animation"]}`}
          >
            About Me
          </HashLink>
          <HashLink
            to="/home#contact"
            smooth
            className={`${classes["hash-link"]} ${classes["animation"]}`}
          >
            Contact
          </HashLink>
          <a href={Resume} target="_blank" className={classes["animation"]}>
            <div className={classes["resume-button"]}>
              <p>Resume</p>
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/richardyubinlee/"
            className={`${classes["icon"]} ${classes["animation"]}`}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            className={`${classes["icon"]} ${classes["animation"]}`}
            href="https://github.com/rchdlee"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
      <div className={classes["menu-icon"]} onClick={clickHandler}>
        <FontAwesomeIcon icon={menuIsOpen ? faXmark : faBars} />
      </div>
    </div>
  );
};

export default Navbar;
