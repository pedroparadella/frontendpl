import { SvgIcon } from '../../../../components/SvgContainer';
import * as S from './styled';
import { ReactComponent as EditIcon } from '../../../../assets/edit-icon.svg';
import { ReactComponent as DeleteIcon } from '../../../../assets/delete-icon.svg';

export const CardButton = ({ buttonText, type }: { buttonText: string; type: 'DELETE' | 'EDIT' }) => {
  return (
    <S.CardButtonWrapper>
      <SvgIcon Icon={type === 'EDIT' ? EditIcon : DeleteIcon} />
      <S.CardButtonText type={type}>{buttonText}</S.CardButtonText>
    </S.CardButtonWrapper>
  );
};
