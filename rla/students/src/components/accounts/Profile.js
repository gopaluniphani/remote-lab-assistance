import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateProfile } from "../../actions/students";

class Profile extends Component {
  static propTypes = {
    student_id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    section: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    updateProfile: PropTypes.func.isRequired
  };

  state = {
    student_id: this.props.student_id,
    first_name: this.props.first_name,
    last_name: this.props.last_name,
    department: this.props.department,
    section: this.props.section,
    year: this.props.year
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.updateProfile(this.state);
  };

  render() {
    const { first_name, last_name, department, section, year } = this.state;
    return (
      <Fragment>
        <div className="col-lg-6 m-auto mt-10">
          <form onSubmit={this.onSubmit}>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    onChange={this.onChange}
                    value={first_name}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    onChange={this.onChange}
                    value={last_name}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Department</label>
                  <input
                    type="text"
                    className="form-control"
                    name="department"
                    onChange={this.onChange}
                    value={department}
                  />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label>Section</label>
                  <input
                    type="text"
                    className="form-control"
                    name="section"
                    onChange={this.onChange}
                    value={section}
                  />
                </div>
              </div>
              <div className="col-sm-3">
                <div className="form-group">
                  <label>Year of Study</label>
                  <input
                    type="text"
                    className="form-control"
                    name="year"
                    onChange={this.onChange}
                    value={year}
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

const mapStatetoProps = state => {
  return {
    student_id: state.students.id,
    first_name: state.students.first_name,
    last_name: state.students.last_name,
    department: state.students.department,
    section: state.students.section,
    year: state.students.year
  };
};

export default connect(mapStatetoProps, { updateProfile })(Profile);
