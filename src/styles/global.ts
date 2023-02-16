import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.fontSize};
    background: ${({ theme }) => theme.colors.mainBG};
    
    width: 100vw;
    height: 100vh;
  }

  html {
    font-size: 62.5%;
  }
`