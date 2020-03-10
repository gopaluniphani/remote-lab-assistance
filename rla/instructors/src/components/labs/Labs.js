import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLabs } from "../../actions/labs.js";
import { getLabCycles } from "../../actions/labcycles.js";
import { getStudents } from "../../actions/students.js";
import Labcycles from "./Labcycles.js";
import Students from "./Students.js";

class Labs extends Component {
  state = {
    labcycleModalShow: false,
    studentModalShow: false
  };

  setLabcycleModalShow(show) {
    this.setState({ labcycleModalShow: show });
  }

  setStudentModalShow(show) {
    this.setState({ studentModalShow: show });
  }

  loadLabcycles = e => {
    let id = e.target.id;
    let lab = this.props.labs.filter(lab => lab.id == id);
    this.props.getLabCycles(lab[0].labcycles);
    this.setLabcycleModalShow(true);
  };

  loadStudents = e => {
    let id = e.target.id;
    let lab = this.props.labs.filter(lab => lab.id == id);
    this.props.getStudents(lab[0].students);
    this.setStudentModalShow(true);
  };

  static propTypes = {
    instructor_loaded: PropTypes.bool.isRequired,
    instructor_id: PropTypes.number.isRequired,
    labs_loaded: PropTypes.bool.isRequired,
    labs: PropTypes.array.isRequired,
    getLabs: PropTypes.func.isRequired,
    getLabCycles: PropTypes.func.isRequired,
    lab_added: PropTypes.bool.isRequired
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.instructor_loaded !== prevProps.instructor_loaded &&
      this.props.instructor_loaded
    ) {
      this.props.getLabs(this.props.instructor_id);
    }
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <h2>Labs</h2>
            </div>
            <div className="col-sm-3">
              <Link to="/addlab" className="btn btn-primary btn-sm mt-1">
                Add Labs
              </Link>
            </div>
          </div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.labs.map(lab => (
                <tr key={lab.id}>
                  <td>{lab.code}</td>
                  <td>{lab.name}</td>
                  <td>
                    <button
                      id={lab.id}
                      className="btn btn-primary btn-sm"
                      onClick={this.loadStudents}
                    >
                      Students
                    </button>
                  </td>
                  <td>
                    <button
                      id={lab.id}
                      className="btn btn-primary btn-sm"
                      onClick={this.loadLabcycles}
                    >
                      Lab Cycles
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Labcycles
          show={this.state.labcycleModalShow}
          onHide={() => this.setLabcycleModalShow(false)}
        />

        <Students
          show={this.state.studentModalShow}
          onHide={() => this.setStudentModalShow(false)}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    labs_loaded: state.labs.isLoaded,
    labs: state.labs.labs,
    instructor_loaded: state.instructor.isLoaded,
    instructor_id: state.instructor.id,
    lab_added: state.addlab.lab_added
  };
};

export default connect(mapStateToProps, { getLabs, getLabCycles, getStudents })(
  Labs
);
