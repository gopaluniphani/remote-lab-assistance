import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateProfile } from "../../actions/instructor";

class Profile extends Component {
  static propTypes = {
    instructor_id: PropTypes.number.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    updateProfile: PropTypes.func.isRequired
  };

  state = {
    instructor_id: this.props.instructor_id,
    first_name: this.props.first_name,
    last_name: this.props.last_name,
    department: this.props.department
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  onSubmit = e => {
    e.preventDefault();
    this.props.updateProfile(this.state);
  };

  render() {
    const { instructor_id, first_name, last_name, department } = this.state;
    return (
      <Fragment>
        <div className="col-md-6 m-auto">
          <form onSubmit={this.onSubmit}>
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
    instructor_id: state.instructor.id,
    first_name: state.instructor.first_name,
    last_name: state.instructor.last_name,
    department: state.instructor.department
  };
};

export default connect(mapStatetoProps, { updateProfile })(Profile);
