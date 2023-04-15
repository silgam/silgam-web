import Image from "next/image";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";

import appIconGrey from "../../../../public/static/images/logo/app_icon_grey.svg";
import * as Styled from "./index.styled";

export default function Footer() {
  return (
    <Styled.FooterContainer>
      <Styled.ButtonsContainer>
        <Styled.IconButton href="">
          <BiSupport size={24} />
        </Styled.IconButton>
        <Styled.IconButton href="">
          <RiKakaoTalkFill size={24} />
        </Styled.IconButton>
        <Styled.IconButton href="">
          <BsInstagram size={24} />
        </Styled.IconButton>
        <Styled.IconButton href="">
          <BsFacebook size={24} />
        </Styled.IconButton>
      </Styled.ButtonsContainer>
      <div>
        <Link href="">서비스 이용약관</Link> |{" "}
        <Link href="">개인정보 처리방침</Link>
      </div>
      <div>실감 | 대표: 민승현 | 이메일: contact@silgam.app</div>
      <div>사업자등록번호: 101-79-00366</div>
      <Link href="">
        <Styled.LogoContainer>
          <Image src={appIconGrey} alt="app_icon" height={28} />
          <span>실전 감각, 실감</span>
        </Styled.LogoContainer>
      </Link>
    </Styled.FooterContainer>
  );
}
