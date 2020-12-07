import React, { Component } from "react"; //import React Component

export class MessageWindow extends Component {
  render() {
    return (
      <section>
        <div className="chat">
          <div className="chat-header clearfix">
            <img
              src={`${process.env.PUBLIC_URL}/ava1.png`}
              alt="avatar"
              id="ContractPic"></img>
            <div className="chat-about">
              <div className="chat-with">Chat with Nick Selig</div>
              <div className="chat-count">already 45 messages</div>
            </div>
            <i className="fa fa-star"></i>
          </div>
          <div className="chat-history">
            <div>
              <div class="clearfix">
                <div class="message-data align-right">
                  <span class="message-data-time">10:10 AM, Today</span> &nbsp;
                  &nbsp;
                  <span class="message-data-name">Alex</span>{" "}
                  <i class="fa fa-circle me"></i>
                </div>
                <div class="message other-message float-right">
                  Hi Nick, Nice to meet you! This is Alex Albon!
                </div>
              </div>
              <div>
                <div class="message-data">
                  <span class="message-data-name">
                    <i class="fa fa-circle ondivne"></i> Nick
                  </span>
                  <span class="message-data-time">10:12 AM, Today</span>
                </div>
                <div class="message my-message">
                  Hi Alex! How can I help you? How about we start by having a
                  short introduction?
                </div>
              </div>
              <div class="clearfix">
                <div class="message-data align-right">
                  <span class="message-data-time">10:14 AM, Today</span> &nbsp;
                  &nbsp;
                  <span class="message-data-name">Alex</span>{" "}
                  <i class="fa fa-circle me"></i>
                </div>
                <div class="message other-message float-right">
                  Sure! I am Alex Albon. I come from Seattle, and currently a
                  high school student. I divke to play soccor!
                </div>
              </div>
            </div>
          </div>
          <div class="chat-message clearfix">
            <textarea
              name="message-to-send"
              id="message-to-send"
              placeholder="Type your message"
              rows="3"></textarea>
            <i class="fa fa-file-o"></i> &nbsp;&nbsp;&nbsp;
            <i class="fa fa-file-image-o"></i>
            <button className="send-button">Send</button>
          </div>
        </div>
      </section>
    );
  }
}
