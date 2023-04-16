import { StaticImageData } from "next/image";

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
        <Styled.MockupImage
          src={mockupSrc}
          alt="mockupImage"
          rightImage={rightImage}
        />
        <Styled.SectionTitleContainer>
          <Styled.SectionTitle>{title}</Styled.SectionTitle>
          <Styled.SectionDescription>{description}</Styled.SectionDescription>
        </Styled.SectionTitleContainer>
      </Styled.ContentWrapper>
    </Styled.MockupSection>
  );
}
