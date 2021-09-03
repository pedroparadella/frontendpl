import React, { Component } from 'react';

import styled from 'styled-components';

const Sprite = styled.img`
  width: 5em;
  height: 5em;
`;

export default class CartaoPokemon extends Component {
  state = {
    name:'',
    imageUrl:'',
    pokemonIndex:'',
    imageLoading: true,
    toManyRequests: false
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
  
    this.setState({
      name,
      imageUrl,
      pokemonIndex
    });
  }


  render () {
    return (
        <div className='col-md-3 col-sm-6 mb-5'>
            <div className="card">
                <h5 className="card-header">{this.state.pokemonIndex}</h5>
                <Sprite
                  className="card-img-top rounded mx-auto mt-2"
                  onLoad={() => this.setState({ imageLoading: false })}
                  onError={() => this.setState({ toManyRequests: true })}
                  src={this.state.imageUrl}
                  />
                  <div className="card-body mx-auto">
                      <h6 className="card-title ">
                        {this.state.name
                          .toLowerCase()
                          .split(' ')
                          .map(
                            letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                          )
                          .join(' ')}               
                      </h6>
                </div>
            <button class="modal-btn">Editar</button>
            <button class="modal-btn">Excluir</button>
            </div>
            <div class="modal-bg">
              <div class="modal">
                <h2>Não está funcionando este botão !</h2>
              </div>
            </div>
        </div>
    );
  }
}
