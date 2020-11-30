import React, { Component } from 'react'; //import React Component
import { Content } from './Content';
import { Login } from './Login.js';

export class HomePage extends Component {
    render() {
        return (
            <section>
                <Login />
                <Content />
            </section>
        );
    }
}
