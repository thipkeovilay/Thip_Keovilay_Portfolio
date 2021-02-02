import React from "react";
import "./Home.css";
import ProfileImage from "../../assets/profile.jpg";
import SeedSymbol from "../../assets/seedoflife.png";
import FlowerSymbol from "../../assets/floweroflife.png";

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile">
        <img className="seed-symbol" src={SeedSymbol}></img>
        <img className="flower-symbol" src={FlowerSymbol}></img>
        <img className="profile-image" src={ProfileImage}></img>
      </div>
      <div className="notepad">
        <div className="notepad-content">
          <h1 className="welcome">Welcome!</h1>
          <h2 className="name">Thip Keovilay here.</h2>
          <p className="home-para-one">
            I try to do what web developers do best -- <em>SOLVE PROBLEMS</em> !
          </p>
          <p className="home-para-one">
            I enjoy a good brain breaker but more so enjoy making a{" "}
            <em>DIFFERENCE</em>.{" "}
          </p>

          <p className="home-para-two-start">
            One good thing about a problem is having a thousand solutions.
          </p>
          <p className="home-para-two">
            My job is to find the best solution to that complex problem.
          </p>
          <p className="home-para-two">
            With a passion in creating things and helping others, I strive
          </p>
          <p className="home-para-two">
            to connect my creations to people’s solutions.
          </p>
          <p className="here-start">
            <b>
              <em className="here-end">Here</em>
            </b>{" "}
            to make a difference.
          </p>
          <p className="here">
            <b>
              <em className="here-end">Here</em>
            </b>{" "}
            to spark joy.{" "}
          </p>
          <p className="here">
            <b>
              <em className="here-end">Here</em>
            </b>{" "}
            to create an everlasting impact.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
