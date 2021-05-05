import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  // const state = {
  //   step: 1,
  //   name: "",
  //   email: "",
  //   phoneNumber: "",
  //   message: "",
  // };

  // //Proceed to next step
  // nextStep = () => {
  //   const { step } = this.state;
  //   this.setState({
  //     step: step + 1,
  //   });
  // };

  // //Go back to prev step
  // nextStep = () => {
  //   const { step } = this.state;
  //   this.setState({
  //     step: step - 1,
  //   });
  // };

  // //Handle fields change
  // handleChange = (input) => (e) => {
  //   this.setState({ [input]: e.target.value });
  // };

  return (
    <div>
      <h1 className="form-heading">COMING SOON</h1>
      <p className="form-para">
        Please feel free to contact me via email at{" "}
        <b className="contact-email">thip.keovilay@gmail.com</b>
      </p>
    </div>
  );
};

export default Form;
