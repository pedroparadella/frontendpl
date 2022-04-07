import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';

import Header from '../components/Header';

import { DrawerFormProvider } from '../contexts/DrawerFormContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DrawerFormProvider>
        <Header />
        <Component {...pageProps} />
      </DrawerFormProvider>
    </ChakraProvider>
  );
}

export default MyApp;
