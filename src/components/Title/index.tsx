import * as S from './styled';

export const Title = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <S.Title className={className}>{children}</S.Title>;
};
