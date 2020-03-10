import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { addStudents, loadAllStudents } from "../../actions/addstudents";

class AddStudents extends Component {
  componentDidMount() {
    this.props.loadAllStudents();
  }

  onSubmit = e => {
    e.preventDefault();
    let students = [];
    let cbs = document.getElementsByName("students");
    cbs.forEach(cb => {
      if (cb.checked) students.push(cb.id);
    });
    this.props.addStudents(this.props.lab_id, students);
  };

  render() {
    console.log(this.props.students);
    const showForm = (
      <form onSubmit={this.onSubmit} className="form">
        <div className="form-check">
          {this.props.students.map(student => (
            <div key={student.id}>
              <input
                id={student.id}
                type="checkbox"
                className="form-check-input"
                name="students"
              />
              <label className="form-check-label">
                {student.user.username}
              </label>
            </div>
          ))}
        </div>
        <input type="submit" className="btn btn-primary btn-sm" />
      </form>
    );
    return (
      <Modal size="lg" show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Students
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!this.props.students_added ? (
            showForm
          ) : (
            <h3 className="text-center text-sucess">
              Added Students Successfully
            </h3>
          )}
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
    students: state.addstudents.students,
    students_added: state.addstudents.students_added
  };
};

export default connect(mapStateToProps, {
  loadAllStudents,
  addStudents
})(AddStudents);
