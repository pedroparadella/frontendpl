import * as S from './styled';

export const FadeScreen = ({ children }: { children: React.ReactNode }) => {
  return <S.FadeBackground>{children}</S.FadeBackground>;
};
