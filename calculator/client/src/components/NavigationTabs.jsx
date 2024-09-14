import React from 'react'

export default function NavigationTabs({ setActiveTab, activeTab }) {
  return (
    < > 
     <div className="tabs">
      <button
        className={activeTab === "calculator" ? "active-tab" : ""}
        onClick={() => setActiveTab("calculator")}
      >
        Calculator
      </button>
      <button
        className={activeTab === "currency" ? "active-tab" : ""}
        onClick={() => setActiveTab("currency")}
      >
        Currency Converter
      </button>
      <button
        className={activeTab === "length" ? "active-tab" : ""}
        onClick={() => setActiveTab("length")}
      >
        Length Converter
      </button>
    </div>
    </ >
  )
}
