import React, { Component } from "react";
import Modal from "./Modal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panel: [
        {
          id: 1,
          title: "Personnages",
          nb: 48,
          content:
            "Alii nullo quaerente vultus severitate adsimulata patrimonia",
          type: "Ajouter un personnage"
        },
        {
          id: 2,
          title: "Combats",
          nb: 52,
          content:
            "Alii nullo quaerente vultus severitate adsimulata patrimonia",
          type: "Programmer un combat"
        },
        {
          id: 3,
          title: "Bâtiments",
          nb: 8,
          content:
            "Alii nullo quaerente vultus severitate adsimulata patrimonia",
          type: "Ajouter un bâtiment"
        },
        {
          id: 4,
          title: "Items",
          nb: 128,
          content:
            "Alii nullo quaerente vultus severitate adsimulata patrimonia",
          type: "Ajouter un item"
        },
        {
          id: 5,
          title: "Sortilèges",
          nb: 16,
          content:
            "Alii nullo quaerente vultus severitate adsimulata patrimonia",
          type: "Ajouter un sortilège"
        }
      ],
      visible: false,
      selectedPanel: {}
    };
  }

  showPopup = (id) => {
    this.setState({
      selectedPanel: id,
      visible: true
    });
  };

  render() {
    return (
      <div>
        <h2>
          <span>&#x2190;</span> Panel
        </h2>
        <div className="container">
          <div className="card-deck">
            <div className="row">
              {this.state.panel.map((panel) => {
                return (
                  <div className="card bg-light border-light col-md-6 border-white">
                    <div className="card-body">
                      <div className="row">
                        <h4 className="card-title col-md-6">{panel.title}</h4>
                        <h3 className="card-title col-md-6">{panel.nb}</h3>
                      </div>
                      <div className="row">
                        <p className="card-text col-md-6">{panel.content}</p>
                        <div className="col-md-6">
                          <button
                            className="btn btn btn-outline-secondary w-100"
                            onClick={() => this.showPopup(panel)}
                          >
                            {panel.type}
                          </button>
                          <button className="btn btn-danger w-100 mt-1">
                            Mes{" "}
                            <p className="text-lowercase d-inline">
                              {panel.title}
                            </p>{" "}
                            &rarr;
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {this.state.visible ? (
          <Modal
            details={this.state.selectedPanel}
            closePopup={() => this.setState({ visible: !this.state.visible })}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
