import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Styles from "./styles/Styles";

class Footer extends Component {
  render() {
    const githubIcon = <FontAwesomeIcon icon={faGithub} />;
    return (
      <Styles.FooterMain>
        <Styles.FooterContents>
          <a href="www.github.com/dylaan94">{githubIcon}</a>
        </Styles.FooterContents>
      </Styles.FooterMain>
    );
  }
}

export default Footer;
