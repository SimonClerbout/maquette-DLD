import React, { Component } from "react";

class Modal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container bg-light">
        <h1 className="text-center">{this.props.details.title}</h1>
        <p className="text-center">{this.props.details.nb}</p>
        <button
          type="button"
          className="btn btn-danger w-100 mx-auto"
          onClick={this.props.closePopup}
        >
          Fermer
        </button>
      </div>
    );
  }
}

export default Modal;
