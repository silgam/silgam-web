import Image from "next/image";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { RiKakaoTalkFill } from "react-icons/ri";

import { ROUTES } from "@/consts/routes";

import appIconGrey from "../../../../public/static/images/logo/app_icon_grey.svg";
import * as Styled from "./index.styled";

export default function Footer() {
  return (
    <Styled.FooterContainer>
      <Styled.ButtonsContainer>
        <Styled.IconButton href={ROUTES.SUPPORT} target="_blank">
          <BiSupport size={24} />
        </Styled.IconButton>
        <Styled.IconButton href={ROUTES.OPEN_CHAT} target="_blank">
          <RiKakaoTalkFill size={24} />
        </Styled.IconButton>
        <Styled.IconButton href={ROUTES.INSTAGRAM} target="_blank">
          <BsInstagram size={24} />
        </Styled.IconButton>
        <Styled.IconButton href={ROUTES.FACEBOOK} target="_blank">
          <BsFacebook size={24} />
        </Styled.IconButton>
        <Styled.IconButton href={ROUTES.YOUTUBE} target="_blank">
          <BsYoutube size={24} />
        </Styled.IconButton>
      </Styled.ButtonsContainer>
      <Styled.DescriptionContainer>
        <div>
          <Link href={ROUTES.TERMS} target="_blank">
            서비스 이용약관
          </Link>{" "}
          |{" "}
          <Link href={ROUTES.PRIVACY} target="_blank">
            개인정보 처리방침
          </Link>
        </div>
      </Styled.DescriptionContainer>
      <Link href={ROUTES.HOME}>
        <Styled.LogoContainer>
          <Image src={appIconGrey} alt="app_icon" height={28} />
          <span>실전 감각, 실감</span>
        </Styled.LogoContainer>
      </Link>
    </Styled.FooterContainer>
  );
}
