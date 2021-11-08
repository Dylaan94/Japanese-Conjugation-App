import React, { Component } from "react";

import Styles from "./styles/Styles";

class Levels extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSelection = this.handleSelection.bind(this);
  }

  // takes string that is passed in onClick and sends it
  // to handleLevelsChange prop which is then dealt with in Main

  handleSelection = (selection) => {
    let chosenLevel = selection;
      this.props.handleLevelsChange(chosenLevel);
  };

  render() {
    return (
      <Styles.LevelsMain>
        <h2> JLPT Level </h2>

        <ul>
          <li>
            <button name = "N5" onClick={this.handleSelection.bind(this, "N5")}>  N5</button>
          </li>
          <li>
            <button name = "N4" onClick={this.handleSelection.bind(this, "N4")}> N4</button>
          </li>
          <li>
            <button name = "N3" onClick={this.handleSelection.bind(this, "N3")}> N3</button>
          </li>
          <li>
            <button name = "N2" onClick={this.handleSelection.bind(this, "N2")}> N2</button>
          </li>
          <li>
            <button name = "N1" onClick={this.handleSelection.bind(this, "N1")}> N1</button>
          </li>
        </ul>
      </Styles.LevelsMain>
    );
  }
}

export default Levels;
