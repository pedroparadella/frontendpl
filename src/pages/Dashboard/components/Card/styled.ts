import styled from 'styled-components';

interface ImageWrapperProps {
  image: string;
}

export const CardWrapper = styled.article`
  border: 1px solid var(--grey-medium);
  width: 14.625rem;
  height: 16.6875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0rem 0.1875rem 0.375rem var(--grey-medium);
  border-radius: 0.5rem;
  background-color: var(--white-light);
`;

export const ImageWrapper = styled.div<ImageWrapperProps>`
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  border: 1px solid var(--grey-medium);
  border-radius: 50%;
  height: 5.9375rem;
  width: 5.9375rem;
  margin: 1.75rem 0;
`;
export const Divisor = styled.div`
  border-top: 1px solid var(--grey-medium);
  width: 10.5625rem;
`;
export const CardDescription = styled.p`
  background-color: transparent;
  text-align: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardButtonsContainer = styled.div`
  box-shadow: inset 0rem 0.1875rem 0.375rem #0000000f;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 2.6875rem;
  width: 100%;
`;

export const VerticalDivisor = styled.div`
  height: 1.375rem;
  border-left: 1px solid var(--grey-medium-light);
`;
