import React, { Component } from 'react'; //import React Component
import { FilterItem } from './FilterItem.js';
import _ from 'lodash';

export class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mentors: this.props.mentors
        }
    }

    render() {
        let occupationsObj = _.groupBy(this.props.mentors, 'occupation'); 
        let occupations = Object.keys(occupationsObj);

        let companiesObj = _.groupBy(this.props.mentors, 'company'); 
        let companies = Object.keys(companiesObj);

        return (
            <section>
                <form className='filters'>
                    <FilterItem name='Select Occupation' title='Occupations:' options={occupations} />
                    <FilterItem name='Select Company' title='Companies:' options={companies} />
                </form>
            </section>
        );
    }
}