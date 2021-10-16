import React, { Component } from "react";

class Controller extends Component {

  render() {
    const { randomisedValue } = this.props; // destructure props
      return (
          <div>
        <div>
          <h1> {randomisedValue.name} </h1>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default Controller;
