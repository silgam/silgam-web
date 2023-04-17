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

  @media (max-width: 480px) {
    height: ${({ theme }) => theme.header.heightMobile};
  }
`;

export const HeaderContent = styled.div`
  max-width: ${({ theme }) => theme.width.contentMax};
  display: flex;
  flex: 1;
  padding: 0 20px;
  justify-content: space-between;
  font-size: 15px;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 8px;

  & > span {
    color: black;
    font-weight: 700;
    font-size: 1.2em;
  }

  & > img {
    height: 28px;
    width: 25.42199488px;

    @media (max-width: 480px) {
      height: 25px;
      width: 22.69820972px;
    }
  }
`;

export const NavContainer = styled.nav`
  display: flex;
  gap: 16px;

  @media (max-width: 480px) {
    gap: 8px;
  }

  a {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    color: ${({ theme }) => theme.color.grey[700]};
    font-size: 1em;

    &:visited {
      color: ${({ theme }) => theme.color.grey[700]};
    }
  }
`;
