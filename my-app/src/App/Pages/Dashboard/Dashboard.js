import React, { Component } from 'react'; //import React Component
import { Filter } from './Filter.js';
import { MentorList } from './MentorList.js';
import { SideNav } from '../Navigation/SideNav.js';
import SAMPLE_MENTORS from '../../../mentors.json';

export class Dashboard extends Component {
    render() {
        return (
            <section>
                <SideNav />
                <Filter mentors={SAMPLE_MENTORS}/>
                <MentorList mentors={SAMPLE_MENTORS}/>
            </section>
        );
    }
}
