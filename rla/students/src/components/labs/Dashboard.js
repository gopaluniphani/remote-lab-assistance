import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import { loadStudent } from "../../actions/students";

import Labs from "./Labs";

class Dashboard extends Component {
  componentDidMount() {
    this.props.loadStudent();
  }

  render() {
    return (
      <div className="container">
        <Labs />
      </div>
    );
  }
}

export default connect(null, { loadStudent })(Dashboard);