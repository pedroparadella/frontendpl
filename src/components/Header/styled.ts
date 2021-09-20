import styled from 'styled-components';

export const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--max-width);
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  height: 4rem;
  padding: 0.8125rem 1.5rem;
  background: linear-gradient(240deg, var(--pink-strong), var(--purple));
`;
