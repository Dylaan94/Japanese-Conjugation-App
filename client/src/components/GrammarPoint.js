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
      // covers godan ru, u, tsu and iku/ yuku special class
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
      answer = slicedVerb + "られる";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Ichidan verb - kureru special class") {
      // special check for 来る
      answer = "こられる";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with su ending") {
      answer = slicedVerb + "される";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ku ending") {
      answer = slicedVerb + "かれる";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with mu ending") {
      answer = slicedVerb + "まれる";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with gu ending") {
      answer = slicedVerb + "がれる";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with bu ending") {
      answer = slicedVerb + "ばれる";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ru ending") {
      answer = slicedVerb + "られる";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with u ending") {
      answer = slicedVerb + "われる";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with tsu ending") {
      answer = slicedVerb + "たれる";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb - Iku/Yuku special class") {
      // covers iku - to go
      answer = slicedVerb + "かれる";
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
        answer = slicedVerb + "させる";
        this.props.handleGrammarChange(selection, answer);
      } else if (
        currentVerb.verbType === "Ichidan verb - kureru special class"
      ) {
        // special check for 来る
        answer = "こさせる";
        this.props.handleGrammarChange(selection, answer);
      } else if (currentVerb.verbType === "Godan verb with su ending") {
        answer = slicedVerb + "させる";
        this.props.handleGrammarChange(selection, answer);
      } else if (currentVerb.verbType === "Godan verb with ku ending") {
        answer = slicedVerb + "かせる";
        this.props.handleGrammarChange(selection, answer);
      } else if (currentVerb.verbType === "Godan verb with mu ending") {
        answer = slicedVerb + "ませる";
        this.props.handleGrammarChange(selection, answer);
      } else if (currentVerb.verbType === "Godan verb with gu ending") {
        answer = slicedVerb + "がせる";
        this.props.handleGrammarChange(selection, answer);
      } else if (currentVerb.verbType === "Godan verb with bu ending") {
        answer = slicedVerb + "ばせる";
        this.props.handleGrammarChange(selection, answer);
      } else if (currentVerb.verbType === "Godan verb with ru ending") {
        answer = slicedVerb + "らせる";
        this.props.handleGrammarChange(selection, answer);
      } else if (currentVerb.verbType === "Godan verb with u ending") {
        answer = slicedVerb + "わせる";
        this.props.handleGrammarChange(selection, answer);
      } else if (currentVerb.verbType === "Godan verb with tsu ending") {
        answer = slicedVerb + "たせる";
        this.props.handleGrammarChange(selection, answer);
      } else if (
        currentVerb.verbType === "Godan verb - Iku/Yuku special class"
      ) {
        // covers iku - to go
        answer = slicedVerb + "かせる";
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
      // covers godan ru, u, tsu and iku/ yuku special class
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
    } else if (currentVerb.verbType === "Godan verb - Iku/Yuku special class") {
      // covers iku - to go
      answer = slicedVerb + "きます";
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
      answer = slicedVerb + "よう";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Ichidan verb - kureru special class") {
      // special check for 来る
      answer = "こよう";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with su ending") {
      answer = slicedVerb + "そう";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ku ending") {
      answer = slicedVerb + "こう";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with mu ending") {
      answer = slicedVerb + "もう";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with gu ending") {
      answer = slicedVerb + "ごう";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with bu ending") {
      answer = slicedVerb + "ぼう";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with ru ending") {
      answer = slicedVerb + "ろう";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with u ending") {
      answer = slicedVerb + "おう";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb with tsu ending") {
      answer = slicedVerb + "とう";
      this.props.handleGrammarChange(selection, answer);
    } else if (currentVerb.verbType === "Godan verb - Iku/Yuku special class") {
      // covers iku - to go
      answer = slicedVerb + "こう";
      this.props.handleGrammarChange(selection, answer);
    } 
  };

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
            <button onClick={this.handleCausativeForm.bind(this, "causativeForm")}>causative</button>
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
            <button onClick = {this.handleVolitionalForm.bind(this, "volitionalForm")}>volitional</button>
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
