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
        <button className="d-block float-right" onClick={this.props.closePopup}>
          &#x2716;
        </button>
      </div>
    );
  }
}

export default Modal;
