import React, { Component } from "react"; //import React Component
import Button from "react-bootstrap/esm/Button";
//import logo from '.../logo.svg';

export class Content extends Component {
  render() {
    return (
      <div id="root">
        <div id="header-wrapper">
          <div id="header">
            <div class="row">
              <div id="logo" class="col-auto col-md-auto col-xl d-flex">
                <h1>Mentor Up</h1>
              </div>
              <div id="login" class="col-auto col-md-auto col-xl d-flex">
                <button>Log In</button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="MissionStatement row">
            <h2>Our Mission</h2>
          </div>
          <h3 className="row">
            At MentorUp, we aim to ensure all students have adequate resources
            for them to succeed in high school and beyond.
          </h3>
        </div>

        <div id="signUP">
          <h4>Join Our Community</h4>
        </div>
      </div>
    );
  }
}
