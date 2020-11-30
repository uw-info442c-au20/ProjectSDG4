import React, { Component } from 'react'; //import React Component
import { MessageList } from './MessageList.js';
import { MessageWindow } from './MessageWindow.js';
import { SideNav } from '../Navigation/SideNav.js';

export class MessagePage extends Component {
    render() {
        return (
            <section>
                <SideNav />
                <MessageList />
                <MessageWindow />
            </section>
        );
    }
}
