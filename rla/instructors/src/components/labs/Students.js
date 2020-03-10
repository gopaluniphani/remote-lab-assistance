import React, { Component, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

class Students extends Component {
  static propTypes = {
    students: PropTypes.array.isRequired
  };

  render() {
    return (
      <Modal {...this.props}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Students</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Year</th>
                  <th>Department</th>
                  <th>Section</th>
                </tr>
              </thead>
              <tbody>
                {this.props.students.map(student => {
                  return (
                    <tr key={student.id}>
                      <td>{student.first_name}</td>
                      <td>{student.year}</td>
                      <td>{student.department}</td>
                      <td>{student.section}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.students.students
  };
};

export default connect(mapStateToProps, {})(Students);
