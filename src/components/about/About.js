import React from "react";
import Header from "../header/Header";
import { BsInfoCircleFill } from "react-icons/bs";
import "./About.scss";
import { Animate } from "react-simple-animate";
import { FaNodeJs, FaReact, FaCss3, FaGithub } from "react-icons/fa";
import {Loader} from 'react-loaders'

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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in
              </p>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum
              </p>
              <p>
                the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
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
      <Loader type="pacman"/>
    </>
  );
};

export default About;
