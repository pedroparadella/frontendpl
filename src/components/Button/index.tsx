import * as S from './styled';

interface ButtonProps {
  buttonText: string;
  width?: number;
  customStyle?: 'DELETE-DARK' | 'DELETE-LIGHT';
}

export const Button = ({ buttonText, width, customStyle }: ButtonProps) => {
  return (
    <S.Button width={width} customStyle={customStyle}>
      {buttonText}
    </S.Button>
  );
};
