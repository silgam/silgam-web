import Script from "next/script";
import { createRef, useEffect } from "react";

import purchaseButtonImage from "../../../../public/static/images/pass_page/button_purchase.png";
import trialButtonImage from "../../../../public/static/images/pass_page/button_trial.png";
import section1Image from "../../../../public/static/images/pass_page/pass2024/section1.png";
import section2Image from "../../../../public/static/images/pass_page/pass2024/section2.png";
import section3Image from "../../../../public/static/images/pass_page/pass2024/section3.png";
import section4Image from "../../../../public/static/images/pass_page/pass2024/section4.png";
import section5Image from "../../../../public/static/images/pass_page/pass2024/section5.png";
import section6Image from "../../../../public/static/images/pass_page/pass2024/section6.png";
import section7Image from "../../../../public/static/images/pass_page/pass2024/section7.png";
import section8Image from "../../../../public/static/images/pass_page/pass2024/section8.png";
import * as Styled from "./index.styled";

declare global {
  interface Window {
    FlutterWebView?: Window;
  }
}

export default function Pass2024Page() {
  const section6Ref = createRef<HTMLDivElement>();

  useEffect(() => {
    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    const onScroll = () => {
      if (window.scrollY >= (section6Ref.current?.offsetTop || 0)) {
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
  });

  const purchase = () => {
    window.FlutterWebView?.postMessage("purchase");
  };

  const trial = () => {
    window.FlutterWebView?.postMessage("trial");
  };

  return (
    <>
      <Script src="/static/scripts/product_page.js" />
      <Styled.Container>
        <Styled.Section>
          <Styled.SectionImage src={section1Image} alt="section" />
        </Styled.Section>
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
        <Styled.Section ref={section6Ref} id="section6">
          <Styled.SectionImage src={section6Image} alt="section" />
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionImage src={section7Image} alt="section" />
          <Styled.ImageButtonPurchase
            onClick={purchase}
            src={purchaseButtonImage}
            alt="purchase button"
            draggable={false}
          />
        </Styled.Section>
        <Styled.Section>
          <Styled.SectionImage src={section8Image} alt="section" />
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
