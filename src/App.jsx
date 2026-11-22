import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("green");

  const handleBlue = () => {
    setBgColor("blue");
  };

  const handleGreen = () => {
    setBgColor("green");
  };

  const handleYellow = () => {
    setBgColor("yellow");
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        textAlign: "center"
      }}
    >
      <h2>React State and Events</h2>

      <button onClick={handleBlue}>
        Blue
      </button>

      <button onClick={handleGreen}>
        Green
      </button>

      <button onClick={handleYellow}>
        Yellow
      </button>
    </div>
  );
}

export default App;