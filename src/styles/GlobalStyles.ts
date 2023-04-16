import * as styled from "styled-components";

const GlobalStyles = styled.createGlobalStyle`
  * {
    font-family: "Nanum Gothic", sans-serif;
    margin: 0;
    padding: 0;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:visited {
      color: inherit;
    }
    &:hover {
      text-decoration: none;
    }
  }
`;

export default GlobalStyles;
