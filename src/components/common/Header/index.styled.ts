import styled from "styled-components";

export const HeaderContainer = styled.header<{ showBorder: boolean }>`
  width: 100%;
  position: fixed;
  display: flex;
  height: ${({ theme }) => theme.header.height};
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: ${({ showBorder }) =>
    showBorder ? "1px solid #e5e5e5;" : "1px solid transparent;"};
  align-items: center;
  justify-content: center;
  backdrop-filter: saturate(180%) blur(20px);
  transition: border-bottom 0.2s ease-in-out;
  z-index: 2;
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
  }
`;
