import React, { Component } from 'react';
import ListadePokemon from './ListadePokemon';

export default class Dashboard extends Component {
  render () {
    return (
        <div className="row">
            <div className="col">
                <ListadePokemon/>
            </div>
        </div>
    );
  }
}
