import Link from "next/link";
import { HamburgerSliderReverse } from "react-animated-burgers";
import styled from "styled-components";

export const USE_HAMBURGER_MENU_WIDTH = 400;

export const TouchableBackground = styled.div<{ isMenuOpened: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: ${({ isMenuOpened }) => (isMenuOpened ? "1" : "0")};
  transition: opacity 0.1s ease-in-out;
  pointer-events: ${({ isMenuOpened }) => (isMenuOpened ? "auto" : "none")};

  @media (max-width: ${USE_HAMBURGER_MENU_WIDTH}px) {
    display: block;
  }
`;

export const HeaderContainer = styled.header<{
  showBorder: boolean;
}>`
  width: 100%;
  position: fixed;
  display: flex;
  height: ${({ theme }) => theme.header.height};
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: ${({ showBorder }) =>
    showBorder ? "1px solid #e5e5e5;" : "1px solid transparent;"};
  backdrop-filter: saturate(180%) blur(20px);
  z-index: 10;
  padding: 0 20px;
  overflow-y: hidden;
  justify-content: center;

  @media (max-width: 480px) {
    height: ${({ theme }) => theme.header.heightMobile};
  }
`;

export const HeaderContentWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme.width.contentMax};
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  @media (max-width: ${USE_HAMBURGER_MENU_WIDTH}px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  flex-shrink: 0;

  @media (max-width: ${USE_HAMBURGER_MENU_WIDTH}px) {
    font-size: 13px;
    height: ${({ theme }) => theme.header.heightMobile};
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

  @media (max-width: ${USE_HAMBURGER_MENU_WIDTH}px) {
    flex-direction: column;
    padding: 8px 0 12px 0;
    gap: 16px;
  }

  & > a {
    display: flex;
    align-items: center;
    padding: 4px 8px;
    color: ${({ theme }) => theme.color.grey[700]};
    font-size: 1em;

    @media (max-width: 480px) {
      font-size: 0.85em;
    }

    @media (max-width: ${USE_HAMBURGER_MENU_WIDTH}px) {
      padding: 4px;
    }

    &:visited {
      color: ${({ theme }) => theme.color.grey[700]};
    }

    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const SnsButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const IconButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: 6px;

  &:hover {
    & > svg {
      color: ${({ theme }) => theme.color.grey[700]};
    }
  }

  & > svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.color.grey[500]};

    @media (max-width: 480px) {
      width: 18px;
      height: 18px;
    }
  }
`;

export const HambugerButton = styled(HamburgerSliderReverse)`
  display: none;
  align-items: center;
  padding: 4px;

  @media (max-width: ${USE_HAMBURGER_MENU_WIDTH}px) {
    display: flex;
  }

  &:hover {
    & > div > span {
      background-color: ${({ theme }) => theme.color.primary};
      &:before {
        background-color: ${({ theme }) => theme.color.primary};
      }
      &:after {
        background-color: ${({ theme }) => theme.color.primary};
      }
    }
  }

  & > div {
    width: 22px;

    span {
      width: 22px;
      height: 1.7px;

      &:before {
        width: 22px;
        height: 1.7px;
      }

      &::after {
        width: 22px;
        height: 1.7px;
      }
    }
  }
`;
