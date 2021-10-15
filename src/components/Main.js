import React, { Component } from "react";
import Header from "./Header"
import Footer from "./Footer"
import GrammarPoint from "./GrammarPoint"
import Controller from "./Controller"
import Levels from "./Levels"

class Main extends Component {
  render() {
      return <div>
          <Header></Header>
          <Levels></Levels>
          <GrammarPoint></GrammarPoint>
          <Controller></Controller>
          <Footer></Footer>
    </div>;
  }
}

export default Main;
