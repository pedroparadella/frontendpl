import styled, { css } from 'styled-components';

interface ModalIconProps {
  backgroundColor: 'DELETE' | 'INFO' | 'CONFIRM';
}

interface ModalContainerProps {
  show: boolean;
}

export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-in-out all;
  opacity: 0;
  pointer-events: none;
  display: flex;

  ${props =>
    props.show &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}

  @media (max-width: 720px) {
    width: 80%;
  }
`;

export const ModalWrapper = styled.div`
  position: relative;
  background-color: white;
  width: 27.375rem;
  height: 27.125rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--orange);
  position: absolute;
  height: 2.125rem;
  width: 2.125rem;
  border-radius: 50%;
  right: -1.0625rem;
  top: -1.0625rem;
  cursor: pointer;
`;

export const ModalIcon = styled.div<ModalIconProps>`
  border: 6px solid var(--grey-medium);
  border-radius: 50%;
  height: 9.9375rem;
  width: 9.9375rem;
  margin: 1.5625rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${props =>
    props.backgroundColor === 'DELETE' &&
    css`
      background-color: var(--red-extra-light);
    `}
`;

export const ModalTitle = styled.div`
  color: var(--red-strong);
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 0.8125rem;
`;

export const ModalText = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  color: var(--black-light);
`;

export const Divisor = styled.div`
  width: 22.75rem;
  border-top: 0.0625rem solid var(--grey-medium);
  margin: 1.75rem 0 1.4375rem;

  @media (max-width: 720px) {
    width: 80%;
  }
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 1.0625rem;

  @media (max-width: 720px) {
    width: 80%;
  }
`;
