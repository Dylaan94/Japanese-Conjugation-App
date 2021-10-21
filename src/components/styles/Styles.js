import styled from "styled-components";

// styles entire app, needed to set flex
const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// Header Styles
const HeaderMain = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  width: 100vw;
  font-weight: 900;
  height: 8vh;
  background: #343a40;
  color: white;
  border-bottom: 3px solid #212529;
  h1 {
    padding: 0.7em;
    font-size: 4.5vmin;
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
  margin-bottom: 3vh;
  margin-top: 3vh;
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
    border: 1px solid #8ecae6;
    border-radius: 5px;
    box-shadow: 3px 3px 0 #8ecae6, -3px -3px 0 #8ecae6, -3px 3px 0 #8ecae6,
      3px -3px 0 #8ecae6;
    transition: 200ms ease-in-out;
  }
  button:hover {
    box-shadow: 10px 3px 0 #8ecae6, -10px -3px 0 #8ecae6;
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
    border: 1px solid #8ecae6;
    border-radius: 5px;
    box-shadow: 2px 2px 0 #8ecae6, -2px -2px 0 #8ecae6, -2px 2px 0 #8ecae6,
      2px -2px 0 #8ecae6;
    transition: 200ms ease-in-out;
    text-align: center;
  }
  button:hover {
    box-shadow: 6px 3px 0 #8ecae6, -6px -3px 0 #8ecae6;
  }
  button:focus {
    outline: none;
  }
`;

// CurrentSelections tyles

const CurrentSelectionMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: orange;
  width: 60vw;
  max-width: 500px;
  height: 8%;
  border-radius: 5px;
  h2 {
    height: 50%;
    font-size: 1.5rem;
    font-weight: 900;
  }
  h3 {
    height: 50%;
    font-size: 1rem;
    font-weight: 600;
  }
`;

// Controller Styles
const ControllerMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .textDisplayDiv {
    margin-top: 2vh;
    background: #023047;
    width: 80vw;
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
  input {
    margin-top: 1vh;
    width: 50vw;
    max-width: 400px;
    height: 4vh;
    border-radius: 10px;
    text-align: center;
    font-size: 2em;
    font-weight: 900;
    border: 2px solid #8ecae6;
  }
`;

// Footer Styles

const FooterMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 4vh;
  width: 100vw;
  background: black;
  position: absolute;
  left: 0;
  bottom: 0;
  border-top: 3px solid #212529;
  background: #343a40;
`;

const Styles = {
  MainDiv: MainDiv,
  MainContainer: MainContainer,
  HeaderMain: HeaderMain,
  LevelsMain: LevelsMain,
  GrammarPointsMain: GrammarPointsMain,
  CurrentSelectionMain: CurrentSelectionMain,
  ControllerMain: ControllerMain,
  FooterMain: FooterMain,
};

export default Styles;
