import React, { useContext, useEffect, useState } from "react";
import ButtonComponent from "../button";
import Card from "../card";

import { Container, Content, BoxTitle } from "./style";

import { MainContext } from "../../context/mainContenxt";
import ModalCreate from "../modalCreate";
import ModalDelete from "../modaDelete";
import { getPokemons } from "../../services/api";

export default function Layout() {
  const {
    modalCreate,
    setModalCreate,
    modalDelete,
    isEdit,
    setCardData,
    isLoading,
    errorSearch,
  } = useContext(MainContext);

  const [page, setPage] = useState(8);
  const [newCard, setNewCard] = useState([]);

  useEffect(() => {
    fetchingPokemons();
  }, [page]);

  const fetchingPokemons = async () => {
    try {
      const { data } = await getPokemons(`pokemon?&limit=${page}`);
      setCardData(data.results);
    } catch (err) {
      console.log("er", err);
    }
  };

  let data = new Date();

  return (
    <Container>
      <BoxTitle>
        <h1>Resultado da busca</h1>
        <ButtonComponent
          buttonMarginDesk="20px 0 0 0"
          onClick={() => setModalCreate(true)}
        >
          Novo card
        </ButtonComponent>
      </BoxTitle>
      <Content>
        <Card />
      </Content>
      {(modalCreate || isEdit) && (
        <ModalCreate setNewCard={setNewCard} newCard={newCard} />
      )}
      {modalDelete && <ModalDelete />}
      {!isLoading && !errorSearch && (
        <ButtonComponent
          onClick={() => setPage(page + 8)}
          buttonBackground="#FFF"
          buttonColor="#E76316"
          buttonBorder="2px solid #E76316"
          buttonMarginDesk="35px auto 0 auto"
        >
          Ver mais
        </ButtonComponent>
      )}
    </Container>
  );
}
