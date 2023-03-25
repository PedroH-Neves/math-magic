import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Display from './Display';
import Quote from './Quote';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    const buttonName = event.target.innerText;
    const result = calculate(state, buttonName);
    setState(result);
  };

  const { total, next, operation } = state;

  return (
    <div>
      <div className="calculator-title">
        <p>
          <Quote />
        </p>
      </div>
      <div id="calculator">
        <div>
          <Display
            result={total}
            next={next}
            operation={operation}
          />
          <div id="calculator-items">
            <button onClick={handleClick} className="button orange" type="button">AC</button>
            <button onClick={handleClick} className="button orange" type="button">+/-</button>
            <button onClick={handleClick} className="button orange" type="button">%</button>
            <button onClick={handleClick} className="button orange" type="button">÷</button>
            <button onClick={handleClick} className="button" type="button">7</button>
            <button onClick={handleClick} className="button" type="button">8</button>
            <button onClick={handleClick} className="button" type="button">9</button>
            <button onClick={handleClick} className="button orange" type="button">x</button>
            <button onClick={handleClick} className="button" type="button">4</button>
            <button onClick={handleClick} className="button" type="button">5</button>
            <button onClick={handleClick} className="button" type="button">6</button>
            <button onClick={handleClick} className="button orange" type="button">-</button>
            <button onClick={handleClick} className="button" type="button">1</button>
            <button onClick={handleClick} className="button" type="button">2</button>
            <button onClick={handleClick} className="button" type="button">3</button>
            <button onClick={handleClick} className="button orange" type="button">+</button>
            <button onClick={handleClick} className="button" id="zero" type="button">0</button>
            <button onClick={handleClick} className="button" type="button">.</button>
            <button onClick={handleClick} className="button orange" type="button">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
