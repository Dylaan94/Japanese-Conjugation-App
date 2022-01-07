import React, { Component } from "react";
import * as wanakana from "wanakana";

import Styles from "./styles/Styles";

class Controller extends Component {
  componentDidMount() {
    // forces textbox to hiragana with wanakana
    let textInput = document.getElementById("textInput");
    wanakana.bind(textInput);
  }

  render() {
    const {
      randomisedValue,
      value,
      handleTextInput,
      checkTextInput,
    } = this.props; // destructure props
    return (
      <Styles.ControllerMain>
        {checkTextInput()}
        <div className = "textDisplayDiv">
          <p className = "dictionaryFormText"> {randomisedValue.dictionaryForm}</p>
          <p className = "nameText"> {randomisedValue.name} </p>
          <p className = "englishText"> English: {randomisedValue.english}</p>
          <p className = "verbTypeText"> Verb Type: {randomisedValue.verbType}</p>
        </div>
        <div className="inputDiv">
          <input
            id="textInput"
            type="text"
            value={value}
            placeholder="type here"
            onChange={handleTextInput}
            name="textInputValue"
          />
          <h3> hit space to submit </h3>
        </div>
      </Styles.ControllerMain>
    );
  }
}

export default Controller;
