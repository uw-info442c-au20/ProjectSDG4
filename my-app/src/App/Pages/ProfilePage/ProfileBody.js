import React, { Component } from "react"; //import React Component
import "bootstrap/dist/css/bootstrap.min.css";

export class ProfileBody extends Component {
  render() {
    return (
      <section className="profile-body">
        <div className="row">
          <div className="col profile-wrapper">
            <div className="profile-details">
              <img
                className="profile-img"
                src={`${process.env.PUBLIC_URL}/profile-pic.png`}
                alt="Alex Albon Profile Picture"
              />
              <div className="name-age-school">
                <h2>
                  <span>Alex</span> Albon
                </h2>
                <p>
                  {" "}
                  <b>Age:</b> 17
                </p>
                <p>
                  <b>High School:</b> Lakeside High School
                </p>
              </div>
            </div>
            <div className="interests">
              <h3 className="text-lg-left mb-4">Interests:</h3>
              <div align="center" className="Interest-Divs">
                <div>
                  <p className="interest-item">Soccer</p>
                </div>
              </div>
              <div align="center" className="Interest-Divs">
                <div>
                  <p className="interest-item">Dance</p>
                </div>
              </div>
              <div align="center" className="Interest-Divs">
                <div>
                  <p className="interest-item">Sports Management</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bio col">
            <div>
              <h3 className="text-lg-left">Bio:</h3>
            </div>
            <div>
              <p className="bio-content">
                Alex Albon is a member of the varsity soccer team, and is
                captain of the high school dance team. He has been a volunteer
                referee for Maytown's Youth Soccer League for four years. Alex
                would like to thank Coach Larsen who he found on MentorUp for
                helping him learn the importance of teamwork and humility. These
                skills will carry over into his future on and off the field.
                Alex plans to attend State University in the fall, on a full
                athletic scholarship. He is majoring in Sports Management, and
                his ultimate goal is to manage a team in the MLS. Following his
                good experience with MentorUp earlier, Alex is looking for
                someone who will guide him to achieve his goals and ambitions.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
