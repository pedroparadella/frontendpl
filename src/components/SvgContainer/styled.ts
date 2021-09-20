import styled from 'styled-components';

interface SvgContainerProps {
  height?: number;
  width?: number;
}

export const SvgContainer = styled.div<SvgContainerProps>`
  height: 'auto';
  width: 'auto';
  display: inline-flex;
  align-items: center;
  justify-content: center;

  & svg {
    height: ${props => (props.height ? `${props.height}px` : '100%')};
    width: ${props => (props.width ? `${props.width}px` : '100%')};
  }
`;
