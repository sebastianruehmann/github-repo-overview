import React, { Component } from 'react';
import './App.css';
import HomePage from './HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Search Repos</h1>
        </header>
        <HomePage />
      </div>
    );
  }
}

export default App;
