import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Main = styled.main`
  width: 100%;
  max-width: var(--max-width-content);
  margin-bottom: 3rem;
`;

export const MainTitleWrapper = styled.div`
  margin: 2rem var(--margin-content);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 720px) {
    flex-direction: column-reverse;
    gap: 1rem;
  }
`;

export const CardsWrapper = styled.div`
  margin: 0 var(--margin-content);
  display: grid;
  grid-gap: 2.3125rem 1.1563rem;
  grid-template-columns: repeat(auto-fill, 14.625rem);
  justify-content: space-between;

  @media (max-width: 720px) {
    justify-content: center;
  }
`;

export const NoResult = styled.p`
  text-align: center;
  margin-top: 2rem;
`;
