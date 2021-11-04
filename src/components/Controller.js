import React, { Component } from "react";
import * as wanakana from "wanakana";

import Styles from "./styles/Styles";

class Controller extends Component {
  componentDidMount() {
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
        <div className="textDisplayDiv">
          <h1> {randomisedValue.name} </h1>
          <h2> {randomisedValue.verbType}</h2>
        </div>
        <div className="inputDiv">
          <input
            id="textInput"
            type="text"
            value={value}
            placeholder="type here"
            onChange={(text) => {
              handleTextInput(text);
              checkTextInput();
            }}
            name="textInputValue"
          />
        </div>
      </Styles.ControllerMain>
    );
  }
}

export default Controller;
