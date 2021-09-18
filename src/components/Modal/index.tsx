import { Button } from '../Button';
import { FadeScreen } from '../FadeScreen';
import * as S from './styled';
import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';
import { SvgIcon } from '../SvgContainer';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';

export const Modal = ({ title, text, type }: { title: string; text: string; type: 'DELETE' | 'INFO' | 'CONFIRM' }) => {
  return (
    <FadeScreen>
      <S.ModalWrapper>
        {/* O ícone que vocês usaram no layout não estava disponível para baixar :( */}
        <S.CloseButton>
          <SvgIcon Icon={CloseIcon} width={10} />
        </S.CloseButton>
        {/* O ícone abaixo também não estava disponível */}
        <S.ModalIcon backgroundColor={type}>
          {type === 'DELETE' && <SvgIcon Icon={DeleteIcon} width={60} />}
        </S.ModalIcon>
        <S.ModalTitle>{title}</S.ModalTitle>
        <S.ModalText>{text}</S.ModalText>
        <S.Divisor />
        <S.ModalButtonsContainer>
          <Button buttonText="Excluir" width={150} customStyle="DELETE-DARK" />
          <Button buttonText="Cancelar" width={150} customStyle="DELETE-LIGHT" />
        </S.ModalButtonsContainer>
      </S.ModalWrapper>
    </FadeScreen>
  );
};
