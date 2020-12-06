import React, { Component } from "react"; //import React Component
import ReactDOM from "react-dom";

let discussionTitle = React.createElement(
  "h1", //html tag
  {
    //object of attributes
    id: "bodyTitle",
    className: "discTitle",
  },
  "When you guys pick out a movie, what do you look for first?" //content
);

let discussionAuthor = React.createElement(
  "h2", //html tag
  {
    //object of attributes
    id: "bodyTitle",
    className: "discTitle",
  },
  "Adam Kaufman" //content
);

let discussionText = React.createElement(
  "p", //html tag
  {
    //object of attributes
    id: "bodyText",
    className: "discText",
  },
  "When you guys pick out a movie, what do you look for first?" //content
);

ReactDOM.render(discussionTitle, document.getElementById("root"));
ReactDOM.render(discussionAuthor, document.getElementById("root"));
ReactDOM.render(discussionText, document.getElementById("root"));

export class DiscussionBody extends Component {
  render() {
    return <section></section>;
  }
}
