import React, { Component } from "react"; //import React Component
import "bootstrap/dist/css/bootstrap.min.css";

export class Content extends Component {
  render() {
    return (
      <div id="root">
        {/* <div className="Header-Wrapper">
          <div className="row">
            <div className="col-sm-8 col-md-8 col-xl-8 d-flex logo-Wrapper">
              <img
                src={`${process.env.PUBLIC_URL}/mentorLogo.jpg`}
                alt="logo"
                id="logo"></img>
            </div>
            <div
              id="login"
              className="col-sm-2 col-md-2 col-xl-2 d-flex ml-auto login-wrapper">
              <button onClick={() => this.ActivateLogIn}>Log In</button>
            </div>
          </div>
        </div> */}

        <div className="Mission-wrapper">
          <div className="row">
            <div className="col">
              <img
                src={`${process.env.PUBLIC_URL}/Mentorship.jpg`}
                alt="Introduction Picture"
                id="introductionPic"></img>
            </div>
            <div className="col statement">
              <div className="MissionStatement row">
                <h3>Our</h3>
                <h3 className="highlight-text"> &nbsp; Mission</h3>
              </div>
              <p className="row Statement-text">
                At MentorUp, we aim to ensure all students have adequate
                resources to succeed in high school and beyond.
              </p>
            </div>
          </div>
        </div>

        <div className="Feature-Wrapper">
          <div className="row">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
            <div className="wave wave-4"></div>
            <div className="FeatureTitle row">
              <h3>Features</h3>
            </div>
            <div className="row">
              <div className="feature-1 col-sm-4 col-md-4 col-xl-4 d-flex justify-content-center">
                <div className="row">
                  <div className="FeaturePic-Wrapper">
                    <img
                      src={`${process.env.PUBLIC_URL}/Feature1.png`}
                      alt="Illustration of Mentor Match"
                      id="Feature1Pic"></img>
                  </div>
                  <p className="Feature-Desc">
                    Our Mentor match up feature can help you find the perfect
                    mentor who share similar identity with you.
                  </p>
                </div>
              </div>
              <div className="feature-2 col-sm-4 col-md-4 col-xl-4 d-flex">
                <div className="row">
                  <div className="FeaturePic-Wrapper">
                    <img
                      src={`${process.env.PUBLIC_URL}/Feature2.png`}
                      alt="Illustration of online chat"
                      id="Feature2Pic"></img>
                  </div>
                  <p className="Feature-Desc">
                    Our online live message feature allows you to directly
                    message the mentor who you interested in talking with.{" "}
                  </p>
                </div>
              </div>
              <div className="feature-3 col-sm-4 col-md-4 col-xl-4 d-flex">
                <div className="row">
                  <div className="FeaturePic-Wrapper">
                    <img
                      src={`${process.env.PUBLIC_URL}/Feature3.png`}
                      alt="Illustration of online discussion"
                      id="Feature3Pic"></img>
                  </div>
                  <p className="Feature-Desc">
                    We have a community discussion page, where you can find high
                    school student just like you and make friends with them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Signup-Wrapper">
          <div>
            <h4>Join Our Community</h4>
          </div>
        </div>
      </div>
    );
  }
}
