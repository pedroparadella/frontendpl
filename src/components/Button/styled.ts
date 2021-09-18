import styled from 'styled-components';

export const Button = styled.button`
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
  transition: 0.1s all linear;

  &:hover {
    filter: brightness(1.1);
  }

  &:active {
    filter: brightness(1);
    box-shadow: 0rem 0rem 0rem #92207242;
  }
`;
