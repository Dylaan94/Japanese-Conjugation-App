import React, { Component } from "react";
import N5Array from "./JLPTData";

class Levels extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection = (data) => {
    let chosenLevel = data;
    console.log(chosenLevel);
  };

  render() {
    return (
      <div className="levels">
        <h2> JLPT Level </h2>
        <ul>
          <li>
            <button onClick={this.handleSelection.bind(this, "N5")}> N5</button>
          </li>
          <li>
            <button onClick={this.handleSelection.bind(this, "N4")}> N4</button>
          </li>
          <li>
            <button onClick={this.handleSelection.bind(this, "N3")}> N3</button>
          </li>
          <li>
            <button onClick={this.handleSelection.bind(this, "N2")}> N2</button>
          </li>
          <li>
            <button onClick={this.handleSelection.bind(this, "N1")}> N1</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Levels;
