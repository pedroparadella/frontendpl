import axios from 'axios';

const API_URL = ' https://pokeapi.co/api/v2';

export const getPokemons = (info) =>
  axios({
    url: `${API_URL}/${info}`,
    method: 'get',
  })

export const filteredPokemons = (info) => 
  axios({
    url: `${API_URL}/pokemon/${info}`,
    method: 'get'
  })