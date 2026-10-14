import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>Student Information</h1>

        <p><strong>Name:</strong> Abhimanyu</p>
        <p><strong>Course:</strong> BCA Cyber Security</p>
        <p><strong>College:</strong> T. John College</p>

        <button onClick={() => alert("Welcome, Abhimanyu!")}>
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;