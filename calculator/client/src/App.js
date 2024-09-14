import React, { useState } from "react";

import Scientific from './pages/Scientific';
import Currency from './pages/Currency';
import Length from './pages/Length';
import './App.css';  // Assuming the CSS styles are in App.css

export default function App() {
  const [activeTool, setActiveTool] = useState("calculator");

  const renderTool = () => {
    switch (activeTool) {
      case "calculator":
        return <Scientific />;
      case "currency":
        return <Currency/>;
      case "length":
        return <Length />;
      default:
        return <Scientific />;
    }
  };

  return (
    <>
      

      <div className="app-container">
      <div className="video-container">
        <video autoPlay muted loop>
          <source src="bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        <div className="tool-buttons">
          <button onClick={() => setActiveTool("calculator")}>Scientific Calculator</button>
          <button onClick={() => setActiveTool("currency")}>Currency Converter</button>
          <button onClick={() => setActiveTool("length")}>Length Converter</button>
        </div>

        <div className="content">
          {renderTool()}
        </div>
      </div>
    </>
  );
}
