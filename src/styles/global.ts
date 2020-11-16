import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 *{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   outline:0;
 }

  body{
    background: #0d1024;
    color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }

  h1{
    font-weight:500;
    color: #fff;
  }
`;
