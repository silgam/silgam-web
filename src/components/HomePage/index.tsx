import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { createRef, useEffect, useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import TextTransition from "react-text-transition";

import { ROUTES } from "@/consts/routes";
import appleIcon from "@/static/images/icons/apple_icon.png";
import googlePlayIcon from "@/static/images/icons/google_play_icon.png";
import clockMockup from "@/static/images/mockups/clock.png";
import lapTimeMockup from "@/static/images/mockups/lap_time.png";
import noiseSettingsMockup from "@/static/images/mockups/noise_settings.png";
import recordDetailMockup from "@/static/images/mockups/record_detail.png";
import statsMockup from "@/static/images/mockups/stats.png";

import { Bold, Superscript } from "../common/Text/index.styled";
import * as Styled from "./index.styled";
import MockupSection from "./MockupSection";

const reviewCardBackgroundColors = ["#E5EAFB", "#F0E7EB"];

export interface Review {
  title: string;
  content: string;
  width: number;
}

export interface HomePageProps {
  reviews: Review[];
}

export default function HomePage({ reviews: reviewsJson }: HomePageProps) {
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
  const [reviews, setReviews] = useState<Review[]>([]);

  const firstSectionRef = createRef<HTMLDivElement>();
  const reviewSectionContentRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const intervalId = setInterval(
      () => setNoiseElementIndex((index) => index + 1),
      700,
    );
    return () => clearTimeout(intervalId);
  }, []);

  useEffect(() => {
    setReviews(reviewsJson);
  }, [reviewsJson]);

  useEffect(() => {
    const interval = setInterval(() => {
      const current = reviewSectionContentRef.current;
      if (!current) return;

      current.scrollBy({ left: 1 });
      if (current.scrollLeft >= current.scrollWidth - current.offsetWidth - 1) {
        current.scrollTo({ left: 0 });
      }
    }, 20);
    return () => {
      clearInterval(interval);
    };
  }, [reviewSectionContentRef]);

  const onClickChevronDown = () => {
    if (firstSectionRef.current) {
      window.scrollTo({
        top: firstSectionRef.current.clientHeight - 54,
        behavior: "smooth",
      });
    }
  };

  return (
    <Styled.HomePageContainer>
      <Styled.FullHeightSection ref={firstSectionRef}>
        <Styled.TitlesContainer>
          <Styled.HomePageSubtitle>
            시험장의 변수 때문에
            <br />
            우리의 노력이 헛되지 않게
          </Styled.HomePageSubtitle>
          <Styled.HomePageTitle>실전 감각, 실감</Styled.HomePageTitle>
          <Styled.DownloadButtonsContainer>
            <Link href={ROUTES.APP_STORE} target="_blank">
              <Styled.DownloadButton>
                <Image src={appleIcon} alt="appleIcon" />
                App Store
              </Styled.DownloadButton>
            </Link>
            <Link href={ROUTES.GOOGLE_PLAY} target="_blank">
              <Styled.DownloadButton>
                <Image src={googlePlayIcon} alt="googlePlayIcon" />
                Google Play
              </Styled.DownloadButton>
            </Link>
          </Styled.DownloadButtonsContainer>
        </Styled.TitlesContainer>
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
      <Styled.ReviewSection>
        <Styled.ReviewSectionTitle>
          <span>실감을 써본 수험생들의</span>
          <span>REAL 후기</span>
        </Styled.ReviewSectionTitle>
        <Styled.ReviewSectionContent ref={reviewSectionContentRef}>
          {reviews.map((review, index) => (
            <Styled.ReviewContainer key={index}>
              <Styled.ReviewCard
                width={review.width}
                backgroundColor={
                  reviewCardBackgroundColors[
                    index % reviewCardBackgroundColors.length
                  ]
                }
                dangerouslySetInnerHTML={{ __html: review.content }}
              />
              <Styled.ReviewTitle>{`< ${review.title} >`}</Styled.ReviewTitle>
            </Styled.ReviewContainer>
          ))}
        </Styled.ReviewSectionContent>
        <Styled.ReviewSectionOverlayLeft />
        <Styled.ReviewSectionOverlayRight />
      </Styled.ReviewSection>
      <div>
        <MockupSection
          mockupSrc={clockMockup}
          title="시험장 시뮬레이션"
          grayBackground
          description={
            <>
              과목별 시험 시간에 맞춰 표시되는 <Bold>아날로그 시계</Bold>,
              <br />
              <Bold>백색소음</Bold> 및 실제 시험장과 동일한{" "}
              <Bold>타종 소리</Bold> 로 <br />
              <Bold>수능 시험장의 현장감</Bold>을 극대화할 수 있어요.
            </>
          }
        />
      </div>
      <MockupSection
        mockupSrc={noiseSettingsMockup}
        title="랜덤재생 소음 ASMR"
        rightImage
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
      />
      <MockupSection
        mockupSrc={lapTimeMockup}
        title="랩타임 기능"
        grayBackground
        description={
          <>
            독서와 문학을 푸는 데 걸린 시간부터
            <br />
            마킹과 검토에 걸린 시간까지.
            <br />
            <Bold>랩타임</Bold> 기능을 통해 손쉽게 기록하고
            <br />
            실전을 위한 <Bold>시간분배</Bold>를 연습할 수 있어요.
            <br />
          </>
        }
      />
      <MockupSection
        mockupSrc={recordDetailMockup}
        title="시험 후 피드백 기록"
        rightImage
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
      />
      <MockupSection
        mockupSrc={statsMockup}
        title="모의고사 통계"
        grayBackground
        description={
          <>
            기록한 모의고사들에 대해 <Bold>응시한 횟수</Bold>, <br />
            <Bold>총 응시 시간</Bold>, 과목별 <Bold>성적 추이</Bold> 등에 대한
            <br />
            통계를 확인할 수 있어요.
            <Superscript>2</Superscript>
          </>
        }
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
