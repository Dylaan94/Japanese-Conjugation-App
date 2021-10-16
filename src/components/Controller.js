import React, { Component } from "react";

class Controller extends Component {
  render() {
    const { randomisedValue, value, handleTextInput } = this.props; // destructure props
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
            onChange={handleTextInput}
            name="textInputValue"
          />
        </div>
      </div>
    );
  }
}

export default Controller;
