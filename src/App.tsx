import { Dashboard } from './pages/Dashboard';
import { PokeProvider } from './PokeContext';
import { GlobalStyle } from './styles/global';

export const App = () => {
  return (
    <PokeProvider>
      <Dashboard />
      <GlobalStyle />
    </PokeProvider>
  );
};
