import React, { Component } from 'react';
import './App.css';
// import styled from 'styled-components';
import CharList from './components/CharList';
import CharDetails from './components/CharDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    starwarsChars: []
  }

  render() {
    return (
      <div >

        <Router>
          <div className="App">
            <div className="Header">REACT WARS</div>
            <Route path="/" component={CharList} char={this.state} exact />
            <Route path="/:id" component={CharDetails} />
          </div>
        </Router>

      </div>
    );
  } // render()

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  } // componentDidMount()
} // App Component

export default App;
