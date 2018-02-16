import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../App.css'

const CharDetailsStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: auto;
  height: auto;
  padding: 20px 50px;
  font-size: 0.8rem;
  background: rgba(176, 138, 49, 0.8);
  border-radius: 2%;
  margin: 50px;

  div {
    margin: 5px;
    font-size: 1.5rem;
  }

  a {
	  color: black;
  }
  
  .name {
    text-shadow: 1px 1px #443e3e;
    padding: 10px;
  }

  .back {
    padding: 20px 0 5px 5px;
    text-decoration: underline;
    font-size: 1rem;
  }
`;

class CharDetails extends Component {
  state = {
    "Luke Skywalker": '1',
    "C-3PO": '2',
    "R2-D2": '3',
    "Darth Vader": '4',
    "Leia Organa": '5',
    "Owen Lars": '6',
    "Beru Whitesun lars": '7',
    "R5-D4": '8',
    "Biggs Darklighter": '9',
    "Obi-Wan Kenobi": '10',
    char: {},
    species: {},
    homeworld: null,
  }

  render() {
    return(
      <CharDetailsStyles>
        <h2 className="name">{this.state.char.name}</h2>
        <div>Gender: {this.state.char.gender}</div>
        <div>Birth Year: {this.state.char.birth_year}</div>
        <div>Height: {this.state.char.height}</div>
        <div>Mass: {this.state.char.mass}</div>
        <div>Skin Color: {this.state.char.skin_color}</div>
        <div>Eye Color: {this.state.char.eye_color}</div>
        <div>{this.state.char.species}</div>
        <div>{this.state.char.homeworld}</div>
        <Link to="/" className="back">Back</Link>
      </CharDetailsStyles>
    )
  }

  componentDidMount() {
    const urlId = this.state[this.props.match.params.id];

    fetch(`https://swapi.co/api/people/${urlId}/`)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ char: data });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
} 

export default CharDetails;