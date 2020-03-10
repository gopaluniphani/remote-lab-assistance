import React, { Component, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

class LabCycles extends Component {
  static propTypes = {
    labcycles: PropTypes.array.isRequired
  };

  render() {
    return (
      <Modal {...this.props}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Labcycles
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {this.props.labcycles.map(labcyle => {
                  return (
                    <tr key={labcyle.id}>
                      <td>{labcyle.name}</td>
                      <td>{labcyle.description}</td>
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
    labcycles: state.labcycles.labcycles
  };
};

export default connect(mapStateToProps, {})(LabCycles);
