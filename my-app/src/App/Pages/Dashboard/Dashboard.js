import React, { Component } from 'react'; //import React Component
import { Filter } from './Filter.js';
import { MentorList } from './MentorList.js';
import { SideNav } from '../Navigation/SideNav.js';

export class Dashboard extends Component {
    render() {
        return (
            <section>
                <SideNav />
                <Filter />
                <MentorList />
            </section>
        );
    }
}
