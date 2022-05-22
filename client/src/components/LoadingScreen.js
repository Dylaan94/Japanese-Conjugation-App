import React from "react";

import Styles from "./styles/Styles"

import chopsticks from '../assets/images/chopsticks.gif'

const LoadingScreen = () => {
  return (
    <Styles.LoadingScreen>
      <div className="loadingScreen">
        <div className="loadingScreenTitle">
          <h1>Please Wait... loading vocabularly data!</h1>
        </div>
        <div className="loadingScreenAnimation">
          <img src={chopsticks} id= 'pleaseWaitGif' alt="loading..."></img>
        </div>
      </div>
    </Styles.LoadingScreen>
  );
};

export default LoadingScreen;
