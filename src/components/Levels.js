import React, { Component } from "react";

class Levels extends Component {
    render() {
      const {clicks} = this.props
    return (
        <div className="levels">
            <h2> JLPT Level </h2>
        <ul>
          <li>
            <button onClick = {clicks}> N5</button>
          </li>
          <li>
            <button> N4</button>
          </li>
          <li>
            <button> N3</button>
          </li>
          <li>
            <button> N2</button>
          </li>
          <li>
            <button> N1</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Levels;
