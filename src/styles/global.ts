import { createGlobalStyle } from 'styled-components';
import { Reset } from './reset';
import { Variables } from './variables';
import { Defaults } from './defaults';

export const GlobalStyle = createGlobalStyle`
  ${Reset};
  ${Variables};
  ${Defaults}
`;
