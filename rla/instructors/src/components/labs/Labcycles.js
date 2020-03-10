import React, { Component, useState, Fragment } from "react";
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
          <div className="container">
            {this.props.labcycles.map(labcycle => {
              return (
                <Fragment key={labcycle.id}>
                  <h5>{labcycle.name}</h5>
                  <CKEditor
                    editor={ClassicEditor}
                    config={{
                      toolbar: []
                    }}
                    data={labcycle.description}
                    disabled={true}
                  />
                  <hr />
                </Fragment>
              );
            })}
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
