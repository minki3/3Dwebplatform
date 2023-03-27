import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;

  }
  body {
    margin : 0

  }
  a {
    color: inherit;
    text-decoration: none;
  }
  `;

export default GlobalStyle;
