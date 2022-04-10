import { createContext, ReactNode, useContext } from 'react';

import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';

interface DrawerFormProviderProps {
  children: ReactNode;
}

type DrawerFormData = UseDisclosureReturn;

const DrawerFormContext = createContext({} as DrawerFormData);

export function DrawerFormProvider({ children }: DrawerFormProviderProps) {
  const disclosure = useDisclosure();

  return (
    <DrawerFormContext.Provider value={disclosure}>
      {children}
    </DrawerFormContext.Provider>
  );
}

export const useDrawerForm = () => useContext(DrawerFormContext);
