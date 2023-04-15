import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: ${({ theme }) => theme.header.height};
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  max-width: 1000px;
  display: flex;
  flex: 1;
  padding: 0 20px;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 8px;

  span {
    color: black;
    font-weight: 700;
    font-size: 18px;
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 16px;

  a {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    color: ${({ theme }) => theme.color.grey[700]};
    font-size: 15px;

    &:visited {
      color: ${({ theme }) => theme.color.grey[700]};
    }
    &:hover {
      text-decoration: none;
    }
  }
`;
