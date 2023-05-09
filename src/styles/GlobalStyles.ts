import * as styled from "styled-components";

const GlobalStyles = styled.createGlobalStyle`
  @font-face {
    font-family: "establishRetrosansOTF";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2112@1.0/establishRetrosansOTF.woff")
      format("woff");
  }
  * {
    font-family: "Nanum Gothic", sans-serif;
    margin: 0;
    padding: 0;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0.2);
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
