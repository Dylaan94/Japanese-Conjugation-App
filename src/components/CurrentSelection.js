import React, { Component } from "react";

class CurrentSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
    render() {
      const {currentLevel, currentGrammar } = this.props
    return (
      <div>
        <h2>
          {" "}
          Current selection is {currentLevel}  {currentGrammar}{" "}
        </h2>
      </div>
    );
  }
}

export default CurrentSelection;
