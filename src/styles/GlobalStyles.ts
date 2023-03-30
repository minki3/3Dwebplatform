import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;

  }
  body {
    margin : 0;
    margin-top : 100px;
    margin-bottom : 100px

  }
  a {
    color: inherit;
    text-decoration: none;
  }
  `;

export default GlobalStyle;
