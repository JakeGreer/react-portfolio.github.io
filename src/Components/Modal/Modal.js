import React, { Component } from 'react';
import "./Modal.css"

class Modal extends Component {

  render() {
    return (
        <div className="modal" id={`modal-${this.props.item.title.toLowerCase().replace(/\s/g, "-")}`}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{this.props.item.title}</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                    </div>
                    <div className="modal-body">
                        {this.props.item.details}
                    </div>
                    <div className="modal-footer">
                        {/* <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default Modal;