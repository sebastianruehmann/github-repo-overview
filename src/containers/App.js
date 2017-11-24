import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Contributors-Map</h1>
        </header>
        <HomePage />
      </div>
    );
  }
}

export default App;
