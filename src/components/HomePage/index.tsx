import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { createRef, useEffect, useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import TextTransition from "react-text-transition";

import appleIcon from "../../../public/static/images/icons/apple_icon.png";
import googlePlayIcon from "../../../public/static/images/icons/google_play_icon.png";
import clockMockup from "../../../public/static/images/mockups/clock.png";
import noiseSettingsMockup from "../../../public/static/images/mockups/noise_settings.png";
import recordDetailMockup from "../../../public/static/images/mockups/record_detail.png";
import statsMockup from "../../../public/static/images/mockups/stats.png";
import { Bold, Superscript } from "../common/Text/index.styled";
import * as Styled from "./index.styled";
import MockupSection from "./MockupSection";

export default function HomePage() {
  const noiseElements = [
    "시험지 넘기는",
    "글씨 쓰는",
    "지우개로 지우는",
    "샤프 딸깍하는",
    "기침",
    "한숨",
    "의자 삐걱이는",
    "코 훌쩍이는",
    "다리 떠는",
    "옷 부딪히는",
    "의자 움직이는",
    "뭔가 바닥에 떨어지는",
  ].map((text, index) => (
    <div key={index}>
      <Bold>{text}</Bold> 소리
    </div>
  ));

  const [noiseElementIndex, setNoiseElementIndex] = useState(0);
  const clockMockupSectionRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const intervalId = setInterval(
      () => setNoiseElementIndex((index) => index + 1),
      700,
    );
    return () => clearTimeout(intervalId);
  }, []);

  const onClickChevronDown = () => {
    if (clockMockupSectionRef.current) {
      clockMockupSectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Styled.HomePageContainer>
      <Styled.FullHeightSection>
        <Styled.HomePageSubtitle>
          시험장의 변수 때문에 우리의 노력이 헛되지 않게
        </Styled.HomePageSubtitle>
        <Styled.HomePageTitle>실전 감각, 실감</Styled.HomePageTitle>
        <Styled.DownloadButtonsContainer>
          <Link href="/appstore" target="_blank">
            <Styled.DownloadButton>
              <Image src={appleIcon} alt="appleIcon" />
              App Store
            </Styled.DownloadButton>
          </Link>
          <Link href="/googleplay" target="_blank">
            <Styled.DownloadButton>
              <Image src={googlePlayIcon} alt="googlePlayIcon" />
              Google Play
            </Styled.DownloadButton>
          </Link>
        </Styled.DownloadButtonsContainer>
        <Styled.ChevronDown onClick={onClickChevronDown}>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 6 }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          >
            <BsChevronCompactDown />
          </motion.div>
        </Styled.ChevronDown>
      </Styled.FullHeightSection>
      <div ref={clockMockupSectionRef}>
        <MockupSection
          mockupSrc={clockMockup}
          title="시험장 시뮬레이션"
          description={
            <>
              과목별 시험 시간에 맞춰 표시되는 <Bold>아날로그 시계</Bold>,
              <br />
              <Bold>백색소음</Bold> 및 실제 시험장과 동일한{" "}
              <Bold>타종 소리</Bold> 로 <br />
              <Bold>수능 시험장의 현장감</Bold>을 극대화할 수 있어요.
            </>
          }
          grayBackground
        />
      </div>
      <MockupSection
        mockupSrc={noiseSettingsMockup}
        title="랜덤재생 소음 ASMR"
        description={
          <>
            <TextTransition>
              {noiseElements[noiseElementIndex % noiseElements.length]}
            </TextTransition>
            랜덤으로 재생되는 소음의 빈도를 조절하며 <br />
            다양한 난이도로 실전 모의고사를 연습해보세요.
            <Superscript>1</Superscript>
          </>
        }
        rightImage
      />
      <MockupSection
        mockupSrc={recordDetailMockup}
        title="시험 후 피드백 기록"
        description={
          <>
            모의고사 응시 후 바로 <Bold>점수</Bold>와 <Bold>등급</Bold>을
            기록하고, <br />
            시험에 대한 <Bold>피드백</Bold>과 <Bold>오답노트</Bold>를 앱 내에서
            <br />
            손쉽게 정리해보세요. 정리한 내용은 시험 후에도 <br />
            언제든지 <Bold>간편히 복습</Bold>할 수 있어요.
          </>
        }
        grayBackground
      />
      <MockupSection
        mockupSrc={statsMockup}
        title="모의고사 통계"
        description={
          <>
            기록한 모의고사들에 대해 <Bold>응시한 횟수</Bold>, <br />
            <Bold>총 응시 시간</Bold>, 과목별 <Bold>성적 추이</Bold> 등에 대한
            <br />
            통계를 확인할 수 있어요.
            <Superscript>2</Superscript>
          </>
        }
        rightImage
      />
      <Styled.CommentsSection>
        <Styled.CommentsContentWrapper>
          1. 일부 소음은 실감 패스(유료 상품) 인앱결제 시 이용 가능합니다.
          <br />
          2. 통계 기능은 실감 패스(유료 상품) 인앱결제 시 이용 가능합니다.
        </Styled.CommentsContentWrapper>
      </Styled.CommentsSection>
    </Styled.HomePageContainer>
  );
}
