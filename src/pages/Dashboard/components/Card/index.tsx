import { useContext } from 'react';
import { PokeContext } from '../../../../PokeContext';
import { CardButton } from '../CardButton';
import * as S from './styled';

export const Card = ({ image, cardText }: { image: string; cardText: string }) => {
  const { setShowDeleteModal } = useContext(PokeContext);

  const handleOpenDeleteModal = () => {
    setShowDeleteModal(true);
  };
  return (
    <S.CardWrapper>
      <S.ImageWrapper image={image} />
      <S.Divisor />
      <S.CardDescription>{cardText}</S.CardDescription>
      <S.CardButtonsContainer>
        <CardButton buttonText="Excluir" customStyle="DELETE" action={handleOpenDeleteModal} />
        <S.VerticalDivisor />
        <CardButton buttonText="Editar" customStyle="EDIT" />
      </S.CardButtonsContainer>
    </S.CardWrapper>
  );
};
