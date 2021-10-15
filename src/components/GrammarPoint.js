import React, { Component } from "react";

class GrammarPoint extends Component {
  render() {
    return (
      <div>
        <div className="grammarPoint">
          <h2> Conjugation </h2>
          <ul>
            <li>
              <button> past form </button>
            </li>
            <li>
              <button> potential form </button>
            </li>
            <li>
              <button> passive form </button>
            </li>
            <li>
              <button> causative form </button>
            </li>
            <li>
              <button> te form </button>
            </li>
            <li>
              <button> masu form </button>
            </li>
            <li>
              <button> te form </button>
            </li>
            <li>
              <button> volitional form </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default GrammarPoint;
