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
`;

export const MainTitleWrapper = styled.div`
  margin: 2rem var(--margin-content);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardsWrapper = styled.div`
  margin: 0 var(--margin-content);
  display: flex;
  flex-wrap: wrap;
  gap: 2.3125rem 1.1563rem;
  justify-content: space-between;
`;
