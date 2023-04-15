import * as styled from "styled-components";

const GlobalStyles = styled.createGlobalStyle`
  body {
    font-family: "Nanum Gothic", sans-serif;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary};

    &:visited {
      color: ${({ theme }) => theme.color.primary};
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default GlobalStyles;
