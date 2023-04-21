import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ROUTES } from "@/consts/routes";
import appIcon from "@/static/images/logo/app_icon.svg";

import * as Styled from "./index.styled";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <Styled.HeaderContainer showBorder={isScrolled}>
      <Styled.HeaderContent>
        <Link href={ROUTES.HOME} style={{ textDecoration: "none" }}>
          <Styled.LogoContainer>
            <Image src={appIcon} alt="app_icon" />
            <span>실감</span>
          </Styled.LogoContainer>
        </Link>
        <Styled.NavContainer>
          <Link href={ROUTES.SUPPORT} target="_blank">
            문의
          </Link>
          <Link href={ROUTES.DOWNLOAD} target="_blank">
            다운로드
          </Link>
        </Styled.NavContainer>
      </Styled.HeaderContent>
    </Styled.HeaderContainer>
  );
}
