import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { getPokemon, getTotalPokemons, IPokemon } from './services/api';

export const PokeContext = createContext<IPokemon[]>([]);

export const PokeProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState<IPokemon[]>([]);

  const loadPokemons = useCallback(async () => {
    await getTotalPokemons();
    const promises = [];

    for (let i = 1; i < 16; i += 1) {
      promises.push(getPokemon(i));
    }

    await Promise.all(promises).then(values => {
      setPage(values);
    });
  }, []);

  useEffect(() => {
    loadPokemons();
  }, [loadPokemons]);

  return <PokeContext.Provider value={page}>{children}</PokeContext.Provider>;
};
