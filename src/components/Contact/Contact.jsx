import React from "react";
import "./Contact.css";
import { Link } from "react-router-dom";
import ATSResume from "../../assets/Keovilay_Thip_Resume.png";
import VResume from "../../assets/Keovilay_Thip_VResume.png";

const Contact = () => {
  const download = () => {
    let element = document.createElement("resume");
    let file = new Blob([{ VResume }], { type: "image/*" });
    element.href = URL.createObjectURL(file);
    element.download = "image.jpg";
    element.click();
  };

  return (
    <div className="contact">
      <h1 className="websites">WEBSITES</h1>
      <div className="linked-in-component">
        <p className="linked-in">Linked In:</p>
        <a href="https://www.linkedin.com/in/thipkeovilay/">
          https://www.linkedin.com/in/thipkeovilay/
        </a>
      </div>
      <div className="gitHub-component">
        <p className="gitHub">GitHub:</p>
        <a href="https://github.com/thipkeovilay">
          https://github.com/thipkeovilay
        </a>
      </div>
      <div className="resume-component">
        <div className="resume">
          <figure className="effect">
            <img className="resume-one" src={ATSResume} alt="ATS Resume"></img>
            <figcaption>
              <a
                className="resume-link"
                href={VResume}
                download
                onClick={() => download()}
              >
                <p className="download">DOWNLOAD</p>
                <p className="resume-text">ATS Resume</p>
              </a>
            </figcaption>
          </figure>
        </div>
        <div className="resume">
          <figure className="effect">
            <img className="resume-two" src={VResume} alt="Vanity Resume"></img>
            <figcaption>
              <a
                className="resume-link"
                href={VResume}
                download
                onClick={() => download()}
              >
                <p className="download">DOWNLOAD</p>
                <p className="resume-text">Vanity Resume</p>
              </a>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="send-button-component">
        <Link to="/form">
          <button className="send-button">SEND MESSAGE</button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
