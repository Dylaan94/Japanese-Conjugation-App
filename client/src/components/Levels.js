import React, { Component } from "react";

import Styles from "./styles/Styles";

class Levels extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSelection = this.handleSelection.bind(this);
    this.changeBackground = this.changeBackground.bind(this);
    this.resetBackground = this.resetBackground.bind(this);
  }

  // takes string that is passed in onClick and sends it
  // to handleLevelsChange prop which is then dealt with in Main

  handleSelection = (selection) => {
    let chosenLevel = selection;
    this.props.handleLevelsChange(chosenLevel);
  };

  changeBackground = (e) => {
    e.target.style.background = "#db222a";
  };

  resetBackground = (e) => {
    e.target.style.background = "white";
  };

  render() {
    return (
      <Styles.LevelsMain>
        <h2> JLPT Level </h2>

        <ul>
          <li>
            <button name="N5" onClick={this.handleSelection.bind(this, "N5")}>
              {" "}
              N5
            </button>
          </li>
          <li>
            <button name="N4" onClick={this.handleSelection.bind(this, "N4")}>
              {" "}
              N4
            </button>
          </li>
          <li>
            <button
              name="N3"
              onMouseEnter={(e) => this.changeBackground(e)}
              onMouseLeave={(e) => this.resetBackground(e)}
            >
              N3
            </button>
          </li>
          <li>
            <button
              name="N2"
              onMouseEnter={(e) => this.changeBackground(e)}
              onMouseLeave={(e) => this.resetBackground(e)}
            >
              N2
            </button>
          </li>
          <li>
            <button
              name="N1"
              onMouseEnter={(e) => this.changeBackground(e)}
              onMouseLeave={(e) => this.resetBackground(e)}
            >
              N1
            </button>
          </li>
        </ul>
      </Styles.LevelsMain>
    );
  }
}

export default Levels;
