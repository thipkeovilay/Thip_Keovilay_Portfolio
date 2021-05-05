import React, { useState } from "react";
import "./Projects.css";
import EstateRev from "../../assets/EstateRev_project.png";
import FallFanSite from "../../assets/Fall_project.png";
import WillyWonkaGame from "../../assets/Willy_Wonka_project.png";
import HangmanGame from "../../assets/Hangman_project.png";
import KPU from "../../assets/KPU_project.png";
import Loading from "../../assets/loading.jpg";
import LeftArrow from "../../assets/left-arrow.png";
import RightArrow from "../../assets/right-arrow.png";

const Projects = () => {
  const [number, setNumber] = useState(2);

  const handleClick = () => {
    setNumber((num) => num + 1);
  };

  const handleMinusClick = () => {
    if (number - 2 < 0) return;
    setNumber((num) => {
      return num - 1;
    });
  };

  return (
    <div className="projects">
      <div className="arrow-container">
        <button className="arrow-button">
          <img
            className="arrow"
            src={LeftArrow}
            alt="Left Arrow"
            onClick={handleMinusClick}
          ></img>
        </button>
      </div>
      <div className="projects-section-one">
        {/* <button className="arrow-button">
          <img
            className="arrow"
            src={LeftArrow}
            alt="Left Arrow"
            onClick={handleMinusClick}
          ></img>
        </button> */}
        <div className="card-one">
          <figure className="effect">
            <img className="project-image" src={EstateRev} alt="Project"></img>
            <figcaption>
              <div className="projects-button-one">
                <a href="https://estaterev.herokuapp.com/">
                  <button className="live-project">LIVE PROJECT</button>
                </a>
              </div>
              <div className="projects-button-two">
                <a href="https://github.com/thipkeovilay/EstateRev">
                  <button className="source-code">SOURCE CODE</button>
                </a>
              </div>
            </figcaption>
          </figure>
          <p className="project-description">
            A real estate website mixed with a community hub and aftercare
            services.
          </p>
        </div>
        <div className="card">
          <figure className="effect">
            <img
              className="project-image"
              src={WillyWonkaGame}
              alt="Project"
            ></img>
            <figcaption>
              <div className="projects-button-one">
                <a href="https://midterm3.herokuapp.com/">
                  <button className="live-project">LIVE PROJECT</button>
                </a>
              </div>
              <div className="projects-button-two">
                <a href="https://github.com/thipkeovilay/Willy_Wonka_Shape_Factory">
                  <button className="source-code">SOURCE CODE</button>
                </a>
              </div>
            </figcaption>
          </figure>
          <p className="project-description">
            A unique web-based game for toddlers to learn their shapes and
            colors through the use of technology.
          </p>
        </div>
        <div className="card">
          <figure className="effect">
            <img
              className="project-image"
              src={FallFanSite}
              alt="Project"
            ></img>
            <figcaption>
              <div className="projects-button-one">
                <a href="https://thipkeovilay.github.io/">
                  <button className="live-project">LIVE PROJECT</button>
                </a>
              </div>
              <div className="projects-button-two">
                <a href="https://github.com/thipkeovilay/Fall_Fansite">
                  <button className="source-code">SOURCE CODE</button>
                </a>
              </div>
            </figcaption>
          </figure>
          <p className="project-description">
            A website to showcase what Fall season is all about. Included with
            some fun tips and interesting facts.
          </p>
        </div>

        {/* <div className="empty"></div> */}
        {/* <div className="projects-section-two"> */}
        <div className="card">
          <figure className="effect">
            <img
              className="project-image"
              src={HangmanGame}
              alt="Project"
            ></img>
            <figcaption>
              <div className="projects-button-two-hangman">
                <a href="https://github.com/thipkeovilay/Hangman-Game">
                  <button className="source-code">SOURCE CODE</button>
                </a>
              </div>
            </figcaption>
          </figure>
          <p className="project-description">
            A terminal based game where users can have some fun playing a game
            of Hangman.
          </p>
        </div>
        <div className="card">
          <figure className="effect">
            <img className="project-image" src={KPU} alt="Project"></img>
            <figcaption>
              <div className="projects-loading">
                <a href="https://kidpowerunites-778fd.web.app/">
                  <p className="loading">Project Coming Soon!</p>
                  <p className="loading-two">Click for current version</p>
                </a>
              </div>
            </figcaption>
          </figure>
          <p className="project-description">
            Non-profit charitable organization that connects kids and teaches
            philanthropy through gift giving.
          </p>
        </div>
        <div className="card">
          <figure className="effect">
            <img className="project-image" src={Loading} alt="Project"></img>
            <figcaption>
              <div className="projects-loading">
                <p className="loading-soon">Project Coming Soon!</p>
              </div>
            </figcaption>
          </figure>
          <p className="project-description">
            Want to know what it's like to talk to me, myself and I? Join in for
            this solo chatroom session.
          </p>
        </div>
        {/* </div> */}
        {/* <button className="arrow-button">
          <img
            className="arrow"
            src={RightArrow}
            alt="Right Arrow"
            onClick={handleClick}
          ></img>
        </button> */}
      </div>
      <div className="arrow-container">
        <button className="arrow-button-right">
          <img
            className="arrow"
            src={RightArrow}
            alt="Right Arrow"
            onClick={handleClick}
          ></img>
        </button>
      </div>
    </div>
  );
};

export default Projects;
