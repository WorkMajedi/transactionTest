import { createGlobalStyle } from 'styled-components';
import { Pallets } from './paletteColor';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    background-color: ${Pallets.background_body};
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  form {
    width: 100%;
  }
  #root {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
