import styled, { css } from 'styled-components';

interface FadeBackgroundProps {
  show: boolean;
}

export const FadeBackground = styled.div<FadeBackgroundProps>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #f6f4f6cc;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1;
  transition: 0.2s ease-in-out opacity;
  pointer-events: visible;

  ${props =>
    !props.show &&
    css`
      pointer-events: none;
      opacity: 0;
    `}
`;
