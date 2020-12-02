import React, { Component } from 'react'; //import React Component
import { SideNav } from '../Navigation/SideNav.js';
import { ProfileBody } from './ProfileBody.js';

export class ProfilePage extends Component {
    render() {
        return (
            <section>
                <SideNav />
            </section>
        );
    }
}
