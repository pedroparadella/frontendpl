import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import Header from '../components/Header';
import DrawerForm from '../components/DrawerForm';
import { ModalClimaTempo } from '../components/Modals/ModalClimaTempo';
import ModalDelete from '../components/Modals/ModalDelete';

import { DrawerFormProvider } from '../contexts/DrawerFormContext';
import { ModalDeleteProvider } from '../contexts/Modals/ModalDeleteContext';
import { ModalClimaTempoProvider } from '../contexts/Modals/ModalClimaTempoContext';

import { PokemonsProvider } from '../hooks/usePokemons';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DrawerFormProvider>
        <ModalDeleteProvider>
          <ModalClimaTempoProvider>
            <PokemonsProvider>
              <Header />
              <DrawerForm />
              <ModalDelete />
              <ModalClimaTempo />
              <Component {...pageProps} />
            </PokemonsProvider>
          </ModalClimaTempoProvider>
        </ModalDeleteProvider>
      </DrawerFormProvider>
    </ChakraProvider>
  );
}

export default MyApp;
