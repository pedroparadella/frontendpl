import { Dashboard } from './pages/Dashboard';
import { PokeContext } from './PokeContext';
import { GlobalStyle } from './styles/global';

export const App = () => {
  return (
    <PokeContext.Provider value={[]}>
      <Dashboard />
      <GlobalStyle />
    </PokeContext.Provider>
  );
};
