import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* Header */}
      <header className='App-header'>
        <h1>Prasad Junghare</h1>
        <a className='App-button' href="#">Resume</a>
      </header>
      {/* Intro section */}
      <div className='App-introduction'>
        <h2>Prasad Junghare</h2>
        <h3>Frontend Developer</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quasi nemo? Fuga modi expedita dolorum accusamus, eligendi fugiat ea labore.</p>
      </div>
      {/* Socail Icons */}
      <div className='App-icons'>
        <a target="_blank"
          rel="noopener noreferrer" className='App-link' href="https://github.com/loremcodes">Github</a>
        <a target="_blank"
          rel="noopener noreferrer" className='App-link' href="https://insatgram.com/thejunghare">Instagram</a>
        <a target="_blank"
          rel="noopener noreferrer" className='App-link' href="#">LinkedIn</a>
      </div>
    </div>
  );
}

export default App;
