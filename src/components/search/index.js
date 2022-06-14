import React, { useState, useContext } from "react";

import { Banner, Form, InputSearch } from "./style";

import lupaIcon from "../../assets/lupa.png";
import { filteredPokemons } from "../../services/api";

// Context
import { MainContext } from "../../context/mainContenxt";

export default function Search() {
  const [isError, setIsError] = useState(false);
  const {
    setFilteredData,
    setIsLoading,
    setSearchText,
    searchText,
    setErrorSearch,
  } = useContext(MainContext);

  const handleChange = (e) => {
    setSearchText(e.target.value);
    setErrorSearch(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchText) {
      try {
        const { data } = await filteredPokemons(searchText.toLocaleLowerCase());
        setIsLoading(true);
        setTimeout(() => {
          setFilteredData(data.forms);
          setIsLoading(false);
        }, 1200);
      } catch (err) {
        setIsLoading(true);
        setTimeout(() => {
          setErrorSearch(true);
          setIsLoading(false);
        }, 1200);
      }
    } else {
      setIsError(true);
    }
  };

  return (
    <Banner>
      <Form onSubmit={(e) => handleSubmit(e)} isError={isError}>
        <InputSearch
          type="text"
          placeholder="Digite aqui sua busca..."
          value={searchText}
          onChange={(e) => handleChange(e)}
        />
        <img src={lupaIcon} alt="busca" />
      </Form>
    </Banner>
  );
}
