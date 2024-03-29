import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;


  }

  


  body {
    margin: 0;
    font-family:Montserrat,sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }
 h3{
   font-family: Josefin Sans,sans-serif;
   font-size: 16px;
   font-weight: 700;
   letter-spacing: 1px;
 }
 p{
   font-size: 14px;
   font-weight: 400;
   line-height: 1.4;
 }
  
  button {
    background-color: unset;
    border: unset;
    cursor: pointer;
  }
  section{
   
  }
  

  

`