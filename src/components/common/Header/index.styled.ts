import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: ${({ theme }) => theme.header.height};
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
`;
