import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { createNewLab, clearCreatedLab } from "../../actions/createlab";
import {
  createNewLabCycle,
  clearCreatedLabCycles
} from "../../actions/crlabcycles";

class CreateLab extends Component {
  static propTypes = {
    labCreated: PropTypes.bool.isRequired,
    lab: PropTypes.object,
    createNewLab: PropTypes.func.isRequired,
    createNewLabCycle: PropTypes.func.isRequired,
    clearCreatedLab: PropTypes.func.isRequired
  };

  state = {
    code: "",
    name: "",
    editor_data: "",
    lc_name: "",
    create_lc: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onEditorChange = (evt, editor) => {
    this.setState({ editor_data: editor.getData() });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.createNewLab(this.state);
    this.setState({ create_lc: false });
  };

  closeModal = () => {
    this.props.onHide();
    this.props.clearCreatedLabCycles();
    this.props.clearCreatedLab();
  };

  createLabCycle = e => {
    e.preventDefault();
    let lab = this.props.lab.id;
    let name = this.state.lc_name;
    let description = this.state.editor_data;
    this.props.createNewLabCycle({ lab, name, description });
    this.setState({ lc_name: "", editor_data: "", create_lc: false });
  };

  toggleCLC = () => {
    this.setState({ create_lc: true });
  };

  render() {
    const create = (
      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </div>
    );

    const create_labcycle = (
      <Fragment>
        <form onSubmit={this.createLabCycle}>
          <div className="form-group">
            <label>Lab Cycle Name</label>
            <input
              className="form-control"
              type="text"
              name="lc_name"
              value={this.state.lc_name}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <CKEditor
              editor={ClassicEditor}
              data={this.state.editor_data}
              onChange={this.onEditorChange}
            />
          </div>
          <button className="btn btn-primary btn-sm">Create Lab Cycle</button>
        </form>
      </Fragment>
    );

    const create_button = (
      <button className="btn btn-primary" onClick={this.toggleCLC}>
        Add Lab Cycle
      </button>
    );

    const { code, name } = this.state;
    return (
      <Modal size="lg" show={this.props.show} onHide={this.props.onHide}>
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
              {!this.props.labCreated ? (
                create
              ) : (
                <h4 className="text-success text-center">Lab Created</h4>
              )}
            </form>
            {this.props.labCreated ? (
              this.state.create_lc ? (
                create_labcycle
              ) : (
                create_button
              )
            ) : (
              <span />
            )}
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

export default connect(mapStateToProps, {
  createNewLab,
  clearCreatedLab,
  createNewLabCycle,
  clearCreatedLabCycles
})(CreateLab);
