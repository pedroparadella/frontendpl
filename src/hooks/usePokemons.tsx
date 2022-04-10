import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { searchPokemon } from '../services/pokeApi';

import { Pokemon } from '../types/pokemon.type';

interface PokemonsProviderProps {
  children: ReactNode;
}

interface PokemonsContextData {
  pokemons: Pokemon[];
  pokemon: Pokemon;
  onSearchHandler: (name: string) => Promise<void>;
  getPokemons: () => Promise<void>;
}

export const PokemonsContext = createContext<PokemonsContextData>({} as PokemonsContextData)

export function PokemonsProvider({ children }: PokemonsProviderProps) {
  const baseUrl = 'https://pokeapi.co/api/v2/';
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loadMore, setLoadMore] = useState(`${baseUrl}pokemon?limit=8`);
  const [pokemon, setPokemon] = useState<any>([]);

  async function getPokemons() {
    const response = await fetch(loadMore);
    const data = await response.json();

    setLoadMore(data.next);

    function searchPokemon(result: Pokemon[]) {
      result.forEach(async (pokemon: Pokemon) => {
        const response = await fetch(`${baseUrl}pokemon/${pokemon.name}`);
        const data = await response.json();

        setPokemons(currentList => [...currentList, data]);
      });
    }
    searchPokemon(data.results);
  }

  useEffect(() => {
    getPokemons();
  }, []);

  async function onSearchHandler(name: string) {
    const result = await searchPokemon(name);
    setPokemon(result);
  }

  return (
    <PokemonsContext.Provider value={{
      pokemons,
      pokemon,
      onSearchHandler,
      getPokemons
    }}>
      {children}
    </PokemonsContext.Provider>
  )
}

export function usePokemons() {
  const context = useContext(PokemonsContext);

  return context;
}
