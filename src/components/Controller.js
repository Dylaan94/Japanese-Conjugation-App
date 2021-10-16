import React, { Component } from "react";
import JLPTData from "./JLPTData";

class Controller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      N5: JLPTData.N5,
      N4: JLPTData.N4,
      N3: JLPTData.N3,
      N2: JLPTData.N2,
      N1: JLPTData.N1,
    };

  }

  render() {
    return (
      <div>
        <div>
          <h1> {this.state.N5[0].name}</h1>
        </div>
        <div>
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default Controller;
