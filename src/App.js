import React, { Component } from 'react';

import './App.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">C M S</h1>
        </header>
        <NavBar />
      </div>
    );
  }
}

export default App;
