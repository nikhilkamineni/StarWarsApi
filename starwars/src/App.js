import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import CharList from './components/CharList';
import CharDetails from './components/CharDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div>
            <div className="Header">REACT WARS</div>
            <Route path="/" component={CharList} exact />
            <Route path="/:id" component={CharDetails} />
          </div>
        </Router>

      </div>
    );
  } // render()
} // App Component

export default App;
