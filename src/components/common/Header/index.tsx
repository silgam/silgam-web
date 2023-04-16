import { useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import appIcon from "../../../../public/static/images/logo/app_icon.svg";
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
        <Link href="" style={{ textDecoration: "none" }}>
          <Styled.LogoContainer>
            <Image src={appIcon} alt="app_icon" />
            <span>실감</span>
          </Styled.LogoContainer>
        </Link>
        <Styled.NavContainer>
          <Link href="">소개</Link>
          <Link href="">문의</Link>
          <Link href="">다운로드</Link>
        </Styled.NavContainer>
      </Styled.HeaderContent>
    </Styled.HeaderContainer>
  );
}
