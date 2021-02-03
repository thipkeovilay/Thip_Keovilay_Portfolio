import React from "react";
import "./About.css";
import Leaf from "../../assets/leaf.png";
import Code from "../../assets/code.png";
import Avatar from "../../assets/avatar.png";
import Pear from "../../assets/pear.png";

const About = () => {
  return (
    <div className="about-component">
      <div className="about-section-one">
        <div className="about-img">
          <img className="leaf" src={Leaf} alt="Leaf Image"></img>
        </div>
        <div className="about-me">
          <h1 className="about">ABOUT ME.</h1>
          <p className="sub-heading">
            Recent Web Developer graduate from Wyncode Academy based in Miami,
            FL.
          </p>
          <p className="sub-heading-desc">
            Military Veteran with 8 years of proven experience in building
            exceptional relationships with keen skills, high level of
            initiative, attention to detail, and commitment to excellence and
            growth. Proven performance in linking corporate vision with the
            delivery of desired results through empowerment, development, and
            utilization of people, processes, and technology.
          </p>
        </div>
      </div>
      <div className="about-section-two">
        <img className="code" src={Code} alt="Code Symbol"></img>
        <p className="sign">+</p>
        <img className="avatar" src={Avatar} alt="Avatar Image"></img>
        <p className="sign">=</p>
        <img className="pear" src={Pear} alt="Pear Symbol"></img>
      </div>
      <div className="about-section-three">
        <p className="symbol-text-one">CODING</p>
        <p className="symbol-text-two">ME</p>
        <p className="symbol-text-three">PERFECT PEAR</p>
      </div>
    </div>
  );
};

export default About;
