import { useAnimate, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";

import { ROUTES } from "@/consts/routes";
import appIcon from "@/static/images/logo/app_icon.svg";
import { defaultTheme } from "@/styles/theme";

import * as Styled from "./index.styled";

const USE_HAMBURGER_MENU_WIDTH = 400;

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const isUsingHambergerMenu = useMediaQuery({
    query: `(max-width: ${USE_HAMBURGER_MENU_WIDTH}px)`,
  });
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [menuScope, animateMenu] = useAnimate();

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  const handleMenuButtonClick = () => {
    animateMenu(
      menuScope.current,
      { height: isMenuOpened ? defaultTheme.header.heightMobile : "auto" },
      { duration: 0.3, bounce: 0, ease: "circOut" },
    );
    setIsMenuOpened(!isMenuOpened);
  };

  useEffect(() => {
    if (!isUsingHambergerMenu) {
      delete menuScope.current?.style?.height;
    }
  }, [animateMenu, isUsingHambergerMenu, menuScope]);

  return (
    <Styled.HeaderContainer
      ref={menuScope}
      showBorder={isScrolled}
      isUsingHambuger={isUsingHambergerMenu}
    >
      <Styled.HeaderContent isUsingHambuger={isUsingHambergerMenu}>
        <Link href={ROUTES.HOME} style={{ textDecoration: "none" }}>
          <Styled.LogoContainer>
            <Image src={appIcon} alt="app_icon" />
            <span>실감</span>
          </Styled.LogoContainer>
        </Link>
        {isUsingHambergerMenu && (
          <Styled.HambugerButton
            isActive={isMenuOpened}
            toggleButton={handleMenuButtonClick}
            buttonWidth={28}
            barColor={defaultTheme.color.grey[600]}
          />
        )}
      </Styled.HeaderContent>
      <Styled.NavContainer
        isUsingHambuger={isUsingHambergerMenu}
        isMenuOpened={isMenuOpened}
      >
        <Link href={ROUTES.SUPPORT} target="_blank">
          문의
        </Link>
        <Link href={ROUTES.DOWNLOAD} target="_blank">
          다운로드
        </Link>
        <Styled.SnsButtonsContainer>
          <Styled.IconButton href={ROUTES.OPEN_CHAT} target="_blank">
            <RiKakaoTalkFill />
          </Styled.IconButton>
          <Styled.IconButton href={ROUTES.INSTAGRAM} target="_blank">
            <BsInstagram />
          </Styled.IconButton>
          <Styled.IconButton href={ROUTES.FACEBOOK} target="_blank">
            <BsFacebook />
          </Styled.IconButton>
          <Styled.IconButton href={ROUTES.YOUTUBE} target="_blank">
            <BsYoutube />
          </Styled.IconButton>
        </Styled.SnsButtonsContainer>
      </Styled.NavContainer>
    </Styled.HeaderContainer>
  );
}
