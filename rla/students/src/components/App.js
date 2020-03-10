import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

import PrivateRoute from "./common/PrivateRoute";
import Register from "./accounts/Register";
import Login from "./accounts/Login";
import Profile from "./accounts/Profile";

import Navbar from "./layouts/Navbar";
import Alerts from "./layouts/Alerts";

import Dashboard from "./labs/Dashboard";
import Labcycle from "./labs/Labcycle";

const alertOptions = {
  timeout: 3000,
  offset: "50px",
  position: "top center"
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Navbar />
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/" component={Dashboard} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/labcycle" component={Labcycle} />
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
