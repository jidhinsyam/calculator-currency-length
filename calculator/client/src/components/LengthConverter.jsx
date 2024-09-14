import React, { useState } from "react";

export default function LengthConverter() {
    const [inputLength, setInputLength] = useState(0);
    const [fromUnit, setFromUnit] = useState("meters");
    const [toUnit, setToUnit] = useState("kilometers");
    const [convertedLength, setConvertedLength] = useState(0);
  
    const conversionFactors = {
      meters: { kilometers: 0.001, miles: 0.000621371, feet: 3.28084 },
      kilometers: { meters: 1000, miles: 0.621371, feet: 3280.84 },
    };
  
    const convertLength = () => {
      const factor = conversionFactors[fromUnit][toUnit];
      setConvertedLength(inputLength * factor);
    };
  return (
    < > 
     <div className="length-converter">
      <h2>Length Converter</h2>
      <input
        type="number"
        value={inputLength}
        onChange={(e) => setInputLength(e.target.value)}
        placeholder="Enter length"
      />
      <div className="unit-select">
        <select onChange={(e) => setFromUnit(e.target.value)} value={fromUnit}>
          <option value="meters">Meters</option>
          <option value="kilometers">Kilometers</option>
          <option value="miles">Miles</option>
        </select>
        <span>to</span>
        <select onChange={(e) => setToUnit(e.target.value)} value={toUnit}>
          <option value="meters">Meters</option>
          <option value="kilometers">Kilometers</option>
          <option value="miles">Miles</option>
        </select>
      </div>
      <button onClick={convertLength}>Convert</button>
      
      
    </div>
    <br></br>
    <div className="ans">
    <div className="result">Converted Length: {convertedLength} {toUnit}</div>
    </div>
    </ >
  )
}
