import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import CharList from './components/CharList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CharList />
        <div className="Header">REACT WARS</div>
      </div>
    );
  }
}

export default App;
