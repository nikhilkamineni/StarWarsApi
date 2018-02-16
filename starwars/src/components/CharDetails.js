import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css'

const CharDetailsStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: auto;
  height: auto;
  padding: 50px;
  font-size: 0.8rem;
  background: rgba(176, 138, 49, 0.8);
  border-radius: 2%;
  margin: 2px;

  div {
    margin: 5px;
    /* text-shadow: 0px 1px #000; */
  }

  a {
	  color: black;
  }
  
  .name {
    text-shadow: 1px 1px #443e3e;
    margin: 20px 0;
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
    char: {}
  }

  render() {
    return(
      <CharDetailsStyles>
        {/* <h1 class="Header">React Wars</h1> */}
        {/* <h1>{this.props.match.params.id}</h1> */}
        <h2 className="name">{this.state.char.name}</h2>
        <h3>Gender: {this.state.char.gender}</h3>
        <h3>Birth Year: {this.state.char.birth_year}</h3>
        <h3>Height: {this.state.char.height}</h3>
        <h3>Mass: {this.state.char.mass}</h3>
        <h3>Skin Color: {this.state.char.skin_color}</h3>
        <h3>Eye Color: {this.state.char.eye_color}</h3>
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
        console.log(this.state);
      })
      .catch(err => {
        throw new Error(err);
      });
  }

}

export default CharDetails;