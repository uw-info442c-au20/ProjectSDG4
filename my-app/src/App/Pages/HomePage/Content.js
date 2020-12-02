import React, { Component } from "react"; //import React Component
import "bootstrap/dist/css/bootstrap.min.css";

export class Content extends Component {
  render() {
    return (
      <div id="root">
        <div className="header-wrapper">
          <div className="row">
            <div className="col-sm-10 col-md-10 col-xl-10 d-flex">
              <img
                src={`${process.env.PUBLIC_URL}/mentorLogo.jpg`}
                alt="logo"
                id="logo"></img>
            </div>
            <div
              id="login"
              className="col-sm-2 col-md-2 col-xl-2 d-flex ml-auto">
              <button>Log In</button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="MissionStatement row">
              <h2>Our Mission</h2>
            </div>
            <h3 className="row">
              At MentorUp, we aim to ensure all students have adequate resources
              for them to succeed in high school and beyond.
            </h3>
          </div>
          <div className="col">
            <img
              src={`${process.env.PUBLIC_URL}/Mentorship.jpg`}
              alt="people"
              id="people"></img>
          </div>
        </div>

        <div id="signUP">
          <h4>Join Our Community</h4>
        </div>
      </div>
    );
  }
}
