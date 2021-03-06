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
  // called each time component is updated
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
    } else if (
      this.props.grammarRefreshReq === true &&
      this.state.selection === "volitionalForm"
    ) {
      let selection = this.state.selection;
      this.handleVolitionalForm(selection);
    } else if (
      this.props.grammarRefreshReq === true &&
      this.state.selection === "imperitiveForm"
    ) {
      let selection = this.state.selection;
      this.handleImperitiveForm(selection);
    }
  };

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
      answer = slicedVerb + "???";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with su ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ku ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (
      currentVerb.verbType === "Godan verb with mu ending" ||
      currentVerb.verbType === "Godan verb with bu ending"
    ) {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with gu ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with bu ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else {
      // covers godan ru, u, tsu and iku/ yuku special class
      answer = slicedVerb + "??????";
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
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with su ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ku ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with mu ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with gu ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with bu ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ru ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with u ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with tsu ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb - Iku/Yuku special class") {
      // covers iku - to go
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    }
  };

  handlePassiveForm = (selection) => {
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
    if (
      currentVerb.verbType.indexOf("Ichidan verb") !== -1 &&
      currentVerb.verbType !== "Ichidan verb - kureru special class"
    ) {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Ichidan verb - kureru special class") {
      // special check for ??????
      answer = "????????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with su ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ku ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with mu ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with gu ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with bu ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ru ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with u ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with tsu ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb - Iku/Yuku special class") {
      // covers iku - to go
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    }
  };

  handleCausativeForm = (selection) => {
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
    if (
      currentVerb.verbType.indexOf("Ichidan verb") !== -1 &&
      currentVerb.verbType !== "Ichidan verb - kureru special class"
    ) {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Ichidan verb - kureru special class") {
      // special check for ??????
      answer = "????????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with su ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ku ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with mu ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with gu ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with bu ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ru ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with u ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with tsu ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb - Iku/Yuku special class") {
      // covers iku - to go
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    }
  };

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
      answer = slicedVerb + "???";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with su ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ku ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (
      currentVerb.verbType === "Godan verb with mu ending" ||
      currentVerb.verbType === "Godan verb with bu ending"
    ) {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with gu ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with bu ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else {
      // covers godan ru, u, tsu and iku/ yuku special class
      answer = slicedVerb + "??????";
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
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with su ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ku ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with mu ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with gu ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with bu ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ru ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with u ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with tsu ending") {
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb - Iku/Yuku special class") {
      // covers iku - to go
      answer = slicedVerb + "?????????";
      this.props.handleGrammarChange(selection, answer);
    }
  };

  handleVolitionalForm = (selection) => {
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
    if (
      currentVerb.verbType.indexOf("Ichidan verb") !== -1 &&
      currentVerb.verbType !== "Ichidan verb - kureru special class"
    ) {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Ichidan verb - kureru special class") {
      // special check for ??????
      answer = "?????????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with su ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ku ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with mu ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with gu ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with bu ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ru ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with u ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with tsu ending") {
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb - Iku/Yuku special class") {
      // covers iku - to go
      answer = slicedVerb + "??????";
      this.props.handleGrammarChange(selection, answer);
    }
  };

  handleImperitiveForm = (selection) => {
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
    if (
      currentVerb.verbType.indexOf("Ichidan verb") !== -1 &&
      currentVerb.verbType !== "Ichidan verb - kureru special class"
    ) {
      answer = slicedVerb + "???";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Ichidan verb - kureru special class") {
      // special check for ??????
      answer = "??????";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with su ending") {
      answer = slicedVerb + "???";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ku ending") {
      answer = slicedVerb + "???";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with mu ending") {
      answer = slicedVerb + "???";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with gu ending") {
      answer = slicedVerb + "???";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with bu ending") {
      answer = slicedVerb + "???";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ru ending") {
      answer = slicedVerb + "???";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with u ending") {
      answer = slicedVerb + "???";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with tsu ending") {
      answer = slicedVerb + "???";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb - Iku/Yuku special class") {
      // covers iku - to go
      answer = slicedVerb + "???";
      this.props.handleGrammarChange(selection, answer);
    }
  };
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
            <button
              onClick={this.handlePotentialForm.bind(this, "potentialForm")}
            >
              potential
            </button>
          </li>
          <li>
            <button onClick={this.handlePassiveForm.bind(this, "passiveForm")}>
              passive
            </button>
          </li>
          <li>
            <button
              onClick={this.handleCausativeForm.bind(this, "causativeForm")}
            >
              causative
            </button>
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
            <button
              onClick={this.handleVolitionalForm.bind(this, "volitionalForm")}
            >
              volitional
            </button>
          </li>
          <li>
            <button
              onClick={this.handleImperitiveForm.bind(this, "imperitiveForm")}
            >
              imperitive
            </button>
          </li>
        </ul>
      </Styles.GrammarPointsMain>
    );
  }
}

export default GrammarPoint;
