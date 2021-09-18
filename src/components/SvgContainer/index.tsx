import { SvgContainer } from './styled';

interface Props {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
}

export const SvgIcon = (props: Props) => {
  const { Icon } = props;
  return (
    <SvgContainer {...props}>
      <Icon />
    </SvgContainer>
  );
};
