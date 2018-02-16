import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CharCard from './CharCard';

const CharContainerStyles = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  min-width: 400px;
  margin-top: 10px;
`;

class CharList extends Component {
  state = {
    starwarsChars: []
  };
  
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

    console.log(this.props.param)
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
