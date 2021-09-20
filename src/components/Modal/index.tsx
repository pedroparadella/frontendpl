import { useContext } from 'react';
import { Button } from '../Button';
import { FadeScreen } from '../FadeScreen';
import * as S from './styled';
import { ReactComponent as DeleteIcon } from '../../assets/delete-icon.svg';
import { SvgIcon } from '../SvgContainer';
import { ReactComponent as CloseIcon } from '../../assets/close-icon.svg';
import { PokeContext } from '../../PokeContext';

interface ModalProps {
  title: string;
  text: string;
  type: 'DELETE' | 'INFO' | 'CONFIRM';
  show: boolean;
  cancelText: string;
  actionText: string;
  setShow: (v: boolean) => void;
}

export const Modal = ({ title, text, type, show, cancelText, actionText, setShow }: ModalProps) => {
  const { WIP } = useContext(PokeContext);
  const handleCloseModal = () => {
    setShow(false);
  };

  return (
    <>
      <FadeScreen show={show} />
      <S.ModalContainer show={show}>
        <S.ModalWrapper>
          {/* O ícone que vocês usaram no layout não estava disponível para baixar :( */}
          <S.CloseButton onClick={handleCloseModal}>
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
            <Button buttonText={actionText} width={150} customStyle="DELETE-DARK" onClick={WIP} />
            <Button buttonText={cancelText} width={150} customStyle="DELETE-LIGHT" onClick={handleCloseModal} />
          </S.ModalButtonsContainer>
        </S.ModalWrapper>
      </S.ModalContainer>
    </>
  );
};
