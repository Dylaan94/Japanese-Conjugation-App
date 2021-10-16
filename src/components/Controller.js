import React, { Component } from "react";

class Controller extends Component {
  render() {
    const {
      randomisedValue,
      value,
      handleTextInput,
      checkTextInput,
    } = this.props; // destructure props
    return (
      <div>
        <div>
          <h1> {randomisedValue.name} </h1>
          <h2> {randomisedValue.verbType}</h2>
        </div>
        <div>
          <input
            type="text"
            placeholder="type your answer here"
            value={value}
            onChange={(text) => {
              handleTextInput(text);
              checkTextInput();
            }}
            name="textInputValue"
          />
        </div>
      </div>
    );
  }
}

export default Controller;
