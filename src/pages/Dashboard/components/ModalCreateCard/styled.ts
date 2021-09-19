import styled, { css } from 'styled-components';
import { Title } from '../../../../components/Title';

interface CreateModalWrapperProps {
  show: boolean;
}

export const CreateModalWrapper = styled.form<CreateModalWrapperProps>`
  z-index: 20;
  width: 47.9375rem;
  max-width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: -50rem;
  background-color: var(--white);
  padding: 2.5625rem 2rem;
  transition: 0.3s ease-in-out all;

  ${props =>
    props.show &&
    css`
      right: 0rem;
    `}
`;

export const HeaderContainer = styled.div`
  display: flex;
  gap: 1.125rem;
  padding-bottom: 2.125rem;
  border-bottom: 1px solid var(--grey-medium);
`;

export const TitleModal = styled(Title)`
  font-weight: 700;
`;

export const InputWrapper = styled.div`
  margin-top: 2.7062rem;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.label`
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  font-weight: 700;
  color: var(--black-light);
`;

export const TextInput = styled.input`
  border: 1px solid var(--grey-strong);
  border-radius: 0.5rem;
  height: 3.75rem;
  font-size: 1.125rem;
  font-weight: 400;
  padding: 1.125rem 1.5625rem;

  &::placeholder {
    font-weight: 200;
    color: var(--grey-strong);
  }
`;

export const Divisor = styled.div`
  border-bottom: 1px solid var(--grey-medium);
  margin: 3.125rem 0 1.625rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 3rem;
`;
