import "../index.css";
import React, { Component } from "react"; //import React Component
import { Dashboard } from "./Pages/Dashboard/Dashboard.js";
import { DiscussionPage } from "./Pages/DiscussionPage/DiscussionPage.js";
import { HomePage } from "./Pages/HomePage/HomePage.js";
import { MessagePage } from "./Pages/MessagePage/MessagePage.js";
import { ProfilePage } from "./Pages/ProfilePage/ProfilePage.js";
import { NavigationBar } from "./Pages/Navigation/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginWithRouter } from "./Pages/AuthPage/Login.js";
import Footer from "./Pages/Footer.js";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isLogin: false };
  }

  toggleLoginState = (isLogin, user) => {
    this.setState({ isLogin });
    console.log("toggleLoginState is called: " + isLogin);
  };

  render() {
    return (
      <Router>
        {/* <UserProvider> */}
        <NavigationBar isLogin={this.state.isLogin} />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/DiscuissionPage" component={DiscussionPage} />
          <Route path="/MessagePage" component={MessagePage} />
          <Route path="/ProfilePage" component={ProfilePage} />
          <Route
            path="/Login"
            render={(props) => (
              <LoginWithRouter
                {...props}
                toggleLoginState={this.toggleLoginState}
              />
            )}
          />
        </Switch>
        <Footer />
        {/* </UserProvider> */}
      </Router>
    );
  }
}
