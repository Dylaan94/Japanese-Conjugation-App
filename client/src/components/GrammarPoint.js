import React, { Component } from "react";
import Styles from "./styles/Styles";

class GrammarPoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "",
    };
    this.handleSelection = this.handleSelection.bind(this);
    this.handlePastForm = this.handlePastForm.bind(this);
    this.handlePotentialForm = this.handlePotentialForm.bind(this);
    this.handlePassiveForm = this.handlePassiveForm.bind(this);
    this.handleCausativeForm = this.handleCausativeForm.bind(this);
    this.handleTeForm = this.handleTeForm.bind(this);
    this.handleMasuForm = this.handleMasuForm.bind(this);
    this.handleVolitionalForm = this.handleVolitionalForm.bind(this);
    this.handleImperitiveForm = this.handleImperitiveForm.bind(this);
    this.checkRefreshStatus = this.checkRefreshStatus.bind(this);
  }

  // takes in refresh status from main state
  // calls function again to generate new answer
  checkRefreshStatus = () => {
    if (
      this.props.grammarRefreshReq === true &&
      this.state.selection === "pastForm"
    ) {
      let selection = this.state.selection;
      this.handlePastForm(selection);
    } else if (
      this.props.grammarRefreshReq === true &&
      this.state.selection === "potentialForm"
    ) {
      let selection = this.state.selection;
      this.handlePotentialForm(selection);
    } else if (
      this.props.grammarRefreshReq === true &&
      this.state.selection === "passiveForm"
    ) {
      let selection = this.state.selection;
      this.handlePassiveForm(selection);
    } else if (
      this.props.grammarRefreshReq === true &&
      this.state.selection === "causativeForm"
    ) {
      let selection = this.state.selection;
      this.handleCausativeForm(selection);
    } else if (
      this.props.grammarRefreshReq === true &&
      this.state.selection === "teForm"
    ) {
      let selection = this.state.selection;
      this.handleTeForm(selection);
    } else if (
      this.props.grammarRefreshReq === true &&
      this.state.selection === "masuForm"
    ) {
      let selection = this.state.selection;
      this.handleMasuForm(selection);
    }
  }

  handleSelection = (selection) => {
    this.setState(
      {
        selection: selection,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  // takes string that is passed in onClick
  // creates answer and sends both to Main
  handlePastForm = (selection) => {
    // set grammar point into state for refresh checking
    this.setState(
      {
        selection: selection,
      },
      () => {
        console.log(this.state);
      }
    );

    let currentVerb = this.props.randomisedValue;
    let slicedVerb = currentVerb.dictionaryForm.slice(0, -1);
    let answer = "";
    console.log(selection);
    // multiple types of ichidan verb so used indexOf
    if (currentVerb.verbType.indexOf("Ichidan verb") !== -1) {
      answer = slicedVerb + "た";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with su ending") {
      answer = slicedVerb + "した";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ku ending") {
      answer = slicedVerb + "いた";
      this.props.handleGrammarChange(selection, answer);
    } else if (
      currentVerb.verbType === "Godan verb with mu ending" ||
      currentVerb.verbType === "Godan verb with bu ending"
    ) {
      answer = slicedVerb + "んだ";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with gu ending") {
      answer = slicedVerb + "いだ";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with bu ending") {
      answer = slicedVerb + "んだ";
      this.props.handleGrammarChange(selection, answer);
    } else {
      // covers godan ru, u, tsu and aru special class
      answer = slicedVerb + "った";
      this.props.handleGrammarChange(selection, answer);
    }
  };

  handlePotentialForm = (selection) => {
     this.setState(
       {
         selection: selection,
       },
       () => {
         console.log(this.state);
       }
     );
    
     let currentVerb = this.props.randomisedValue;
     let slicedVerb = currentVerb.dictionaryForm.slice(0, -1);
     let answer = "";
     console.log(selection);
     // multiple types of ichidan verb so used indexOf
     if (currentVerb.verbType.indexOf("Ichidan verb") !== -1) {
       answer = slicedVerb + "られる";
       this.props.handleGrammarChange(selection, answer);
     } else if (currentVerb.verbType === "Godan verb with su ending") {
       answer = slicedVerb + "せる";
       this.props.handleGrammarChange(selection, answer);
     } else if (currentVerb.verbType === "Godan verb with ku ending") {
       answer = slicedVerb + "ける";
       this.props.handleGrammarChange(selection, answer);
     } else if (currentVerb.verbType === "Godan verb with mu ending") {
       answer = slicedVerb + "める";
       this.props.handleGrammarChange(selection, answer);
     } else if (currentVerb.verbType === "Godan verb with gu ending") {
       answer = slicedVerb + "げる";
       this.props.handleGrammarChange(selection, answer);
     } else if (currentVerb.verbType === "Godan verb with bu ending") {
       answer = slicedVerb + "べる";
       this.props.handleGrammarChange(selection, answer);
     } else if (currentVerb.verbType === "Godan verb with ru ending") {
       answer = slicedVerb + "れる";
       this.props.handleGrammarChange(selection, answer);
     } else if (currentVerb.verbType === "Godan verb with u ending") {
       answer = slicedVerb + "える";
       this.props.handleGrammarChange(selection, answer);
     } else if (currentVerb.verbType === "Godan verb with tsu ending") {
       answer = slicedVerb + "てる";
       this.props.handleGrammarChange(selection, answer);
     } else if (currentVerb.verbType === "Godan verb - Iku/Yuku special class") {
       // covers iku - to go 
       answer = slicedVerb + "ける";
       this.props.handleGrammarChange(selection, answer);
     } else {
       // covers aru special class
       answer = slicedVerb + "れる";
       this.props.handleGrammarChange(selection, answer);
     }
  };

  handlePassiveForm = () => {};

  handleCausativeForm = () => {};

  handleTeForm = (selection) => {
    // set grammar point into state for refresh checking
    this.setState(
      {
        selection: selection,
      },
      () => {
        console.log(this.state);
      }
    );

    let currentVerb = this.props.randomisedValue;
    let slicedVerb = currentVerb.dictionaryForm.slice(0, -1);
    let answer = "";
    console.log(selection);
    // multiple types of ichidan verb so used indexOf
    if (currentVerb.verbType.indexOf("Ichidan verb") !== -1) {
      answer = slicedVerb + "て";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with su ending") {
      answer = slicedVerb + "して";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ku ending") {
      answer = slicedVerb + "いて";
      this.props.handleGrammarChange(selection, answer);
    } else if (
      currentVerb.verbType === "Godan verb with mu ending" ||
      currentVerb.verbType === "Godan verb with bu ending"
    ) {
      answer = slicedVerb + "んで";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with gu ending") {
      answer = slicedVerb + "いで";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with bu ending") {
      answer = slicedVerb + "んで";
      this.props.handleGrammarChange(selection, answer);
    } else {
      // covers godan ru, u, tsu and aru special class
      answer = slicedVerb + "って";
      this.props.handleGrammarChange(selection, answer);
    }
  };

  handleMasuForm = (selection) => {
    this.setState(
      {
        selection: selection,
      },
      () => {
        console.log(this.state);
      }
    );

    let currentVerb = this.props.randomisedValue;
    let slicedVerb = currentVerb.dictionaryForm.slice(0, -1);
    let answer = "";
    console.log(selection);
    // multiple types of ichidan verb so used indexOf
    if (currentVerb.verbType.indexOf("Ichidan verb") !== -1) {
      answer = slicedVerb + "ます";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with su ending") {
      answer = slicedVerb + "します";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ku ending") {
      answer = slicedVerb + "きます";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with mu ending") {
      answer = slicedVerb + "みます";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with gu ending") {
      answer = slicedVerb + "ぎます";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with bu ending") {
      answer = slicedVerb + "びます";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ru ending") {
      answer = slicedVerb + "ります";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with u ending") {
      answer = slicedVerb + "います";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with tsu ending") {
      answer = slicedVerb + "ちます";
      this.props.handleGrammarChange(selection, answer);
    } else {
      // covers aru special class
      answer = slicedVerb + "ります"
      this.props.handleGrammarChange(selection, answer);
    }
  };

  handleVolitionalForm = () => {};

  handleImperitiveForm = () => {};

  render() {
    return (
      <Styles.GrammarPointsMain>
        {this.checkRefreshStatus()}
        <h2> Conjugation Form </h2>
        <ul>
          <li>
            <button onClick={this.handlePastForm.bind(this, "pastForm")}>
              past
            </button>
          </li>
          <li>
            <button onClick = {this.handlePotentialForm.bind(this, "potentialForm")}>potential</button>
          </li>
          <li>
            <button>passive</button>
          </li>
          <li>
            <button>causative</button>
          </li>
        </ul>
        <ul>
          <li>
            <button onClick={this.handleTeForm.bind(this, "teForm")}>te</button>
          </li>
          <li>
            <button onClick={this.handleMasuForm.bind(this, "masuForm")}>
              masu
            </button>
          </li>
          <li>
            <button>volitional</button>
          </li>
          <li>
            <button>imperitive</button>
          </li>
        </ul>
      </Styles.GrammarPointsMain>
    );
  }
}

export default GrammarPoint;
