import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export interface IPokemon {
  id: number;
  name: string;
  image: string;
}

export const getPokemon = async (id: number): Promise<IPokemon> => {
  const { data } = await api.get(`pokemon/${id}`);
  return { id: data.id, name: data.name, image: data.sprites.other['official-artwork'].front_default };
};

export const getTotalPokemons = async (): Promise<number> => {
  const { data } = await api.get('pokemon-species/?offset=0&limit=1');
  return data.count;
};
