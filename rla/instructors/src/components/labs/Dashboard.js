import React, { Component, Fragment } from "react";
import { HashRouter as Router, Route, Switch, Link } from "react-router-dom";
import { connect } from "react-redux";

import { loadInstructor } from "../../actions/instructor";

import Labs from "./Labs";

class Dashboard extends Component {
  componentDidMount() {
    this.props.loadInstructor();
  }

  render() {
    return (
      <div className="container">
        <Labs />
      </div>
    );
  }
}

export default connect(null, { loadInstructor })(Dashboard);
