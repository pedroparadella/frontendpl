import { createContext, ReactNode, useContext } from 'react';

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';

interface ModalDeleteProps {
  children: ReactNode;
}

type ModalDeleteData = UseDisclosureReturn;

const ModalDeleteContext = createContext({} as ModalDeleteData);

export function ModalDeleteProvider({ children }: ModalDeleteProps) {
  const disclosure = useDisclosure();

  return (
    <ModalDeleteContext.Provider value={disclosure}>
      {children}
    </ModalDeleteContext.Provider>
  );
}

export const useModalDelete = () => useContext(ModalDeleteContext);
