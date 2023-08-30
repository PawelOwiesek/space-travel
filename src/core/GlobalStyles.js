import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  html {
    box-sizing: border-box;
    scroll-behavior:smooth;
    margin: 0;
    padding: 0;
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
    min-height:100vh;
    max-width:80rem;
    margin: auto;
    background-color: grey;
    font-family:"Barlow",sans-serif;
  }
`;
