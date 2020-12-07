import React, { Component } from "react"; //import React Component
import { MessageList } from "./MessageList.js";
import { MessageWindow } from "./MessageWindow.js";

export class MessagePage extends Component {
  render() {
    return (
      <div className="messagePage-container row">
        {/* <div className="col-4">
          <MessageList />
        </div> */}
        <div className="col">
          <MessageWindow />
        </div>
      </div>
    );
  }
}
