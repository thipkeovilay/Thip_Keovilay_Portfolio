import React, { useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";
import EstateRev from "../../assets/EstateRev_project.png";
import FallFanSite from "../../assets/Fall_project.png";
import WillyWonkaGame from "../../assets/Willy_Wonka_project.png";
import HangmanGame from "../../assets/Hangman_project.png";
import Loading from "../../assets/loading.jpg";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-section-one">
        <div className="card-one">
          <figure className="effect">
            <img
              className="project-image"
              src={EstateRev}
              alt="Project Image"
            ></img>
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
        <div className="card-two">
          <figure className="effect">
            <img
              className="project-image"
              src={WillyWonkaGame}
              alt="Project Image"
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
        <div className="card-three">
          <figure className="effect">
            <img
              className="project-image"
              src={FallFanSite}
              alt="Project Image"
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
      </div>
      <div className="empty"></div>
      <div className="projects-section-two">
        <div className="card-one">
          <figure className="effect">
            <img
              className="project-image"
              src={HangmanGame}
              alt="Project Image"
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
        <div className="card-two">
          <figure className="effect">
            <img
              className="project-image"
              src={Loading}
              alt="Project Image"
            ></img>
            <figcaption>
              <div className="projects-loading">
                <p className="loading">Project Coming Soon!</p>
              </div>
            </figcaption>
          </figure>
          <p className="project-description">
            Want to know what it's like to talk to <em>me, myself </em>and{" "}
            <em>I</em>? Join in for this solo chatroom session.
          </p>
        </div>
        <div className="card-three">
          <figure className="effect">
            <img
              className="project-image"
              src={Loading}
              alt="Project Image"
            ></img>
            <figcaption>
              <div className="projects-loading">
                <p className="loading">Project Coming Soon!</p>
              </div>
            </figcaption>
          </figure>
          <p className="project-description">
            Non-profit charitable organization that connects kids and teaches
            philanthropy through gift giving.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
