import React from "react";
import Header from "../header/Header";
import { BsInfoCircleFill } from "react-icons/bs";
import "./About.scss";
import { Animate } from "react-simple-animate";
import { FaNodeJs, FaReact, FaCss3, FaGithub } from "react-icons/fa";
import { Loader } from "react-loaders";

const personalDetails = [
  {
    label: "Name",
    value: "Sean Thomson",
  },
  {
    label: "Age",
    value: "24",
  },
  {
    label: "Address",
    value: "South Africa",
  },
  {
    label: "Email",
    value: "sean@gmail.com",
  },
  {
    label: "Number",
    value: "+27",
  },
];

const About = () => {
  return (
    <>
      <div className="about">
        <Header headerText="About" icon={<BsInfoCircleFill size={40} />} />
        <div className="about_container">
          <div className="about_container_left">
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{ transform: "translateX(-1500px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <h2>Frontend Developer</h2>
              <p>
                I'm a student of the tech world, always eager to be on the front
                lines of emerging technologies. I enjoy constantly upskilling
                and challenging myself to do and know more. I take pride in my
                work and therefore always want to be in-line with industry
                trends and standards.
              </p>
              <p>
                But more importantly, I enjoy working with people. I believe
                that the more technological society becomes, the greater the
                need for human connection and understanding. I strive to bridge
                that gap in order to improve people's globally and share
                whatever knowledge I have along the way.
              </p>
              <p>
                Excited for what is, and consistently looking forward for what
                is to come. I hope to see you along the way!
              </p>
            </Animate>

            <Animate
              play
              duration={1.5}
              delay={1}
              start={{ transform: "translateY(1200px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <h2 className="personal_info">Personal Information</h2>
              <ul>
                {personalDetails.map((item, key) => (
                  <li key={key}>
                    <span className="title">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))}
              </ul>
            </Animate>
          </div>
          <div className="about_container_right">
            <Animate
              play
              duration={1.5}
              delay={1}
              start={{ transform: "translateX(1200px)" }}
              end={{ transform: "translateX(0px)" }}
            >
              <div className="about_container_right_main_circle">
                <div>
                  <FaReact size={60} color="var(--yellow-theme-main-color)" />
                </div>
                <div>
                  <FaNodeJs size={60} color="var(--yellow-theme-main-color)" />
                </div>
                <div>
                  <FaCss3 size={60} color="var(--yellow-theme-main-color)" />
                </div>
                <div>
                  <FaGithub size={60} color="var(--yellow-theme-main-color)" />
                </div>
              </div>
            </Animate>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
