import React, { Component } from "react"; //import React Component
import { Redirect } from "react-router-dom";

export class MentorListItem extends Component {
  state = {
    redirect: false,
  };

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  };

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/MessagePage" />;
    }
  };

  removeMentor(firstName, e) {
    let element = document.querySelector("." + firstName);
    element.classList.add("hide");
  }

  render() {
    let firstName = this.props.name.substring(0, this.props.name.indexOf(" "));

    return (
      <div className={"card " + firstName}>
        <div className="card-body mx-4 p-3">
          <div className="mentor-info row">
            <div className="img-container col">
              <h3 class="card-title">{this.props.name}</h3>
              <img
                className="mentor-img"
                src={this.props.image}
                alt={this.props.name}></img>
            </div>
            <div className="details-container col">
              <p className="age">Age: {this.props.age}</p>
              <p>Occupation: {this.props.occupation}</p>
              <p>Company: {this.props.company}</p>
              <p>Bio: {this.props.bio}</p>
              <p className="interests">Interests: {this.props.interests}</p>
            </div>
          </div>
          <div className="mentor-btn-container">
            {this.renderRedirect()}
            <button onClick={this.setRedirect} className="message-btn">
              Message {firstName}
            </button>
            <button
              onClick={(e) => this.removeMentor(firstName, e)}
              className="remove-btn">
              Remove {firstName} From Feed
            </button>
          </div>
        </div>
      </div>
    );
  }
}
