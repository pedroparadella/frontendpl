import styled from 'styled-components';

// export const Logo = styled.div`
//   background-image: url('../../assets/logo.svg');
//   background-size: contain;
//   background-position: center;
//   height: 100%;
//   width: 12.5rem;
//   border: 2px solid green;
// `;

export const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: var(--max-width);
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 4rem;
  padding: 0.8125rem 1.5rem;
  background: linear-gradient(240deg, var(--pink-strong), var(--purple));
`;
