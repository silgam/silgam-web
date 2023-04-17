import Image from "next/image";
import styled from "styled-components";

export const MockupSection = styled.section<{
  grayBackground?: boolean;
}>`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ grayBackground }) =>
    grayBackground ? "#fafaff" : "white"};
`;

export const ContentWrapper = styled.div<{
  rightImage?: boolean;
}>`
  width: 100%;
  max-width: 1050px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 200px 60px;
  gap: 40px;
  flex-direction: ${({ rightImage }) => (rightImage ? "row-reverse" : "row")};

  @media (max-width: 830px) {
    flex-direction: column;
    padding: 80px 24px;
  }
`;

const rightShadow = "drop-shadow(20px 8px 20px rgba(0, 0, 0, 0.3))";
const leftShadow = "drop-shadow(-20px 8px 20px rgba(0, 0, 0, 0.3))";

export const MockupImage = styled(Image)<{
  rightImage?: boolean;
}>`
  width: 340px;
  height: unset;
  filter: ${({ rightImage }) => (rightImage ? rightShadow : leftShadow)};
  // https://github.com/mdn/browser-compat-data/issues/17726
  transform: translateZ(0);

  @media (max-width: 1024px) {
    width: 280px;
  }

  @media (max-width: 830px) {
    filter: ${leftShadow};
  }

  @media (max-width: 480px) {
    width: 240px;
  }

  @media (max-width: 280px) {
    width: 100%;
  }
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 200px;
  font-size: 48px;

  @media (max-width: 1024px) {
    font-size: 40px;
  }

  @media (max-width: 830px) {
    font-size: 32px;
    padding-top: 20px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    padding-top: 12px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 1em;
  font-weight: 700;
`;

export const SectionDescription = styled.div`
  font-size: 0.458em;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.grey[800]};
`;
