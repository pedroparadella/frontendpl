import { SvgIcon } from '../SvgContainer';
import { ReactComponent as LogoIcon } from '../../assets/logo.svg';
import * as S from './styled';

export const Header = () => {
  return (
    <S.Header>
      <S.LogoWrapper>
        <SvgIcon Icon={LogoIcon} />
      </S.LogoWrapper>
    </S.Header>
  );
};
