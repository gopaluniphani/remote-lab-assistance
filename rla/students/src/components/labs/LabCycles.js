import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
          {this.props.labcycles.map(labcycle => {
            return (
              <div className="container" key={labcycle.id}>
                <div className="row">
                  <div className="col-md-9">
                    <h5>{labcycle.name}</h5>
                  </div>
                  <div className="col-md-3">
                    <Link
                      to="/labcycle"
                      className="btn btn-primary btn-sm ml-auto"
                    >
                      Try It Now
                    </Link>
                  </div>
                </div>
                <CKEditor
                  editor={ClassicEditor}
                  config={{
                    toolbar: []
                  }}
                  data={labcycle.description}
                  disabled={true}
                />
              </div>
            );
          })}
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
