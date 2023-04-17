import styled from "styled-components";

export const Bold = styled.span`
  font-weight: 700;
`;

export const Superscript = styled.sup`
  font-size: 9px;
  vertical-align: text-top;

  @media (max-width: 830px) {
    font-size: 7px;
  }

  @media (max-width: 480px) {
    font-size: 5px;
  }
`;
