import styled from 'styled-components';

interface CardButtonTextProps {
  type: 'DELETE' | 'EDIT';
}

export const CardButtonWrapper = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  gap: 0.7344rem;
`;

export const CardButtonText = styled.span<CardButtonTextProps>`
  transition: 0.2s all ease-in-out;
  &:hover {
    color: ${props => (props.type === 'EDIT' ? 'var(--orange)' : 'var(--red-strong)')};
  }
`;
