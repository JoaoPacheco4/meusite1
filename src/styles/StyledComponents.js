import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    parddin: 0;
    box-sizing: border-box;
}
    
body{
    font-family: 'Arial', sans-serif;
    background-image: url(fundo.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    color: #333;
}`;