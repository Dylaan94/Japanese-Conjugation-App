import React, { Component } from "react";
import Styles from "./styles/Styles";

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
      this.props.handleGrammarChange(chosenGrammar)
  };

  render() {
    return (
      <Styles.GrammarPointsMain>
        <h2> Conjugation Form </h2>
        <ul>
          <li>
            <button onClick={this.handleSelection.bind(this, "pastForm")}>
              past
            </button>
          </li>
          <li>
            <button onClick={this.handleSelection.bind(this, "potentialForm")}>
              potential
            </button>
          </li>
          <li>
            <button onClick={this.handleSelection.bind(this, "passiveForm")}>
              passive
            </button>
          </li>
          <li>
            <button onClick={this.handleSelection.bind(this, "causativeForm")}>
              causative
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={this.handleSelection.bind(this, "teForm")}>
              te
            </button>
          </li>
          <li>
            <button onClick={this.handleSelection.bind(this, "masuForm")}>
              masu
            </button>
          </li>
          <li>
            <button onClick={this.handleSelection.bind(this, "volitionalForm")}>
              volitional
            </button>
          </li>
          <li>
            <button onClick={this.handleSelection.bind(this, "volitionalForm")}>
              imperitive
            </button>
          </li>
        </ul>
      </Styles.GrammarPointsMain>
    );
  }
}

export default GrammarPoint;
