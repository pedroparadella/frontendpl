import axios from 'axios';

const ITEMS_PER_PAGE = 16;

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export interface IPokemon {
  name: string;
  image: string;
}

export const getPage = async (pageNumber: number): Promise<void> => {
  const response = api.get('?offset=0&limit=16');
  console.log(response);
};

export const getPokemon = async (id: number): Promise<IPokemon> => {
  const { data } = await api.get(`pokemon/${id}`);
  return { name: data.name, image: data.sprites.other['official-artwork'].front_default };
};

export const getTotalPokemons = async (): Promise<number> => {
  const { data } = await api.get('pokemon-species/?offset=0&limit=1');
  return data.count;
};
