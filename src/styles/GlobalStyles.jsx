import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Karla&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
  :root{
    --background-hero : hsl(256, 26%, 20%);
    --color-white: #fff;
    --color-light-gray : hsl(273, 4%, 51%);
    --bg-footer : hsl(0, 0%, 98%);

  }
  *,*::before,*::after{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  .container{
    width: 100%;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }
  ul{
    list-style-type: none;
  }
  li{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
  img{
    width: 100%;
    height: 100%;
  }
`;
export default GlobalStyles;