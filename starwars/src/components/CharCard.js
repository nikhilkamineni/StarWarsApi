import React, { Component } from 'react';
import styled from 'styled-components';

const CharCardStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 160px;
  height: 220px;
  padding: 15px;
  font-size: 0.8rem;
  background: rgba(176, 138, 49, 0.6);
  border-radius: 2%;
  margin: 2px;

  div {
    margin: 5px;
  }

  a {
	  color: black;
  }
  
  .name {
    text-shadow: 1px 1px #443e3e;
  }

  &:hover {
    background: rgba(176, 138, 49, 0.9); 
  }
`;

class CharCard extends Component {
  state = {
    homeworld: null,
    species: {}
  };

  render() {
    return (
      <CharCardStyles >
        <h4 className="name">{this.props.char.name}</h4>
        <div>Gender: {this.props.char.gender}</div>
        <div>Height: {this.props.char.height}cm</div>
        <div>Birth Year: {this.props.char.birth_year}</div>
        <div>Eye Color: {this.props.char.eye_color}</div>
        <div>Mass: {this.props.char.mass}kg</div>
        <div>Skin Color: {this.props.char.skin_color}</div>
      </CharCardStyles >
    );
  }
}

export default CharCard;