import React, { createContext, useState } from "react";

export const MainContext = createContext({});

export default function AppProvider({ children }) {
  const [modalCreate, setModalCreate] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [cardSelected, setCardSelected] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [errorSearch, setErrorSearch] = useState(false);

  return (
    <MainContext.Provider
      value={{
        modalCreate,
        setModalCreate: (value) => setModalCreate(value),
        modalDelete,
        setModalDelete: (value) => setModalDelete(value),
        isEdit,
        setIsEdit: (value) => setIsEdit(value),
        cardData,
        setCardData: (value) => setCardData(value),
        cardSelected,
        setCardSelected: (value) => setCardSelected(value),
        filteredData,
        setFilteredData: (value) => setFilteredData(value),
        isLoading,
        setIsLoading: (value) => setIsLoading(value),
        searchText,
        setSearchText: (value) => setSearchText(value),
        errorSearch,
        setErrorSearch: (value) => setErrorSearch(value),
      }}
    >
      {children}
    </MainContext.Provider>
  );
}
