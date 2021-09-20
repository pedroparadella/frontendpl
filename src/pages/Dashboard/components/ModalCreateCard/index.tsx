import { useContext } from 'react';
import { FadeScreen } from '../../../../components/FadeScreen';
import { SvgIcon } from '../../../../components/SvgContainer';
import { ReactComponent as CreateIcon } from '../../../../assets/create-icon.svg';

import * as S from './styled';
import { FileInput } from '../../../../components/FileInput';
import { PokeContext } from '../../../../PokeContext';
import { Button } from '../../../../components/Button';

export const ModalCreateCard = () => {
  const { showCreateModal, setShowCreateModal, WIP } = useContext(PokeContext);

  const handleCloseModal = () => {
    setShowCreateModal(false);
  };

  return (
    <>
      <FadeScreen show={showCreateModal} />
      <S.CreateModalWrapper show={showCreateModal}>
        <S.HeaderContainer>
          <SvgIcon Icon={CreateIcon} />
          <S.TitleModal>Criar card</S.TitleModal>
        </S.HeaderContainer>

        <S.InputWrapper>
          <S.InputLabel>Digite um nome para o card</S.InputLabel>
          <S.TextInput placeholder="Digite um título" />
        </S.InputWrapper>

        <S.InputWrapper>
          <S.InputLabel>Inclua uma imagem para aparecer no card</S.InputLabel>
          <FileInput />
        </S.InputWrapper>

        <S.Divisor />

        <S.ButtonWrapper>
          <Button buttonText="Voltar" customStyle="UPLOAD" onClick={handleCloseModal} />
          <Button buttonText="Criar card" onClick={WIP} />
        </S.ButtonWrapper>
      </S.CreateModalWrapper>
    </>
  );
};
