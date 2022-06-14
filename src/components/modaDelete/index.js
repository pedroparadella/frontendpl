import React, { useContext } from "react";

// Components
import ButtonComponent from "../button";

// Style
import { Modal, CloseButton, Title, BoxButtons } from "./style";
import { Overlay } from "../modalCreate/style";

// Images
import iconTrash from "../../assets/Icon-trash@2x.png";

// Context
import { MainContext } from "../../context/mainContenxt";

export default function ModalDelete() {
  const { setModalDelete, cardSelected, cardData, setCardData } =
    useContext(MainContext);

  const deleteCard = () => {
    setCardData(cardData.filter((item) => item.name !== cardSelected?.name));
    setModalDelete(false);
  };

  return (
    <Overlay onClick={() => setModalDelete(false)}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={() => setModalDelete(false)}>x</CloseButton>
        <span>
          <img src={iconTrash} alt="excluir" />
        </span>
        <Title>Excluir</Title>
        <p>
          Certeza que deseja excluir <strong>{cardSelected.name} ?</strong>
        </p>
        <BoxButtons>
          <ButtonComponent
            buttonBackground="#DB2525"
            buttonColor="#fff"
            onClick={() => deleteCard()}
          >
            Excluir
          </ButtonComponent>
          <ButtonComponent
            buttonBackground="#FFF"
            buttonBorder="1px solid #db2525"
            buttonColor="#db2525"
            buttonMarginDesk="0 0 0 17px"
            onClick={() => setModalDelete(false)}
          >
            Cancelar
          </ButtonComponent>
        </BoxButtons>
      </Modal>
    </Overlay>
  );
}
