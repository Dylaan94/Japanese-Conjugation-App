import React, { Component } from "react";
import Header from "./Header"
import Footer from "./Footer"
import GrammarPoint from "./GrammarPoint"
import Controller from "./Controller"
import Levels from "./Levels"

import JLPTData from "./JLPTData"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            N5: JLPTData.N5,
            N4: JLPTData.N4,
            N3: JLPTData.N3,
            N2: JLPTData.N2,
            N1: JLPTData.N1
        }
        this.handleLevelsInput = this.handleLevelsInput.bind(this)
    }
    handleLevelsInput(data) {
        let levelChosen = data
        console.log("dealing with levels" + levelChosen)
    }


  render() {
      return (
        <div>
          <Header></Header>
          <Levels handleLevelsChange={this.handleLevelsInput}></Levels>
          <GrammarPoint></GrammarPoint>
          <div>
            <div>
                      <h1> {this.state.N5[0].name} </h1>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <Footer></Footer>
        </div>
      );
  }
}

export default Main;
