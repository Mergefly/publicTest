import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is my demo React App!! This will be the best app ever :)</p>
        <Welcome />
        <p>
          <Counter />
        </p>
      </header>
    </div>
  );
}

export default App;
