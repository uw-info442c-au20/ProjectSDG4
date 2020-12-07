import React, { Component } from "react"; //import React Component
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPlayer from "react-player";

export class Content extends Component {
  render() {
    return (
      <div id="root">
        <div className="Mission-wrapper">
          <div className="row">
            <div className="col-12 col-sm-auto col-md-auto col-lg-6 d-flex">
              <img
                src={`${process.env.PUBLIC_URL}/Mentorship.jpg`}
                alt="Introduction Picture"
                id="introductionPic"></img>
            </div>
            <div className="statement col-12 col-sm-auto col-md-auto col-lg-6 d-flex">
              <div className="row">
                <div className="MissionStatement row">
                  <h3>Our</h3>
                  <h3 className="highlight-text"> &nbsp; Mission</h3>
                </div>
                <div>
                  <p className="row Statement-text">
                    At MentorUp, we aim to ensure all students have adequate
                    resources to succeed in high school and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Feature-Wrapper">
          <div className="row">
            <div className="FeatureTitle row">
              <h3>Features</h3>
            </div>
            <div className="Feature-Item-Wrapper row">
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

        <div className="Intro-Video-Wrapper">
          <div className="row">
            <div className="Join-statement col-auto col-sm-auto col-md-6 col-lg-6">
              <h4>Join Our Community</h4>
            </div>
            <div className="Video-Wrapper col-auto col-sm-auto col-md-6 col-lg-6">
              <ReactPlayer
                className="Video"
                url="https://youtu.be/kvNyZLYb0lk"
                width={350}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
