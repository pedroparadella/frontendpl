import * as S from './styled';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  buttonText: string;
  width?: number;
  customStyle?: 'DELETE-DARK' | 'DELETE-LIGHT' | 'UPLOAD';
}

export const Button = ({ buttonText, width, customStyle, ...rest }: ButtonProps) => {
  return (
    <S.Button width={width} customStyle={customStyle} type="button" {...rest}>
      {buttonText}
    </S.Button>
  );
};
