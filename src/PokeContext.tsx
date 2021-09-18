import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { getAllPokemons, getFirstPage, IPokemon } from './services/api';
import 'react-toastify/dist/ReactToastify.css';

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
  WIP: () => void;
}

export const PokeContext = createContext<IPokeContext>({} as IPokeContext);

export const PokeProvider = ({ children }: { children: ReactNode }) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [searchResult, setSearchResult] = useState<IPokemon[]>([]);
  const [page, setPage] = useState<IPokemon[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

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

  // GraphQL Experimental
  const downloadContent = useCallback(async () => {
    setPage(await getFirstPage());
    const allPokemons = await getAllPokemons();
    setPokemons(allPokemons);
    localStorage.setItem('@PokeExplorer:pokemons', JSON.stringify(allPokemons));
  }, []);

  const WIP = () => {
    toast.error('Funcionalidade ainda não implementada.');
  };

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
        WIP,
      }}
    >
      {children}
      <ToastContainer />
    </PokeContext.Provider>
  );
};
