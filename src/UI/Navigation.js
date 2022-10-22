import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { CSSTransition } from "react-transition-group";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import Resume from "../Helpers/Richard_Lee_Resume.pdf";

import {
  faBars,
  faXmark,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Navigation.module.css";

const Navigation = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const time = 50;

  useScrollPosition(({ prevPos, currPos }) => {
    setScrollPos(-currPos.y);
  });

  // const testfunc = () => {
  //   console.log(menuIsOpen);
  // };
  // testfunc();

  return (
    <div className={classes["navigation-container"]}>
      <div className={classes["menu-icon"]}>
        <CSSTransition
          in={menuIsOpen}
          timeout={0}
          classNames={{
            enter: classes["menu-enter"],
            enterActive: classes["menu-enter-active"],
            enterDone: classes["menu-enter-done"],
            exit: classes["menu-exit"],
            exitActive: classes["menu-exit-active"],
            exitDone: classes["menu-exit-done"],
          }}
        >
          <FontAwesomeIcon icon={faBars} onClick={() => setMenuIsOpen(true)} />
        </CSSTransition>
      </div>
      <div>
        <CSSTransition
          in={menuIsOpen}
          timeout={400}
          classNames={{
            enter: classes["overlay-enter"],
            enterActive: classes["overlay-enter-active"],
            enterDone: classes["overlay-enter-done"],
            exit: classes["overlay-exit"],
            exitActive: classes["overlay-exit-active"],
            exitDone: classes["overlay-exit-done"],
          }}
        >
          <div className={classes.menubox} style={{ top: scrollPos }}>
            <div className={classes["menu-items"]}>
              <CSSTransition
                in={menuIsOpen}
                timeout={time * 0}
                classNames={{
                  enter: classes["item-enter"],
                  enterActive: classes["item-enter-active"],
                  enterDone: classes["item-enter-done"],
                  exit: classes["item-exit"],
                  exitActive: classes["item-exit-active"],
                  exitDone: classes["item-exit-done"],
                }}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => setMenuIsOpen(false)}
                  style={{ color: "white", fontSize: "48" }}
                  className={classes["x-mark"]}
                />
              </CSSTransition>
              <CSSTransition
                in={menuIsOpen}
                timeout={time * 1}
                classNames={{
                  enter: classes["item-enter"],
                  enterActive: classes["item-enter-active"],
                  enterDone: classes["item-enter-done"],
                  exit: classes["item-exit"],
                  exitActive: classes["item-exit-active"],
                  exitDone: classes["item-exit-done"],
                }}
              >
                <HashLink
                  to="/home#"
                  smooth
                  className={`${classes["hash-link"]}`}
                  onClick={() => setMenuIsOpen(false)}
                >
                  Home
                </HashLink>
              </CSSTransition>
              <CSSTransition
                in={menuIsOpen}
                timeout={time * 2}
                classNames={{
                  enter: classes["item-enter"],
                  enterActive: classes["item-enter-active"],
                  enterDone: classes["item-enter-done"],
                  exit: classes["item-exit"],
                  exitActive: classes["item-exit-active"],
                  exitDone: classes["item-exit-done"],
                }}
              >
                <HashLink
                  to="/home#skills"
                  smooth
                  className={`${classes["hash-link"]}`}
                  onClick={() => setMenuIsOpen(false)}
                >
                  Skills
                </HashLink>
              </CSSTransition>
              <CSSTransition
                in={menuIsOpen}
                timeout={time * 3}
                classNames={{
                  enter: classes["item-enter"],
                  enterActive: classes["item-enter-active"],
                  enterDone: classes["item-enter-done"],
                  exit: classes["item-exit"],
                  exitActive: classes["item-exit-active"],
                  exitDone: classes["item-exit-done"],
                }}
              >
                <HashLink
                  to="/home#projects"
                  smooth
                  className={`${classes["hash-link"]}`}
                  onClick={() => setMenuIsOpen(false)}
                >
                  Projects
                </HashLink>
              </CSSTransition>
              <CSSTransition
                in={menuIsOpen}
                timeout={time * 4}
                classNames={{
                  enter: classes["item-enter"],
                  enterActive: classes["item-enter-active"],
                  enterDone: classes["item-enter-done"],
                  exit: classes["item-exit"],
                  exitActive: classes["item-exit-active"],
                  exitDone: classes["item-exit-done"],
                }}
              >
                <HashLink
                  to="/home#aboutme"
                  smooth
                  className={`${classes["hash-link"]}`}
                  onClick={() => setMenuIsOpen(false)}
                >
                  About Me
                </HashLink>
              </CSSTransition>
              <CSSTransition
                in={menuIsOpen}
                timeout={time * 5}
                classNames={{
                  enter: classes["item-enter"],
                  enterActive: classes["item-enter-active"],
                  enterDone: classes["item-enter-done"],
                  exit: classes["item-exit"],
                  exitActive: classes["item-exit-active"],
                  exitDone: classes["item-exit-done"],
                }}
              >
                <HashLink
                  to="/home#contact"
                  smooth
                  className={`${classes["hash-link"]}`}
                  onClick={() => setMenuIsOpen(false)}
                >
                  Contact
                </HashLink>
              </CSSTransition>
              <CSSTransition
                in={menuIsOpen}
                timeout={time * 6}
                classNames={{
                  enter: classes["item-enter"],
                  enterActive: classes["item-enter-active"],
                  enterDone: classes["item-enter-done"],
                  exit: classes["item-exit"],
                  exitActive: classes["item-exit-active"],
                  exitDone: classes["item-exit-done"],
                }}
              >
                <a
                  href={Resume}
                  target="_blank"
                  onClick={() => setMenuIsOpen(false)}
                >
                  <div className={classes["resume-button"]}>
                    <p>Resume</p>
                    <FontAwesomeIcon icon={faUpRightFromSquare} />
                  </div>
                </a>
              </CSSTransition>
              <CSSTransition
                in={menuIsOpen}
                timeout={time * 7}
                classNames={{
                  enter: classes["item-enter"],
                  enterActive: classes["item-enter-active"],
                  enterDone: classes["item-enter-done"],
                  exit: classes["item-exit"],
                  exitActive: classes["item-exit-active"],
                  exitDone: classes["item-exit-done"],
                }}
              >
                <a
                  href="https://www.linkedin.com/in/richardyubinlee/"
                  className={`${classes["icon"]}`}
                  onClick={() => setMenuIsOpen(false)}
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </CSSTransition>
              <CSSTransition
                in={menuIsOpen}
                timeout={time * 8}
                classNames={{
                  enter: classes["item-enter"],
                  enterActive: classes["item-enter-active"],
                  enterDone: classes["item-enter-done"],
                  exit: classes["item-exit"],
                  exitActive: classes["item-exit-active"],
                  exitDone: classes["item-exit-done"],
                }}
              >
                <a
                  onClick={() => setMenuIsOpen(false)}
                  className={`${classes["icon"]}`}
                  href="https://github.com/rchdlee"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </CSSTransition>
            </div>
          </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Navigation;
