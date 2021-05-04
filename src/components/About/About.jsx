import React, { useState } from "react";
import "./About.css";
import Leaf from "../../assets/leaf.png";
import Code from "../../assets/code.png";
import Avatar from "../../assets/avatar.png";
import Pear from "../../assets/pear.png";

const About = () => {
  const [developerStatus, setDeveloperStatus] = useState("active");
  const [militaryStatus, setMilitaryStatus] = useState("");
  const [cnaStatus, setCnaStatus] = useState("");
  const [officeStatus, setOfficeStatus] = useState("");

  const developerClick = (event) => {
    setDeveloperStatus("active");
    setMilitaryStatus("");
    setCnaStatus("");
    setOfficeStatus("");
  };

  const militaryClick = (event) => {
    setDeveloperStatus("");
    setMilitaryStatus("active");
    setCnaStatus("");
    setOfficeStatus("");
  };

  const cnaClick = (event) => {
    setDeveloperStatus("");
    setMilitaryStatus("");
    setCnaStatus("active");
    setOfficeStatus("");
  };

  const officeClick = (event) => {
    setDeveloperStatus("");
    setMilitaryStatus("");
    setCnaStatus("");
    setOfficeStatus("active");
  };

  return (
    <div className="about-component">
      <div className="about-section-one">
        <div className="about-img">
          <img className="leaf" src={Leaf} alt="Leaf"></img>
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
        <img className="avatar" src={Avatar} alt="Avatar"></img>
        <p className="sign">=</p>
        <img className="pear" src={Pear} alt="Pear Symbol"></img>
      </div>
      <div className="about-section-three">
        <p className="symbol-text-one">CODING</p>
        <p className="symbol-text-two">ME</p>
        <p className="symbol-text-three">PERFECT PEAR</p>
      </div>
      <div className="about-section-four">
        <h1 className="skills">SKILLS.</h1>
        <div className="skills-chart-container">
          <ul className="skills-level">
            <li className="skill">
              <p className="level">Expert</p>
              <p className="level">Advanced</p>
              <p className="level">Intermediate</p>
              <p className="level">Novice</p>
            </li>
          </ul>
          <div className="skills-chart">
            <div className="bar-one">
              <div className="tea-percentage">101%</div>
              <div className="tea-drinking">Tea Drinking</div>
            </div>
            <div className="bar-two">
              <div className="front-end-percentage">75%</div>
              <div className="front-end">Front-End</div>
            </div>
            <div className="bar-three">
              <div className="design-percentage">93%</div>
              <div className="design">Design</div>
            </div>
            <div className="bar-four">
              <div className="back-end-percentage">59%</div>
              <div className="back-end">Back-End</div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section-five">
        <h1 className="experience">PROFESSIONAL EXPERIENCE.</h1>
        <div className="experience-container">
          <ul className="ex ex-tabs pro-ex-tabs" role="tablist">
            <li className="ex-item">
              <p
                className={`ex-link ${developerStatus}`}
                role="tab"
                onClick={() => developerClick()}
              >
                Web Developer
              </p>
            </li>
            <li className="ex-item">
              <p
                className={`ex-link ${militaryStatus}`}
                role="tab"
                onClick={() => militaryClick()}
              >
                Military
              </p>
            </li>
            <li className="ex-item">
              <p
                className={`ex-link ${cnaStatus}`}
                role="tab"
                onClick={() => cnaClick()}
              >
                Certified Nursing Assistant
              </p>
            </li>
            <li className="ex-item">
              <p
                className={`ex-link ${officeStatus}`}
                role="tab"
                onClick={() => officeClick()}
              >
                Office Asstistant/ Cashier
              </p>
            </li>
          </ul>
          <div className="ex-desc ex-desc-with-tabs">
            <div className="tab-content">
              <div className="tab-pane fade active show" role="tabpanel">
                {/* <p>
                  {() => {
                    switch (this.state.) {
                      case "developer":
                        return "hello";
                      case "military":
                        return "bye";
                      case "cna":
                        return "okay";
                      case "office":
                        return "sure";
                    }
                  }}
                </p> */}
                {/* <p
                  className={`ex-link ${developerStatus}`}
                  role="tab"
                  onClick={() => developerClick()}
                >
                  hello
                </p>
                <p
                  className={`ex-link ${militaryStatus}`}
                  role="tab"
                  onClick={() => militaryClick()}
                >
                  bye
                </p>
                <p
                  className={`ex-link ${cnaStatus}`}
                  role="tab"
                  onClick={() => cnaClick()}
                >
                  okay
                </p>
                <p
                  className={`ex-link ${officeStatus}`}
                  role="tab"
                  onClick={() => officeClick()}
                >
                  sure
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
