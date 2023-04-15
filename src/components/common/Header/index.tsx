import Image from "next/image";
import Link from "next/link";

import appIcon from "../../../../public/static/images/logo/app_icon.svg";
import * as Styled from "./index.styled";

export default function Header() {
  return (
    <Styled.HeaderContainer>
      <Styled.HeaderContent>
        <Link href="" style={{ textDecoration: "none" }}>
          <Styled.LogoContainer>
            <Image src={appIcon} alt="app_icon" height={28} />
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
