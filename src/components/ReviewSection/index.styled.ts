import styled from "styled-components";

import { defaultTheme } from "@/styles/theme";

export const ReviewSection = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  background-color: ${defaultTheme.color.primary};
  padding: 50px 0 32px 0;
  position: relative;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

export const ReviewSectionTitle = styled.div`
  background-color: white;
  margin-bottom: 12px;
  padding: 4px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & > span {
    line-height: 1;
    font-family: "establishRetrosansOTF";
    font-size: 2.3em;
    font-weight: 500;
    color: ${defaultTheme.color.primary};
    text-align: center;
    margin: 0 4px;

    @media (max-width: 360px) {
      font-size: 2em;
    }
  }
`;

export const ReviewSectionContent = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  padding: 0 5%;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 20px;
`;

export const ReviewCard = styled.div<{
  width: number;
  backgroundColor: string;
}>`
  width: ${({ width }) => `${width}px`};
  max-width: 95vw;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 15px;
  padding: 20px 24px;
  box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.2);
  line-height: 1.5;
  font-size: 14.4px;
  color: ${({ theme }) => theme.color.grey[700]};
  flex: 1;
  white-space: pre-line;

  @media (max-width: 640px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ReviewTitle = styled.h3`
  font-size: 13px;
  font-weight: 500;
  color: white;
  flex-shrink: 0;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

export const ReviewSectionOverlayLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 10%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(40, 53, 147, 0.2) 0%,
    rgba(40, 53, 147, 0) 100%
  );
`;

export const ReviewSectionOverlayRight = styled(ReviewSectionOverlayLeft)`
  left: auto;
  right: 0;
  background: linear-gradient(
    270deg,
    rgba(40, 53, 147, 0.2) 0%,
    rgba(40, 53, 147, 0) 100%
  );
`;
