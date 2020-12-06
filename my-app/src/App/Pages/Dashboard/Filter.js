import React, { Component } from "react"; //import React Component
import { FilterItem } from "./FilterItem.js";
import _ from "lodash";

export class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mentors: this.props.mentors,
    };
  }

  render() {
    let occupationsObj = _.groupBy(this.props.mentors, "occupation");
    let occupations = Object.keys(occupationsObj);

    let companiesObj = _.groupBy(this.props.mentors, "company");
    let companies = Object.keys(companiesObj);

    let interests = [];
    this.props.mentors.map((mentor) => {
      mentor.interests.map((interest) => {
        if (interests.indexOf(interest) === -1) {
          interests.push(interest);
        }
      });
    });

    return (
      <section>
        <form className="filters row">
          <FilterItem
            name="All Occupations"
            title="Occupation:"
            options={occupations}
            id="occupations"
            className="col-sm-4 col-md-6 col-xl-auto d-flex"
          />
          <FilterItem
            name="All Companies"
            title="Company:"
            options={companies}
            id="companies"
            className="col-sm-4 col-md-6 col-xl-auto d-flex"
          />
          <FilterItem
            name="All Interests"
            title="Interests:"
            options={interests}
            id="interests"
            className="col-sm-4 col-md-6 col-xl-auto d-flex"
          />
        </form>
      </section>
    );
  }
}
