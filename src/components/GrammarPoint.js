import React, { Component } from "react";

class GrammarPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSelection = this.handleSelection.bind(this);
  }

  // takes string that is passed in onClick and
  // will be dealt with in the Main component

  handleSelection = (selection) => {
    let chosenGrammar = selection;
    console.log(chosenGrammar);
  };

  render() {
    return (
      <div>
        <div className="grammarPoint">
          <h2> Conjugation </h2>
          <ul>
            <li>
              <button onClick={this.handleSelection.bind(this, "pastForm")}>
                past form
              </button>
            </li>
            <li>
              <button
                onClick={this.handleSelection.bind(this, "potentialForm")}
              >
                potential form
              </button>
            </li>
            <li>
              <button onClick={this.handleSelection.bind(this, "passiveForm")}>
                passive form
              </button>
            </li>
            <li>
              <button
                onClick={this.handleSelection.bind(this, "causativeForm")}
              >
                causative form
              </button>
            </li>
            <li>
              <button onClick={this.handleSelection.bind(this, "teForm")}>
                te form
              </button>
            </li>
            <li>
              <button onClick={this.handleSelection.bind(this, "masuForm")}>
                masu form
              </button>
            </li>
            <li>
              <button
                onClick={this.handleSelection.bind(this, "volitionalForm")}
              >
                volitional form
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default GrammarPoint;
