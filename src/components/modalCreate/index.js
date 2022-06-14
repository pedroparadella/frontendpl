import React, { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Style
import { Button } from "../button/style";
import {
  Overlay,
  Modal,
  BoxTitle,
  Title,
  InputBox,
  Label,
  Input,
  BoxButton,
  TextError,
} from "./style";

//Images
import createIcon from "../../assets/icone_criar.png";

// Context
import { MainContext } from "../../context/mainContenxt";

export default function ModalCreate({ setNewCard, newCard }) {
  const {
    setModalCreate,
    isEdit,
    setIsEdit,
    cardSelected,
    setCardData,
    cardData,
    setCardSelected,
  } = useContext(MainContext);

  useEffect(() => {
    if (cardSelected) {
      setName(cardSelected?.name);
    }
  }, []);

  const [name, setName] = useState("");
  const [image, setImage] = useState(undefined);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const renderInputFile = () => (
    <InputBox isError={isError} image={image}>
      <Label>Inclue uma imagem para aparecer no card</Label>
      <label for="image" className="file">
        <p>
          {image
            ? "Imagem Selecionada"
            : "Nenhuma imagem selecionada"}
        </p>
        <p className="button">Enviar arquivo</p>
      </label>
      <Input type="file" id="image" onChange={(ev) => handleImageChange(ev)} />
    </InputBox>
  );

  const closeModal = () => {
    setModalCreate(false);
    setIsEdit(false);
  };

  const handleImageChange = (ev) => {
    ev.preventDefault();
    let reader = new FileReader();
    let file = ev.target.files[0];

    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
    setIsError(false);
  };

  const createNewCard = () => {
    if (isEdit) {
      handleEdit();
    } else {
      if (name && image) {
        const data = {
          id: uuidv4(),
          name,
          image,
        };

        setCardData([...cardData, data]);
        setModalCreate(false);
      }
    }
    if (!name && !image) {
      setIsError(true);
      setErrorMessage("Preencha todos os campos");
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
    setIsError(false);
  };

  const handleEdit = () => {
    const isEdited = Object.assign({}, cardSelected);
    isEdited.name = name;
    isEdited.image = image;

    setNewCard(cardData.push(isEdited));

    const result = cardData.filter((item) => item !== cardSelected);

    setCardData(result);
    closeModal();
    setCardSelected([]);
  };

  return (
    <Overlay onClick={() => closeModal()}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <BoxTitle>
          <img src={createIcon} alt="criar card" />
          <Title>{isEdit ? "Editar card" : "Criar card"}</Title>
        </BoxTitle>
        <InputBox>
          <Label>Digite um nome para o card</Label>
          <Input
            type="text"
            placeholder="Digite o título"
            value={name}
            onChange={(e) => handleChange(e)}
            isError={isError}
          />
        </InputBox>
        {renderInputFile()}
        <BoxButton>
          <Button buttonMarginDesk="20px 0 0 0" onClick={() => createNewCard()}>
            {isEdit ? "Editar card" : "Criar card"}
          </Button>
        </BoxButton>
        {isError && <TextError>{errorMessage}</TextError>}
      </Modal>
    </Overlay>
  );
}
