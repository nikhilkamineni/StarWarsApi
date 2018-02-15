import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CharStyles = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 18%;
  height: 220px;
  padding: 15px;
  font-size: 0.8rem;
  background: rgba(176, 138, 49, 0.6);
  border-radius: 2%;
  margin: 2px;

  div {
    margin: 5px;
    /* text-shadow: 0px 1px #000; */
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
    species: ''
  };

  render() {
    return (
      <CharStyles >
        <h4>{this.props.char.name}</h4>
        <div>Gender: {this.props.char.gender}</div>
        <div>Height: {this.props.char.height}cm</div>
        <div>Species: {this.state.species.name}</div>
        
        <div>Birth Year: {this.props.char.birth_year}</div>
        {/* <div className="created">{this.props.char.created}</div> */}
        {/* <div className="edited">{this.props.char.edited}</div> */}
        <div>Eye Color: {this.props.char.eye_color}</div>
        {/* {this.props.char.films} */}
        
        <div>
        Homeworld: {this.state.homeworld !== null ? this.state.homeworld.name : null}
        </div>
        <div>Mass: {this.props.char.mass}kg</div>
        <div>Skin Color: {this.props.char.skin_color}</div>
        {/* {this.props.char.starships} */}
        {/* {this.props.char.vehicles} */}
      </CharStyles >
    );
  }

  componentDidMount() {
    fetch(this.props.char.homeworld)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ homeworld: data });
      })
      .catch(err => {
        throw new Error(err);
      });

    fetch(this.props.char.species)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ species: data });
        console.log(this.state);
      })
      .catch(err => {
        throw new Error(err);
      })
  }
}

export default CharCard;