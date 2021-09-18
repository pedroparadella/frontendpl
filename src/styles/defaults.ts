import { css } from 'styled-components';

export const Defaults = css`
  html {
    font-size: 16px;
    font-family: 'Muli';

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  * {
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
    font-family: 'Muli';
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
