import styled from "styled-components";

// styles entire app, needed to set flex
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Header Styles
const HeaderMain = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  width: 100vw;
  font-size: 3rem;
  font-weight: 900;
  height: 8vh;
  background: #343a40;
  color: white;
  margin-bottom: 2vh;
  border-bottom: 3px solid #212529;
  h1 {
    padding: 0.7em;
  }
`;

// Main Container Styles
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  max-width: 600px;
  align-items: center;
  background: #219ebc;
  border: 3px solid #8ecae6;
  border-radius: 25px;
`;

// Levels Styles

const LevelsMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  h2 {
    font-size: 2rem;
    font-weight: 600;
    padding-top: 0.5vh;
    padding-bottom: 0.5vh;
    padding-left: 0.5em;
  }
  ul {
    display: flex;
    justify-content: center;
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
  max-width: 700px;
  width: 100%;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    padding-top: 0.5vh;
    padding-bottom: 0.5vh;
    padding-left: 0.5em;
  }
  ul {
    display: flex;
    justify-content: center;
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
    background: #023047;
    width: 60vw;
    height: 35vh;
    max-width: 500px;
    text-align: center;
    border: 3px solid #8ecae6;
    border-radius: 25px;
    h1 {
      margin-top: 2vh;
      font-size: 9rem;
      font-weight: 900;
      color: white;
    }
  }
`;

// Footer Styles

const Styles = {
  MainDiv: MainDiv,
  MainContainer: MainContainer,
  HeaderMain: HeaderMain,
  LevelsMain: LevelsMain,
  GrammarPointsMain: GrammarPointsMain,
  ControllerMain: ControllerMain,
};

export default Styles;
