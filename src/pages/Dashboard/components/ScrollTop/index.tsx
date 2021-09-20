import { SvgIcon } from '../../../../components/SvgContainer';
import * as S from './styled';
import { ReactComponent as ArrowTop } from '../../../../assets/top-icon.svg';

interface ScrollTopProps {
  show: boolean;
  action: () => void;
}

export const ScrollTop = ({ action, show }: ScrollTopProps) => {
  return (
    <S.ScrollTopContainer show={show} onClick={action}>
      <SvgIcon Icon={ArrowTop} width={40} />
    </S.ScrollTopContainer>
  );
};
