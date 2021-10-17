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
    width: 4em;
    height: 1.8em;
    cursor: pointer;
    font-size: 1.4rem;
    font-weight: bold;
    color: black;
    background: white;
    border: 1px solid black;
    box-shadow: 3px 3px 0 black, -3px -3px 0 black, -3px 3px 0 black,
      3px -3px 0 black;
    transition: 500ms ease-in-out;
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
  }
`;

// Controller Styles

// Footer Styles

const Styles = {
  MainContainer: MainContainer,
  HeaderMain: HeaderMain,
  LevelsMain: LevelsMain,
  GrammarPointsMain: GrammarPointsMain,
};

export default Styles;
