import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CharCard from './CharCard';

const CharContainerStyles = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  max-width: 1300px;
  min-width: 900px;
  margin-top: 10px;
`

class CharList extends Component {
  state = {
    starwarsChars: []
  };
  
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
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

  render() {
    return (
        <div className="CharList">
          <CharContainerStyles>
            {this.state.starwarsChars.map((char, i) => {
              return (
                <Link to={`/${char.name}`} key={i} >
                  <CharCard 
                  key={i}
                  char={char}
                  />
                </Link>
              )
            })}
          </CharContainerStyles>
        </div>
    ); // return
  } // render()
} // CharList component

export default CharList;
