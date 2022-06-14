import React, { useContext } from "react";

// Styles
import { CardBox, BoxImage, CardTitle, BoxOptions, TextError } from "./style";

  // Images
  import iconTrash from "../../assets/Icon-trash.png";
import iconEdit from "../../assets/Icon-edit.png";

// Context
import { MainContext } from "../../context/mainContenxt";
import Loader from "../loading";

export default function Card() {
  const {
    setModalDelete,
    setIsEdit,
    cardData,
    setCardSelected,
    filteredData,
    isLoading,
    searchText,
    errorSearch,
  } = useContext(MainContext);

  const handleDelete = (item) => {
    setCardSelected(item);
    setModalDelete(true);
  };

  const handleEdit = (item) => {
    setCardSelected(item);
    setIsEdit(true);
  };

  const validation = !errorSearch && !searchText ? cardData : filteredData?.length ? filteredData : cardData;

  return errorSearch ? (
    <TextError>
      Não conseguimos encontrar pokemon <strong>{searchText}</strong>
    </TextError>
  ) : isLoading ? (
    <Loader />
  ) : (
    validation?.map((item, index) => {
      const pokemonIndex =
        item?.url?.split("/")[item?.url?.split("/").length - 2];

      return (
        <CardBox key={index}>
          <BoxImage>
            <img
              src={
                item?.image
                  ? item.image
                  : `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png`
              }
            />
          </BoxImage>
          <CardTitle>{item.name}</CardTitle>
          <BoxOptions>
            <button onClick={() => handleDelete(item)}>
              <img src={iconTrash} alt="Excluir" />
              <p>Excluir</p>
            </button>
            <button onClick={() => handleEdit(item)}>
              <img src={iconEdit} alt="Editar" />
              <p>Editar</p>
            </button>
          </BoxOptions>
        </CardBox>
      );
    })
  );
}
