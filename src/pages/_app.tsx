import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import Header from '../components/Header';

import { DrawerFormProvider } from '../contexts/DrawerFormContext';

import { ModalDeleteProvider } from '../contexts/Modals/ModalDeleteContext';
import { ModalClimaTempoProvider } from '../contexts/Modals/ModalClimaTempoContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DrawerFormProvider>
        <ModalDeleteProvider>
          <ModalClimaTempoProvider>
            <Header />
            <Component {...pageProps} />
          </ModalClimaTempoProvider>
        </ModalDeleteProvider>
      </DrawerFormProvider>
    </ChakraProvider>
  );
}

export default MyApp;
