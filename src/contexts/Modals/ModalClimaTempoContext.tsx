import { createContext, ReactNode, useContext } from 'react';

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';

interface ModalClimaTempoProps {
  children: ReactNode;
}

type ModalClimaTempoData = UseDisclosureReturn;

const ModalClimaTempoContext = createContext({} as ModalClimaTempoData);

export function ModalClimaTempoProvider({ children }: ModalClimaTempoProps) {
  const disclosure = useDisclosure();

  return (
    <ModalClimaTempoContext.Provider value={disclosure}>
      {children}
    </ModalClimaTempoContext.Provider>
  );
}

export const useModalClimaTempo = () => useContext(ModalClimaTempoContext);
