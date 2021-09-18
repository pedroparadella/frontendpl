import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { getPokemon, getTotalPokemons, IPokemon } from './services/api';

interface IPokeContext {
  page: IPokemon[];
  showCreateModal: boolean;
  setShowCreateModal: (v: boolean) => void;
  showDeleteModal: boolean;
  setShowDeleteModal: (v: boolean) => void;
  searchByName: (v: string) => void;
  loadNextPage: () => void;
  isSearch: boolean;
  clearSearch: () => void;
}

export const PokeContext = createContext<IPokeContext>({} as IPokeContext);

export const PokeProvider = ({ children }: { children: ReactNode }) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [searchResult, setSearchResult] = useState<IPokemon[]>([]);
  const [page, setPage] = useState<IPokemon[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const downloadFirstPage = async (): Promise<IPokemon[]> => {
    const promises = [];

    for (let i = 1; i < 16; i += 1) {
      promises.push(getPokemon(i));
    }

    return [...(await Promise.all(promises))];
  };

  const downloadAllPokemons = async (): Promise<IPokemon[]> => {
    const totalPokemons = await getTotalPokemons();
    const promises = [];

    for (let i = 1; i < totalPokemons + 1; i += 1) {
      promises.push(getPokemon(i));
    }

    return [...(await Promise.all(promises))];
  };

  const searchByName = (name: string) => {
    const resultSet = pokemons.filter(i => i.name.includes(name));
    setSearchResult(resultSet);
    setPage(resultSet.slice(0, 16));
    setIsSearch(true);
  };

  const clearSearch = useCallback(() => {
    setIsSearch(false);
    setSearchResult([]);
    setPage(pokemons.slice(0, 16));
  }, [pokemons]);

  const loadNextPage = () => {
    isSearch
      ? setPage(prevState => [...prevState, ...searchResult.slice(prevState.length, prevState.length + 16)])
      : setPage(prevState => [...prevState, ...pokemons.slice(prevState.length, prevState.length + 16)]);
  };

  const downloadContent = useCallback(async () => {
    setPage(await downloadFirstPage());
    setPokemons(await downloadAllPokemons());
  }, []);

  useEffect(() => {
    const pokemonsLocal = localStorage.getItem('@PokeExplorer:pokemons');

    if (pokemonsLocal) {
      const pokes = JSON.parse(pokemonsLocal);
      setPokemons(pokes);
      setPage(pokes.slice(0, 16));
    } else {
      downloadContent();
    }
  }, [downloadContent]);

  return (
    <PokeContext.Provider
      value={{
        page,
        showCreateModal,
        setShowCreateModal,
        showDeleteModal,
        setShowDeleteModal,
        searchByName,
        loadNextPage,
        clearSearch,
        isSearch,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};
