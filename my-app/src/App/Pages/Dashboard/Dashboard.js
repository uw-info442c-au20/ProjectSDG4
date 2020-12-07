import React, { Component } from "react"; //import React Component
import { Filter } from "./Filter.js";
import { MentorContent } from "./MentorContent.js";
import SAMPLE_MENTORS from "../../../mentors.json";

export class Dashboard extends Component {
  render() {
    return (
      <section className="Dashboard-content-wrapper">
        <Filter mentors={SAMPLE_MENTORS} />
        <MentorContent mentors={SAMPLE_MENTORS} />
      </section>
    );
  }
}
