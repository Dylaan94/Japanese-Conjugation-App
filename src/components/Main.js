import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GrammarPoint from "./GrammarPoint";
import Controller from "./Controller";
import Levels from "./Levels";

import JLPTData from "./JLPTData";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      N5: JLPTData.N5,
      N4: JLPTData.N4,
      N3: JLPTData.N3,
      N2: JLPTData.N2,
      N1: JLPTData.N1,
      selected: [],
      randomised: { name: "テスト" },
      textInputValue: "",
    };
    this.handleLevelsInput = this.handleLevelsInput.bind(this);
    this.handleRandomisation = this.handleRandomisation.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleCorrectInput = this.handleCorrectInput.bind(this);
    this.checkTextInput = this.checkTextInput.bind(this);
  }
  handleLevelsInput = (data) => {
    let levelChosen = data;
    let selectedLevelArray = [];
    console.log("dealing with levels" + levelChosen);

    if (levelChosen == "N5") {
      selectedLevelArray = this.state.N5;
      this.setState(
        {
          selected: selectedLevelArray,
        },
        () => {
          console.log(this.state);
        }
      ); //setState is async so have to wait
    } else if (levelChosen == "N4") {
      selectedLevelArray = this.state.N4;
      this.setState(
        {
          selected: selectedLevelArray,
        },
        () => {
          console.log(this.state);
        }
      );
    }
    this.handleRandomisation(selectedLevelArray);
  };

  handleRandomisation = (array) => {
    // adds random item from selected level arary into randomised
    // randomised is then sent to the controller which displays the word
    const min = 0;
    const max = array.length;
    const random = Math.floor(min + Math.random() * (max - min));
    this.setState(
      {
        randomised: array[random],
      },
      () => {
        console.log(this.state);
      }
    );
    console.log(random);
    console.log(array);
  };

  handleTextInput = (e) => {
    // update state with new text value dynamically
    let value = e.target.value;
    this.setState(
      {
        textInputValue: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleCorrectInput = () => {
    let data = this.state.selected;
    this.setState(
      {
        textInputValue: "", // reset input value
      },
      () => {
        this.handleRandomisation(data); // call new verb
      }
    );
  };

  checkTextInput = () => {
    // checks input value against randomly assigned verb and then runs
    if (this.state.textInputValue == this.state.randomised.pastForm) {
      this.handleCorrectInput();
    }
  };

  render() {
    return (
      <div>
        <Header></Header>
        <Levels handleLevelsChange={this.handleLevelsInput}></Levels>
        <GrammarPoint></GrammarPoint>
        <Controller
          randomisedValue={this.state.randomised}
          handleTextInput={this.handleTextInput}
          checkTextInput={this.checkTextInput}
          value={this.state.textInputValue}
        ></Controller>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
