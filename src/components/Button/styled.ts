import styled, { css } from 'styled-components';

interface ButtonProps {
  width?: number;
  customStyle?: 'DELETE-DARK' | 'DELETE-LIGHT' | 'UPLOAD';
}

export const Button = styled.button<ButtonProps>`
  background-color: var(--orange);
  border: none;
  height: 3rem;
  display: flex;
  align-items: center;
  color: var(--white-light);
  border-radius: 0.5rem;
  padding: 0.75rem 2.5rem;
  box-shadow: 0rem 0.1875rem 0.375rem #92207242;
  font-size: 18px;
  font-weight: 600;
  transition: 0.1s all ease-in-out;
  justify-content: center;

  ${props =>
    props.width &&
    css`
      width: ${props.width}px;
    `}

  ${props =>
    props.customStyle === 'DELETE-DARK' &&
    css`
      background-color: var(--red-strong);
    `}

    ${props =>
    props.customStyle === 'DELETE-LIGHT' &&
    css`
      background-color: var(--white-light);
      color: var(--red-strong);
      border: 1px solid var(--red-strong);
    `}

    ${props =>
    props.customStyle === 'UPLOAD' &&
    css`
      background-color: var(--white-light);
      color: var(--orange);
      border: 1px solid var(--orange);
      box-shadow: 0px 3px 6px #e763162e;
    `}

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(1);
    box-shadow: 0rem 0rem 0rem #92207242;
  }
`;
