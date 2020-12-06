import React, { Component } from "react"; //import React Component
// import { NavigationBar } from "../Navigation/Nav.js";
import { ProfileBody } from "./ProfileBody.js";

export class ProfilePage extends Component {
    render() {
        return (
            <section>
                <SideNav />
                <ProfileBody />
            </section>
        );
    }
}
