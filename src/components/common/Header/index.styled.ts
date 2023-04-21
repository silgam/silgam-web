import Link from "next/link";
import { HamburgerSliderReverse } from "react-animated-burgers";
import styled from "styled-components";

export const HeaderContainer = styled.header<{
  showBorder: boolean;
  isUsingHambuger: boolean;
}>`
  width: 100%;
  position: fixed;
  display: flex;
  height: ${({ theme, isUsingHambuger }) =>
    theme.header.height + (isUsingHambuger ? "" : " !important")};
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: ${({ showBorder }) =>
    showBorder ? "1px solid #e5e5e5;" : "1px solid transparent;"};
  align-items: ${({ isUsingHambuger }) =>
    isUsingHambuger ? "stretch" : "center"};
  backdrop-filter: saturate(180%) blur(20px);
  z-index: 2;
  flex-direction: ${({ isUsingHambuger }) =>
    isUsingHambuger ? "column" : "row"};
  padding: 0 20px;
  overflow-y: hidden;

  @media (max-width: 480px) {
    height: ${({ theme }) => theme.header.heightMobile};
  }
`;

export const HeaderContent = styled.div<{ isUsingHambuger: boolean }>`
  max-width: ${({ theme }) => theme.width.contentMax};
  display: flex;
  flex: ${({ isUsingHambuger }) => (isUsingHambuger ? "unset" : "1")};
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  flex-shrink: 0;

  @media (max-width: 480px) {
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

export const NavContainer = styled.nav<{
  isUsingHambuger: boolean;
  isMenuOpened: boolean;
}>`
  display: flex;
  gap: 16px;
  flex-direction: ${({ isUsingHambuger }) =>
    isUsingHambuger ? "column" : "row"};
  padding: ${({ isUsingHambuger }) => (isUsingHambuger ? "8px 0 12px 0" : "0")};

  @media (max-width: 480px) {
    gap: ${({ isUsingHambuger }) => (isUsingHambuger ? "16px" : "8px")};
  }

  & > a {
    display: flex;
    align-items: center;
    padding: ${({ isUsingHambuger }) => (isUsingHambuger ? "4px" : "4px 8px")};
    color: ${({ theme }) => theme.color.grey[700]};
    font-size: 1em;

    @media (max-width: 480px) {
      font-size: 0.85em;
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
  display: flex;
  align-items: center;
  padding: 4px;

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
