import React, { Component } from "react"; //import React Component
import { MessageList } from "./MessageList.js";
import { MessageWindow } from "./MessageWindow.js";
// import { NavigationBar } from "../Navigation/Nav.js";

export class MessagePage extends Component {
  render() {
    return (
      <section>
        {/* <NavigationBar /> */}
        <MessageList />
        <MessageWindow />
      </section>
    );
  }
}
