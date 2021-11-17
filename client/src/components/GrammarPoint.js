import React, { Component } from "react";
import Styles from "./styles/Styles";

class GrammarPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correctConjugation: "",
    };

    this.handleSelection = this.handleSelection.bind(this);
    this.handlePastForm = this.handlePastForm.bind(this);
    this.handlePotentialForm = this.handlePotentialForm.bind(this);
    this.handlePassiveForm = this.handlePastForm.bind(this);
    this.handleCausativeForm = this.handleCausativeForm.bind(this);
    this.handleTeForm = this.handleTeForm.bind(this);
    this.handleMasuForm = this.handleMasuForm.bind(this);
    this.handleVolitionalForm = this.handleVolitionalForm.bind(this);
    this.handleImperitiveForm = this.handleImperitiveForm.bind(this);
  }

  // takes string that is passed in onClick and
  // will be dealt with in the Main component

  handleSelection = (selection) => {
    let chosenGrammar = selection;
    let answer = this.state.correctConjugation
    console.log(chosenGrammar);
    this.props.handleGrammarChange(chosenGrammar, answer)
  };

  handlePastForm = (selection) => {
    console.log(selection)
    let currentVerb = this.props.randomisedValue
    if (currentVerb.verbType.includes("Ichidan")) {
      let slicedVerb = currentVerb.dictionaryForm.slice(0, -1)
      let answer = slicedVerb + "た";
      this.setState(
        {
          correctConjugation: answer,
        },
        () => {
          console.log(this.state);
          this.handleSelection(selection); // updates state.currentGrammar in main
        }
      );
    }
  }

  handlePotentialForm = () => {

  }

  handlePassiveForm = () => {

  }

  handleCausativeForm = () => {

  }

  handleTeForm = () => {

  }

  handleMasuForm = () => {

  }

  handleVolitionalForm = () => {

  }

  handleImperitiveForm = () => {

  }

  render() {
    return (
      <Styles.GrammarPointsMain>
        <h2> Conjugation Form </h2>
        <ul>
          <li>
            <button onClick={
              //this.handleSelection.bind(this, "pastForm")
              this.handlePastForm.bind(this, "pastForm")
            }>
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
