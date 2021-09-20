import styled, { css } from 'styled-components';

interface ScrollTopContainerProps {
  show: boolean;
}

export const ScrollTopContainer = styled.div<ScrollTopContainerProps>`
  position: fixed;
  background: linear-gradient(240deg, var(--pink-strong), var(--purple));
  bottom: 2rem;
  right: 2rem;
  width: 4rem;
  height: 4rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.2s all ease-in-out;
  cursor: pointer;
  box-shadow: 0rem 0.1875rem 0.375rem var(--black-light);

  ${props =>
    props.show &&
    css`
      opacity: 1;
      pointer-events: all;
    `}

  &:hover {
    box-shadow: 0px 6px 12px var(--black-light);
  }

  &:active {
    box-shadow: 0rem 0.1875rem 0.375rem var(--black-light);
  }
`;
