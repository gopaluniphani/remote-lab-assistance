import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

import { createNewLab, clearCreatedLab } from "../../actions/createlab";

class CreateLab extends Component {
  static propTypes = {
    labCreated: PropTypes.bool.isRequired,
    lab: PropTypes.object,
    createNewLab: PropTypes.func.isRequired,
    clearCreatedLab: PropTypes.func.isRequired
  };

  state = {
    code: "",
    name: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createNewLab(this.state);
  };

  closeModal = () => {
    this.props.onHide();
    this.props.clearCreatedLab();
  };

  render() {
    const create = (
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </div>
    );

    const { code, name } = this.state;
    return (
      <Modal show={this.props.show} onHide={this.props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create a new lab
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Lab Code</label>
                <input
                  type="text"
                  className="form-control"
                  name="code"
                  onChange={this.onChange}
                  value={code}
                />
              </div>
              <div className="form-group">
                <label>Lab Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                />
              </div>
              {!this.props.labCreated ? create : <p>Lab Created</p>}
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.closeModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    labCreated: state.createlab.labCreated,
    lab: state.createlab.lab
  };
};

export default connect(mapStateToProps, { createNewLab, clearCreatedLab })(
  CreateLab
);
