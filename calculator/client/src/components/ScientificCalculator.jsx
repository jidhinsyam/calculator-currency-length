import React, { useState } from "react";

export default function  () {
    const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    < >
     <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick("(")}>(</button>
        <button onClick={() => handleClick(")")}>)</button>
        <button onClick={() => handleClick("/")}>/</button>

        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>

        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={() => handleClick(".")}>.</button>
        <button onClick={() => handleClick("Math.sin(")}>sin</button>
<button onClick={() => handleClick("Math.cos(")}>cos</button>
<button onClick={() => handleClick("Math.tan(")}>tan</button>
<button onClick={() => handleClick("Math.log(")}>log</button>

        <button className="equals" onClick={calculate}>=</button>
      </div>
    </div>
     </ >
  )
}
