import Image, { StaticImageData } from "next/image";

import * as Styled from "./index.styled";

interface MockupSectionProps {
  mockupSrc: StaticImageData;
  title: JSX.Element | string;
  description: JSX.Element | string;
  rightImage?: boolean;
  grayBackground?: boolean;
}

export default function MockupSection({
  mockupSrc,
  title,
  description,
  rightImage,
  grayBackground,
}: MockupSectionProps) {
  return (
    <Styled.MockupSection grayBackground={grayBackground}>
      <Styled.ContentWrapper rightImage={rightImage}>
        <Image src={mockupSrc} alt="mockupImage" width={340} />
        <Styled.SectionTitleContainer>
          <Styled.SectionTitle>{title}</Styled.SectionTitle>
          <Styled.SectionDescription>{description}</Styled.SectionDescription>
        </Styled.SectionTitleContainer>
      </Styled.ContentWrapper>
    </Styled.MockupSection>
  );
}
