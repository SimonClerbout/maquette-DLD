import React, { Component } from "react";

class Nav extends Component {
  render() {
    return (
      <header>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Accueil</a>
            </li>
            <li className="breadcrumb-item active">Panel</li>
          </ol>
        </nav>
      </header>
    );
  }
}

export default Nav;
