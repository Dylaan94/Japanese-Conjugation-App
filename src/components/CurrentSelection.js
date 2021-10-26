import React, { Component } from "react";
import Styles from "./styles/Styles";

class CurrentSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.convertGrammar = this.convertGrammar.bind(this);
  }

  convertGrammar = (currentGrammar) => {
    // converts from camel case to sentence case
    let text = currentGrammar.replace(/([A-Z])/g, " $1");
    let newText = text.charAt(0).toUpperCase() + text.slice(1);

    return <a>{newText}</a>;
  };

  render() {
    const { currentLevel, currentGrammar } = this.props;
    return (
      <Styles.CurrentSelectionMain>
        <h2>Current selection:</h2>
        <h3>
          {currentLevel} {this.convertGrammar(currentGrammar)}
        </h3>
      </Styles.CurrentSelectionMain>
    );
  }
}

export default CurrentSelection;
