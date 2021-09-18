import { CardButton } from '../CardButton';
import * as S from './styled';

export const Card = ({ image, cardText }: { image: string; cardText: string }) => {
  return (
    <S.CardWrapper>
      <S.ImageWrapper image={image} />
      <S.Divisor />
      <S.CardDescription>{cardText}</S.CardDescription>
      <S.CardButtonsContainer>
        <CardButton buttonText="Excluir" type="DELETE" />
        <S.VerticalDivisor />
        <CardButton buttonText="Editar" type="EDIT" />
      </S.CardButtonsContainer>
    </S.CardWrapper>
  );
};
