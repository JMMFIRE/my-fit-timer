import React from 'react';
import logo from './logo.svg';
import './App.css';

const startClick = () => {
    // call function
}

const endClick = () => {
    //call function
}

function App() {
    return (

        <div className="App">
            <header className="App-header">
                <h1>MyFitTimer Application</h1>
                <div id="time">[time]</div>
                <div id="padding">
                    <button onClick={startClick}>Start Timer</button> &nbsp;&nbsp;&nbsp; 
                    <button onClick={endClick}>End Timer</button>
                </div>
            </header>
        </div>

    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

              <button onClick={startClick}>Start Timer</button>
              <button onClick={endClick}>End Timer</button>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
