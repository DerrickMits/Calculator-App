mport { useState } from 'react';

const CalculatorApp = () => {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState('');

  const handleNumberClick = (number) => {
    setCurrentValue(currentValue === '0' ? number : currentValue + number);
  };

  const handleOperatorClick = (op) => {
    if (operator) {
      handleEqualsClick();
    }
    setPreviousValue(currentValue);
    setOperator(op);
    setCurrentValue('0');
  };

  const handleEqualsClick = () => {
    if (!operator) return;
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);
    let result;

    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num2 !== 0 ? num1 / num2 : 'Error';
        break;
      default:
        result = 0;
    }

    setCurrentValue(result.toString());
    setPreviousValue('');
    setOperator('');
  };

  const handleClearClick = () => {
    setCurrentValue('0');
    setPreviousValue('');
    setOperator('');
  };

  return (
    <div className="calculator">
      <div className="display">{currentValue}</div>
      <div className="keypad">
        {['7', '8', '9', '/'].map((item) => (
          <button key={item} onClick={() => handleNumberClick(item)}>
            {item}
          </button>
        ))}
        {['4', '5', '6', '*'].map((item) => (
          <button key={item} onClick={() => handleNumberClick(item)}>
            {item}
          </button>
        ))}
        {['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleNumberClick(item)}>
            {item}
          </button>
        ))}
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={handleClearClick}>C</button>
        <button onClick={handleEqualsClick}>=</button>
        <button onClick={() => handleOperatorClick('+')}>+</button>
      </div>
    </div>
  );
};

export default CalculatorApp;
