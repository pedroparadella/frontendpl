import { CardButton } from '../CardButton';
import * as S from './styled';
import { ReactComponent as EditIcon } from '../../../../assets/edit-icon.svg';
import { ReactComponent as DeleteIcon } from '../../../../assets/delete-icon.svg';

export const Card = ({ image, cardText }: { image: string; cardText: string }) => {
  return (
    <S.CardWrapper>
      <S.ImageWrapper image={image} />
      <S.Divisor />
      <S.CardDescription>{cardText}</S.CardDescription>
      <S.CardButtonsContainer>
        <CardButton buttonText="Excluir" icon={DeleteIcon} />
        <S.VerticalDivisor />
        <CardButton buttonText="Editar" icon={EditIcon} />
      </S.CardButtonsContainer>
    </S.CardWrapper>
  );
};
