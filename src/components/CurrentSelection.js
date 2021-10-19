import React, { Component } from "react";
import Styles from "./styles/Styles";

class CurrentSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { currentLevel, currentGrammar } = this.props;
    return (
      <Styles.CurrentSelectionMain>
        <h2>Current selection:</h2>
        <h3>
          {currentLevel} {currentGrammar}
        </h3>
      </Styles.CurrentSelectionMain>
    );
  }
}

export default CurrentSelection;
