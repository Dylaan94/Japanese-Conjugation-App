import React, { Component } from "react";
// component imports
import Header from "./Header";
import Footer from "./Footer";
import GrammarPoint from "./GrammarPoint";
import CurrentSelection from "./CurrentSelection";
import Controller from "./Controller";
import Levels from "./Levels";

// style imports
import Styles from "./styles/Styles";
// library imports
import * as wanakana from "wanakana";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      N5: "",
      N4: "",
      N3: "",
      N2: "",
      N1: "",
      selected: [],
      randomised: { name: "テスト" },
      textInputValue: "",
      currentLevel: "",
      currentGrammar: "",
      apiResponse: "",
    };
    this.handleLevelsInput = this.handleLevelsInput.bind(this);
    this.handleGrammarInput = this.handleGrammarInput.bind(this);
    this.handleRandomisation = this.handleRandomisation.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleCorrectInput = this.handleCorrectInput.bind(this);
    this.checkTextInput = this.checkTextInput.bind(this);
    this.loadJLPTData = this.loadJLPTData.bind(this);
  }

  // calls all JLPT data from Jisho API
  loadJLPTData = () => {
    // get all data first and then add to state
    Promise.all([
      fetch("http://localhost:9000/n5Data"),
      fetch("http://localhost:9000/n4Data"),
    ]).then((res) => {
      // map through results and run test()
      Promise.all(
        res.map((res) => {
          return res.text(); 
        })
        // organised into variables and parsed for storing in state
      ).then((data) => {
        let n5Data = JSON.parse(data[0]);
        let n4Data = JSON.parse(data[1]);
        this.setState(
          {
            N5: n5Data,
            N4: n4Data,
          },
          () => {
            console.log(this.state);
          }
        );
      });
    }).catch(() => {
      console.log("error blud")
    });

    // fetch("http://localhost:9000/n5Data")
    //   .then((res) => res.text())
    //   .then((res) => {
    //     let n5Data = JSON.parse(res);
    //     this.setState(
    //       {
    //         N5: n5Data,
    //       },
    //       () => {
    //         console.log(this.state);
    //       }
    //     );
    //   })
    //   .catch(() => {
    //     // error handling
    //     console.log("error");
    //   });
  };

  // callAPItest = () => {
  //   fetch("http://localhost:9000/jishoAPI")
  //     .then((res) => res.text())
  //     .then((res) => console.log(JSON.parse(res)));
  //    .then(res => this.setState({ apiResponse: res }));
  // };

  handleLevelsInput = (data) => {
    let selectedLevelArray = this.state[data];
    this.setState({
      selected: selectedLevelArray,
      currentLevel: data,
    });
    this.handleRandomisation(selectedLevelArray);
  };

  handleGrammarInput = (data) => {
    // map out the grammar point thats needed and then store in state.
    let selectedLevelKey = this.state.currentLevel;
    let selectedLevelArray = this.state[selectedLevelKey];

    // returns array of the selected grammar point
    // is this doing anything??
    let selectedGrammarArray = selectedLevelArray.map((e) => {
      let key = data;
      return e[key];
    });
    console.log(selectedGrammarArray);

    // set grammar in state
    this.setState(
      {
        currentGrammar: data,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleRandomisation = (array) => {
    // adds random item from selected level arary into randomised
    // randomised is then sent to the controller which displays the word
    const min = 0;
    const max = array.length;
    const random = Math.floor(min + Math.random() * (max - min));
    this.setState(
      {
        randomised: array[random],
      },
      () => {
        console.log(this.state);
      }
    );
    console.log(random);
    console.log(array);
  };

  handleTextInput = (e) => {
    // update state with new text value dynamically
    let value = e.target.value;

    this.setState(
      {
        textInputValue: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  // move into a single function
  handleCorrectInput = () => {
    let data = this.state.selected;
    this.setState(
      {
        textInputValue: "", // reset input value
      },
      () => {
        this.handleRandomisation(data); // call new verb
      }
    );
  };

  checkTextInput = () => {
    let selectedGrammar = this.state.currentGrammar;
    console.log(selectedGrammar);
    // checks input value against randomly assigned verb and then runs
    // checks selected grammar point too
    // trim is used to remove extra space added by wanakana library
    if (
      this.state.textInputValue.trim() == this.state.randomised[selectedGrammar]
    ) {
      this.handleCorrectInput();
    }
  };

  componentDidMount() {
    this.loadJLPTData();
  }

  render() {
    return (
      <Styles.MainDiv>
        <Header></Header>
        <Styles.MainContainer>
          <Levels handleLevelsChange={this.handleLevelsInput}></Levels>
          <GrammarPoint
            handleGrammarChange={this.handleGrammarInput}
          ></GrammarPoint>
          <CurrentSelection
            currentLevel={this.state.currentLevel}
            currentGrammar={this.state.currentGrammar}
          ></CurrentSelection>
          <Controller
            randomisedValue={this.state.randomised}
            handleTextInput={this.handleTextInput}
            checkTextInput={this.checkTextInput}
            value={this.state.textInputValue}
          ></Controller>
          {console.log(this.state.apiResponse)}
        </Styles.MainContainer>
        <Footer></Footer>
      </Styles.MainDiv>
    );
  }
}

export default Main;
