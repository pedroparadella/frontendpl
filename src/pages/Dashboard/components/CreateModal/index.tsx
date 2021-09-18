import { FadeScreen } from '../../../../components/FadeScreen';
import { SvgIcon } from '../../../../components/SvgContainer';
import { ReactComponent as CreateIcon } from '../../../../assets/create-icon.svg';

import * as S from './styled';
import { FileInput } from '../FileInput';
import { Button } from '../../../../components/Button';

export const CreateModal = ({ show }: { show: boolean }) => {
  return (
    <>
      <FadeScreen show={show} />
      <S.CreateModalWrapper show={show}>
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
          <Button buttonText="Voltar" customStyle="UPLOAD" />
          <Button buttonText="Criar card" />
        </S.ButtonWrapper>
      </S.CreateModalWrapper>
    </>
  );
};
