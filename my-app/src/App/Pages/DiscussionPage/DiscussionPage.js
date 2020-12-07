import React, { Component } from "react"; //import React Component
import { Discussion } from "./Discussion.js";
import { NavigationBar } from "../Navigation/Nav.js";

export class DiscussionPage extends Component {
  render() {
    return (
      <section className="Discussion-Wrapper">
        <Discussion />
      </section>
    );
  }
}
