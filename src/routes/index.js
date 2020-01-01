import React, { PureComponent } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
// import NoMatch from "../pages/notfound";
import Login from "../pages/login";
import Home from "../pages/home";

export default class Routes extends PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/login" component={Login} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </Router>
    );
  }
}
