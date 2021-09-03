import React, { Component } from 'react';
import axios from 'axios';

import CartaoPokemon from './CartaoPokemon';

export default class ListadePokemon extends Component {
  state = {
    url: 'https://pokeapi.co/api/v2/pokemon/',
    pokemon: null
  };

async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data['results'] });
}


  render () {
    return (
      <React.Fragment>
        {this.state.pokemon ? (
        <div className="row">
          {this.state.pokemon.map(pokemon => (
            <CartaoPokemon
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
            />
          ))}
        </div>
      ) : (
        <h1>Carregando...</h1>
      )} 
      </React.Fragment>
    );
  }
}
