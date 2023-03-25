import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="calculator">
        <div id="calculator-display">
          <input id="line0" />
        </div>
        <div id="calculator-items">
          <button className="button" type="button">AC</button>
          <button className="button" type="button">+/-</button>
          <button className="button" type="button">%</button>
          <button className="button orange" type="button">÷</button>
          <button className="button" type="button">7</button>
          <button className="button" type="button">8</button>
          <button className="button" type="button">9</button>
          <button className="button orange" type="button">x</button>
          <button className="button" type="button">4</button>
          <button className="button" type="button">5</button>
          <button className="button" type="button">6</button>
          <button className="button orange" type="button">-</button>
          <button className="button" type="button">1</button>
          <button className="button" type="button">2</button>
          <button className="button" type="button">3</button>
          <button className="button orange" type="button">+</button>
          <button className="button" id="zero" type="button">0</button>
          <button className="button" type="button">,</button>
          <button className="button orange" type="button">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
