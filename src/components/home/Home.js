import React, { useEffect, useState } from "react";
import "./Home.scss";
import AnimatedLetters from "../animatedLetters/AnimatedLetters";
import LogoTitle from "../../assets/images/logo-s.png";
import { Link } from "react-router-dom";
import { Animate } from "react-simple-animate";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const nameArray = ["e", "a", "n", ","];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home">
      <div className="home_container">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Logo Title" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              index={20}
            />
          </h1>
          <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: "translateX(2000px)" }}
          end={{ transform: "translateX(0px)" }}
        ><h2>Frontend Dev / Fullstack Dev /</h2>
        </Animate>
          
        </div>
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{ transform: "translateY(550px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <div className="contact-button">
            <Link to="/contact" className="flat-button">
              Hire Me
            </Link>
          </div>
          <div className="socials">
            <a
              target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sean-thomson97/"
            >
              <FaLinkedin size={30} color="var(--yellow-theme-main-color)" />
            </a>
            <a
              target="_blank" rel="noreferrer" href="https://github.com/seano1608"
            >
              <FaGithub size={30} color="var(--yellow-theme-main-color)" />
            </a>
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default Home;
