import '../index.css';
import React, { Component } from 'react'; //import React Component
import { Dashboard } from './Pages/Dashboard/Dashboard.js';
import { DiscussionPage } from './Pages/DiscussionPage/DiscussionPage.js';
import { HomePage } from './Pages/HomePage/HomePage.js';
import { MessagePage } from './Pages/MessagePage/MessagePage.js';
import { ProfilePage } from './Pages/ProfilePage/ProfilePage.js';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export class App extends Component {

  render() {
      return (
          <Router>
              <Switch>
                 <Route path="/" exact component={HomePage} />
                 <Route path="/Dashboard" component={Dashboard} />
                 <Route path="/DiscuissionPage" component={DiscussionPage} />
                 <Route path="/MessagePage" component={MessagePage} />
                 <Route path="/ProfilePage" component={ProfilePage} />
              </Switch>
          </Router>
     );
  }

}
