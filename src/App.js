import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my demo React App!!
        </p>
        <Welcome />
      </header>
    </div>
  );
}

export default App;
