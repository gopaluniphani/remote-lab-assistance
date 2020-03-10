import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { Provider } from "react-redux";
import store from "../store";
import { loadUser } from "../actions/auth";

import Register from "./accounts/Register";
import Login from "./accounts/Login";
import Navbar from "./layouts/Navbar";
import Alerts from "./layouts/Alerts";
import Profile from "./labs/Profile";

import PrivateRoute from "./common/PrivateRoute";
import Dashboard from "./labs/Dashboard";
import AddLab from "./labs/AddLab";

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
                <Route path="/profile" component={Profile} />
                <Route path="/addlab" component={AddLab} />
              </Switch>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
