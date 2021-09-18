import { SvgIcon } from '../../../../components/SvgContainer';
import * as S from './styled';

export const CardButton = ({
  icon,
  buttonText,
}: {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  buttonText: string;
}) => {
  return (
    <S.CardButtonWrapper>
      <SvgIcon Icon={icon} />
      <span>{buttonText}</span>
    </S.CardButtonWrapper>
  );
};
