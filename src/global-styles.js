import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html, body {
    font-family: "Montserrat";
    color: Black;
}
*{
    box-sizing: border-box;
    margin: 0;
    a{
        text-decoration: none;
    }
}
`;

export default GlobalStyles;
