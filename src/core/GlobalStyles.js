import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  html {
    box-sizing: border-box;
    scroll-behavior:smooth;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }

  h1 , h2, h3, h4, h5, p ,picture, figure{
    margin: 0;
  } 
  h1 , h2, h3, h4, h5, p{
    font-weight:400;
  }

  button , input , select , textarea{
    font-family:inherit
  }

  img,picture{
    max-width:100%;
    display:block;
  }

  body{
    line-height:1.5;
    margin-inline: auto;
    font-family:"Barlow",sans-serif;
  }
`;
