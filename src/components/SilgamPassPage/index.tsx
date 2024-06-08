import { useRouter } from "next/router";
import Script from "next/script";
import { createRef, useEffect } from "react";

import ReviewSection, { Review } from "@/components/ReviewSection";
import { ROUTES } from "@/consts/routes";
import purchaseButtonImage from "@/static/images/pass_page/button_purchase.png";
import trialButtonImage from "@/static/images/pass_page/button_trial.png";
import section1ImageBefore from "@/static/images/pass_page/sections/section1_20240604.png";
import section1ImageAfter from "@/static/images/pass_page/sections/section1_20240608.png";
import section2Image from "@/static/images/pass_page/sections/section2.png";
import section3Image from "@/static/images/pass_page/sections/section3.png";
import section4Image from "@/static/images/pass_page/sections/section4.png";
import section5Image from "@/static/images/pass_page/sections/section5.png";
import section6Image from "@/static/images/pass_page/sections/section6.png";
import section7Image from "@/static/images/pass_page/sections/section7.png";
import section8Image from "@/static/images/pass_page/sections/section8.png";
import section9ImageBefore from "@/static/images/pass_page/sections/section9_20240604.png";
import section9ImageAfter from "@/static/images/pass_page/sections/section9_20240608.png";
import section10Image from "@/static/images/pass_page/sections/section10.png";

import * as Styled from "./index.styled";

declare global {
  interface Window {
    FlutterWebView?: Window;
  }
}

export interface SilgampassPageProps {
  reviews: Review[];
}

export default function SilgamPassPage({ reviews }: SilgampassPageProps) {
  const router = useRouter();

  let flutterBuildNumber: number | undefined = Number(router.query.buildNumber);
  if (isNaN(flutterBuildNumber)) {
    flutterBuildNumber = undefined;
  }

  const section8Ref = createRef<HTMLDivElement>();
  const isBefore = new Date() < new Date("2024-06-08T00:00:00+09:00");

  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    const onScroll = () => {
      if (window.scrollY >= (section8Ref.current?.offsetTop || 0)) {
        window.FlutterWebView?.postMessage("purchaseSectionShown");
      } else {
        window.FlutterWebView?.postMessage("purchaseSectionHidden");
      }
    };

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const purchase = () => {
    const webView = window.FlutterWebView;
    if (webView) {
      webView.postMessage("purchase");
    } else {
      window.open(ROUTES.DOWNLOAD, "_blank");
    }
  };

  const trial = () => {
    const webView = window.FlutterWebView;
    if (webView) {
      webView.postMessage("trial");
    } else {
      window.open(ROUTES.DOWNLOAD, "_blank");
    }
  };

  const showCustomExamGuide = () => {
    const webView = window.FlutterWebView;
    if (webView) {
      webView.postMessage("showCustomExamGuide");
    } else {
      window.open(ROUTES.DOWNLOAD, "_blank");
    }
  };

  return (
    <>
      <Script src="/static/scripts/product_page.js" />
      <Styled.Container>
        {flutterBuildNumber && flutterBuildNumber >= 999 ? (
          // TODO: 커스텀 과목 소개 추가
          <Styled.Section>
            커스텀 과목 소개
            <button onClick={showCustomExamGuide}>더 알아보기</button>
          </Styled.Section>
        ) : null}
        <Styled.Section>
          <Styled.SectionImage
            src={isBefore ? section1ImageBefore : section1ImageAfter}
            alt="section"
          />
        </Styled.Section>
        <ReviewSection reviews={reviews} />
        <div style={{ height: "28px" }} />
        <Styled.Section>
          <Styled.SectionImage src={section2Image} alt="section" />
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionImage src={section3Image} alt="section" />
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionImage src={section4Image} alt="section" />
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionImage src={section5Image} alt="section" />
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionImage src={section6Image} alt="section" />
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionImage src={section7Image} alt="section" />
        </Styled.Section>
        <Styled.Section ref={section8Ref} id="section8">
          <Styled.SectionImage src={section8Image} alt="section" />
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionImage
            src={isBefore ? section9ImageBefore : section9ImageAfter}
            alt="section"
          />
          <Styled.ImageButtonPurchase
            onClick={purchase}
            src={purchaseButtonImage}
            alt="purchase button"
            draggable={false}
          />
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionImage src={section10Image} alt="section" />
          <Styled.ImageButtonTrial
            onClick={trial}
            src={trialButtonImage}
            alt="trial button"
            draggable={false}
          />
        </Styled.Section>
      </Styled.Container>
    </>
  );
}
