import * as S from './styled';

export const FadeScreen = ({ show }: { show: boolean }) => {
  return <S.FadeBackground show={show} />;
};
