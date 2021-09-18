import styled from 'styled-components';

interface CardButtonWrapperProps {
  customStyle: 'DELETE' | 'EDIT';
}

export const CardButtonWrapper = styled.button<CardButtonWrapperProps>`
  background-color: transparent;
  border: none;
  display: flex;
  gap: 0.7344rem;

  &:hover {
    span {
      color: ${props => (props.customStyle === 'EDIT' ? 'var(--orange)' : 'var(--red-strong)')};
    }
  }
`;

export const CardButtonText = styled.span`
  transition: 0.2s all ease-in-out;
`;
