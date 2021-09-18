import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --white-light: #FFFFFF;
  --white-medium: #F5F5F5;
  --white-strong: #EBEBEB;
  --grey-light: #F0F0F0;
  --grey-medium: #E6E6E6;
  --grey-medium-strong: #E0E0E0;
  --grey-strong: #F6F4F6;
  --pink-light: #F9F0FC;
  --pink-medium: #EDD8F3;
  --pink-strong: #AE276F;
  --yellow: #FFC400;
  --green: #51C421;
  --brown: #B55B52;
  --red-light: #C64049;
  --red-medium: #A02724;
  --red-strong: #DB2525;
  --orange: #E76316;
  --violet: #6C63FF;
  --purple: #5F1478;
  --black-light: #454545;
  --black-medium: #263238;
  --black-strong: #000000;
  --max-width: 90rem;
  --max-width-content: 65.375rem;
  --margin-content: 1rem;
}

html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: 'Muli';

  @media(max-width: 1080px) {
    font-size: 93.75%;
  }

  @media(max-width: 720px) {
    font-size: 87.5%;
  }
}

*, *:before, *:after {
  box-sizing: inherit;
}

body, h1, h2, h3, h4, h5, h6, p, ol, ul {
  background: var(--grey-strong);
  margin: 0;
  padding: 0;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
}

ol, ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`;
