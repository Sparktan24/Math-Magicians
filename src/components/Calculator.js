import './Calculator.scss';
import { useState } from 'react';
import calculate from '../logic/calculate';
import operate from '../logic/operate';

function Calculator() {
  const [calcState, setCalcState] = useState({});

  /*   function handleClick(e) {
      const { name } = e.target;
      setCalcState(calculate(calcState, name));
    } */

  const handleClick = (event) => {
    console.log('7 Clicked');
  };
  return (
    <section id="calculator">
      <table>
        <tbody>
          <tr className="result">
            <td>0</td>
          </tr>
          <tr className="buttons-row">
            <td><button type="button">AC</button></td>
            <td><button type="button">+/-</button></td>
            <td><button type="button">%</button></td>
            <td><button type="button" className="orange">÷</button></td>
          </tr>
          <tr className="buttons-row">
            <td><button type="button" onClick={handleClick} name="7">7</button></td>
            <td><button type="button">8</button></td>
            <td><button type="button">9</button></td>
            <td><button type="button" className="orange">x</button></td>
          </tr>
          <tr className="buttons-row">
            <td><button type="button">4</button></td>
            <td><button type="button">5</button></td>
            <td><button type="button">6</button></td>
            <td><button type="button" className="orange">-</button></td>
          </tr>
          <tr className="buttons-row">
            <td><button type="button">1</button></td>
            <td><button type="button">2</button></td>
            <td><button type="button">3</button></td>
            <td><button type="button" className="orange">+</button></td>
          </tr>
          <tr className="buttons-last-row">
            <td><button type="button">0</button></td>
            <td><button type="button">.</button></td>
            <td><button type="button" className="orange">*</button></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Calculator;
