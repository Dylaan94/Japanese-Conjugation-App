import React, { Component } from "react";
// component imports
import Header from "./Header";
import Footer from "./Footer";
import GrammarPoint from "./GrammarPoint";
import CurrentSelection from "./CurrentSelection";
import Controller from "./Controller";
import Levels from "./Levels";
import PleaseWaitModal from "./LoadingScreen";

// style imports
import Styles from "./styles/Styles";

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
      randomised: {
        name: "テスト",
        dictionaryForm: "てすと",
        english: "Test",
        verbType: "Noun",
      },
      textInputValue: "",
      currentLevel: "",
      currentGrammar: "",
      correctConjugation: "", // recieve this from grammar point component
      grammarRefreshReq: false, // when true generates new answer
      hasData: false,
    };
    this.handleLevelsInput = this.handleLevelsInput.bind(this);
    this.handleGrammarInput = this.handleGrammarInput.bind(this);
    this.handleRandomisation = this.handleRandomisation.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleCorrectInput = this.handleCorrectInput.bind(this);
    this.checkTextInput = this.checkTextInput.bind(this);
    this.loadJLPTData = this.loadJLPTData.bind(this);
    this.loadJLPTData_FromStorage = this.loadJLPTData_FromStorage.bind(this);
  }

  // calls all JLPT data from Jisho API
  loadJLPTData = () => {
    // checks if data has already been cached and saved into storage
    if (localStorage.getItem("n5Data") !== null) {
      setTimeout(() => {
        this.loadJLPTData_FromStorage();
      }, 3000);
    } else {
      // get all data first and then add to state
      Promise.all([
        fetch("http://localhost:9000/n5Data"),
        fetch("http://localhost:9000/n4Data"),
      ])
        .then((res) => {
          // map through results and run test()
          Promise.all(
            res.map((res) => {
              return res.text();
            })
            // organised into variables and parsed for storing in state
          ).then((data) => {
            let n5Data = JSON.parse(data[0]);
            let n4Data = JSON.parse(data[1]);
            localStorage.setItem("n5Data", JSON.stringify(n5Data)); // stringify and send to local storage for cacheing
            localStorage.setItem("n4Data", JSON.stringify(n4Data));
            this.setState(
              {
                N5: n5Data,
                N4: n4Data,
              },
              () => {
                setTimeout(() => {
                  this.setState({
                    hasData: true,
                  });
                }, 2000);

                console.log(this.state);
                console.log(localStorage);
              }
            );
          });
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("data loaded");
        });
    }
  };

  // calls data from cache
  loadJLPTData_FromStorage = () => {
    // set state
    this.setState({
      hasData: true,
    });

    console.log("loading from storage");
    let n5Data = JSON.parse(localStorage.getItem("n5Data"));
    let n4Data = JSON.parse(localStorage.getItem("n4Data"));
    this.setState(
      {
        N5: n5Data,
        N4: n4Data,
      },
      () => {
        console.log(this.state);
        console.log("data loaded");
      }
    );
  };

  handleLevelsInput = (data) => {
    let selectedLevelArray = this.state[data];
    this.setState({
      selected: selectedLevelArray,
      currentLevel: data,
    });
    this.handleRandomisation(selectedLevelArray);
  };

  handleGrammarInput = (chosenGrammar, answer) => {
    // set grammar and answer in state
    this.setState(
      {
        currentGrammar: chosenGrammar,
        correctConjugation: answer,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleRandomisation = (array) => {
    // adds random item from selected level arary into randomised
    // randomised is then sent to the controller which displays the word
    // forces grammarPoint component to call function again to create new answer
    const min = 0;
    const max = array.length;
    const random = Math.floor(min + Math.random() * (max - min));
    this.setState(
      {
        randomised: array[random],
        grammarRefreshReq: true, // refresh grammar component to get new answer
      },
      () => {
        console.log(this.state);
        this.setState({
          grammarRefreshReq: false, // reset to false
        });
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
  // when input is correct, call a new verb
  handleCorrectInput = () => {
    let data = this.state.selected;
    this.setState(
      {
        textInputValue: "", // reset input value
        correctConjugation: "", // reset conjugation
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
      this.state.textInputValue === "" &&
      this.state.correctConjugation === ""
    ) {
      return;
    } else if (
      this.state.textInputValue.trim() == this.state.correctConjugation
    ) {
      this.handleCorrectInput();
    }
  };

  componentDidMount() {
    this.loadJLPTData();
  }

  render() {
    return (
      <>
        {this.state.hasData ? <></> : <PleaseWaitModal></PleaseWaitModal>}
        <Styles.MainDiv>
          <Header></Header>
          <Styles.MainContainer>
            <Levels handleLevelsChange={this.handleLevelsInput}></Levels>
            <GrammarPoint
              handleGrammarChange={this.handleGrammarInput}
              randomisedValue={this.state.randomised}
              currentGrammar={this.state.currentGrammar}
              grammarRefreshReq={this.state.grammarRefreshReq}
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
      </>
    );
  }
}

export default Main;
