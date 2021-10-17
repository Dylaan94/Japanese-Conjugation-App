import styled from "styled-components";

// Main Container Styles
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 90vh;
  margin-top: 5vh;
  align-items: center;
  background: green;
`;

// Header Styles

const HeaderMain = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  h1 {
    padding: 0.5em;
  }
`;

// Levels Styles

const LevelsMain = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }
  ul > li {
    padding-left: 1em;
    padding-right: 1em;
  }
  //button Styling
  button {
    width: 80px;
    height: 40px;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: bold;
    color: black;
    background: white;
    border: 1px solid black;
    box-shadow: 3px 3px 0 black, -3px -3px 0 black, -3px 3px 0 black,
      3px -3px 0 black;
    transition: 200ms ease-in-out;
  }
  button:hover {
    box-shadow: 10px 3px 0 black, -10px -3px 0 black;
  }
  button:focus {
    outline: none;
  }
`;

// Grammar Point Styles
const GrammarPointsMain = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    display: flex;
    flex-direction: row;
    list-style-type: none;
  }
  ul > li {
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 1em;
  }

  ul > li > button {
    align-items: center;
    text-align: center;
  }

  //Button styling
  button {
    width: 80px;
    height: 30px;

    cursor: pointer;
    font-size: 0.8rem;
    font-weight: bold;
    color: black;
    background: white;
    border: 1px solid black;
    box-shadow: 2px 2px 0 black, -2px -2px 0 black, -2px 2px 0 black,
      2px -2px 0 black;
    transition: 200ms ease-in-out;
    text-align: center;
  }
  button:hover {
    box-shadow: 6px 3px 0 black, -6px -3px 0 black;
  }
  button:focus {
    outline: none;
  }
`;

// Controller Styles
const ControllerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .textDisplayDiv {
    margin-top: 3vh;
    background: blue;
    width: 50vw;
    height: 35vh;
    text-align: center;
    h1 {
        margin-top: 5vh;
        font-size: 6em;
        font-weight: 900;
    }
  }
`;

// Footer Styles

const Styles = {
  MainContainer: MainContainer,
  HeaderMain: HeaderMain,
  LevelsMain: LevelsMain,
  GrammarPointsMain: GrammarPointsMain,
  ControllerMain: ControllerMain,
};

export default Styles;
