import React, { Component } from 'react'; //import React Component
import { Discussion } from './Discussion.js';
import { SideNav } from '../Navigation/SideNav.js';

export class DiscussionPage extends Component {
    render() {
        return (
            <section>
                <SideNav />
                <Discussion />
            </section>
        );
    }
}
