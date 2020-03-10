import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { loadAvailableLabs } from "../../actions/availablelabs";
import { addLab } from "../../actions/addlab";
import { getLabs } from "../../actions/labs";

import CreateLab from "./CreateLab";

class AddLab extends Component {
  static propTypes = {
    labs_loaded: PropTypes.bool.isRequired,
    labs: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.loadAvailableLabs();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.lab_created !== prevProps.lab_created &&
      this.props.lab_created
    )
      this.props.loadAvailableLabs();
    if (this.props.lab_added !== prevProps.lab_added && this.props.lab_added) {
      this.props.getLabs(this.props.instructor_id);
    }
  }

  state = {
    showModal: false
  };

  setModalShow = show => {
    this.setState({ showModal: show });
  };

  createLab = e => {
    console.log("creating lab");
    this.setModalShow(true);
  };

  addLab = e => {
    this.props.addLab(this.props.instructor_id, e.target.id);
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-sm-10">
              <h2>Available Labs</h2>
            </div>
            <div className="col-sm-2">
              <button
                className="btn btn-primary btn-sm mt-1"
                onClick={this.createLab}
              >
                Create New Lab
              </button>
            </div>
          </div>
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
                      className="btn btn-primary btn-sm"
                      onClick={this.addLab}
                    >
                      Add Lab
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CreateLab
          show={this.state.showModal}
          onHide={() => this.setModalShow(false)}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    labs_loaded: state.availablelabs.isLoaded,
    labs: state.availablelabs.labs,
    lab_created: state.createlab.labCreated,
    instructor_id: state.instructor.id,
    lab_added: state.addlab.lab_added
  };
};

export default connect(mapStateToProps, { loadAvailableLabs, addLab, getLabs })(
  AddLab
);
