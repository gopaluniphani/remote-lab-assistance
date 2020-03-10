import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { getLabs } from "../../actions/labs";
import { getLabCycles } from "../../actions/labcycles";

import LabCycles from "./LabCycles";

class Labs extends Component {
  state = {
    modalShow: false
  };

  static propTypes = {
    student_loaded: PropTypes.bool.isRequired,
    student_id: PropTypes.number.isRequired,
    labs_loaded: PropTypes.bool.isRequired,
    activelablinks: PropTypes.array.isRequired,
    labs: PropTypes.array.isRequired,
    getLabs: PropTypes.func.isRequired,
    getLabCycles: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    if (this.props.student_loaded && !this.props.labs_loaded)
      this.props.getLabs(this.props.activelablinks);
  }

  setModalShow(show) {
    this.setState({ modalShow: show });
  }

  onClick = e => {
    let id = e.target.id;
    let lab = this.props.labs.filter(lab => lab.id == id);
    this.props.getLabCycles(lab[0].labcycles);
    this.setModalShow(true);
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <h2>Labs</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
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
                      onClick={this.onClick}
                      className="btn btn-primary"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <LabCycles
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    labs_loaded: state.labs.isLoaded,
    labs: state.labs.labs,
    labcycles_loaded: state.labcycles.isLoaded,
    student_loaded: state.students.isLoaded,
    student_id: state.students.id,
    activelablinks: state.students.activelablinks
  };
};

export default connect(mapStateToProps, { getLabs, getLabCycles })(Labs);
