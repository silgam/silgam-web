import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsChevronCompactDown } from "react-icons/bs";

import appleIcon from "../../../public/static/images/icons/apple_icon.png";
import googlePlayIcon from "../../../public/static/images/icons/google_play_icon.png";
import clockMockup from "../../../public/static/images/mockups/clock.png";
import noiseSettingsMockup from "../../../public/static/images/mockups/noise_settings.png";
import recordDetailMockup from "../../../public/static/images/mockups/record_detail.png";
import statsMockup from "../../../public/static/images/mockups/stats.png";
import { Bold } from "../common/Text/index.styled";
import * as Styled from "./index.styled";
import MockupSection from "./MockupSection";

export default function HomePage() {
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
              <Image src={appleIcon} alt="appleIcon" width={24} />
              App Store
            </Styled.DownloadButton>
          </Link>
          <Link href="/googleplay" target="_blank">
            <Styled.DownloadButton>
              <Image src={googlePlayIcon} alt="googlePlayIcon" width={24} />
              Google Play
            </Styled.DownloadButton>
          </Link>
        </Styled.DownloadButtonsContainer>
        <Styled.ChevronDown>
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
            <BsChevronCompactDown size={48} />
          </motion.div>
        </Styled.ChevronDown>
      </Styled.FullHeightSection>
      <MockupSection
        mockupSrc={clockMockup}
        title="시험장 시뮬레이션"
        description={
          <>
            과목별 시험 시간에 맞춰 표시되는 <Bold>아날로그 시계</Bold>, <br />
            <Bold>백색소음</Bold> 및 실제 시험장과 동일한 <Bold>타종 소리</Bold>
            로 <br />
            <Bold>수능 시험장의 현장감</Bold>을 극대화할 수 있어요.
          </>
        }
        grayBackground
      />
      <MockupSection
        mockupSrc={noiseSettingsMockup}
        title="랜덤재생 소음 ASMR"
        description={
          <>
            <Bold>다리 떠는</Bold> 소리, <Bold>시험지 넘기는</Bold> 소리,{" "}
            <Bold>기침</Bold> 소리... <br />
            랜덤으로 재생되는 소음의 빈도를 조절하며 <br />
            다양한 난이도로 실전 모의고사를 연습해보세요.
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
          </>
        }
        rightImage
      />
    </Styled.HomePageContainer>
  );
}
