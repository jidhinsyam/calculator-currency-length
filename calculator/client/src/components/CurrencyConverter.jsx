import React, { useState } from "react";

export default function  () {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("EUR");
    const [result, setResult] = useState(0);
  
    const exchangeRates = {
      USD: { EUR: 0.85, GBP: 0.75, INR: 74.0 },
      EUR: { USD: 1.18, GBP: 0.88, INR: 87.0 },
    };
  
    const convertCurrency = () => {
      const rate = exchangeRates[fromCurrency][toCurrency];
      setResult(amount * rate);
    };
    
  return (
    < > 
    <div className="currency-converter">
      <h2>Currency Converter</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <div className="currency-select">
        <select onChange={(e) => setFromCurrency(e.target.value)} value={fromCurrency}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
        </select>
        <span>to</span>
        <select onChange={(e) => setToCurrency(e.target.value)} value={toCurrency}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="INR">INR</option>
        </select>
      </div>
      <button onClick={convertCurrency}>Convert</button>
      
    </div><br></br>
    <div className="ans">
      <div className="result">Result: {result.toFixed(2)} {toCurrency}</div>
    </div>
    </ >
  )
}
