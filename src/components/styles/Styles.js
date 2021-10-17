import styled from "styled-components";

// Main Container Styles
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Header Styles

const HeaderMain = styled.div``;

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
  GrammarPointsMain: GrammarPointsMain
};

export default Styles;
