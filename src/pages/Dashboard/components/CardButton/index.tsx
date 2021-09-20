import { SvgIcon } from '../../../../components/SvgContainer';
import * as S from './styled';
import { ReactComponent as EditIcon } from '../../../../assets/edit-icon.svg';
import { ReactComponent as DeleteIcon } from '../../../../assets/delete-icon.svg';

interface CardButtonProps {
  buttonText: string;
  customStyle: 'DELETE' | 'EDIT';
  action?: () => void;
}

export const CardButton = ({ buttonText, customStyle, action }: CardButtonProps) => {
  return (
    <S.CardButtonWrapper onClick={action} customStyle={customStyle}>
      <SvgIcon Icon={customStyle === 'EDIT' ? EditIcon : DeleteIcon} />
      <S.CardButtonText>{buttonText}</S.CardButtonText>
    </S.CardButtonWrapper>
  );
};
