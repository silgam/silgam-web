import styled from "styled-components";

import { defaultTheme } from "@/styles/theme";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FullHeightSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    rgba(40, 53, 147, 0) 0%,
    rgba(40, 53, 147, 0) 10%,
    rgba(40, 53, 147, 0.2) 80%,
    rgba(40, 53, 147, 0.2) 100%
  );
  padding: ${({ theme }) => theme.header.height} 8px 20vh 8px;
  overflow: hidden;
  font-size: 28px;

  @media (max-width: 640px) {
    font-size: 20px;
  }
`;

export const HomePageSubtitle = styled.h2`
  font-size: 1em;
  font-weight: 400;
  color: black;
  text-align: center;

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;

export const HomePageTitle = styled.h1`
  font-size: 2.14em;
  font-weight: 900;
  color: black;
  margin-top: 20px;
  margin-bottom: 60px;
  text-align: center;

  @media (max-width: 480px) {
    margin-top: 8px;
    font-size: 2em;
  }
`;

export const DownloadButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const DownloadButton = styled.div`
  display: flex;
  padding: 12px 24px;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 10px;
  color: white;
  align-items: center;
  justify-content: center;
  line-height: 1.2;
  gap: 8px;
  font-size: 0.58em;
  transition: background-color 0.1s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 640px) {
    padding: 10px 20px;
  }

  & > img {
    width: 24px;
    height: 24px;

    @media (max-width: 640px) {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ChevronDown = styled.div`
  position: absolute;
  bottom: 3vh;
  padding: 20px;
  cursor: pointer;

  svg {
    width: 48px;
    height: 48px;
    color: rgba(0, 0, 0, 0.3);

    @media (max-width: 640px) {
      width: 32px;
      height: 32px;
    }
  }
`;

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

export const ReviewSectionTitle = styled.h2`
  font-family: "establishRetrosansOTF";
  font-size: 2.3em;
  font-weight: 500;
  color: ${defaultTheme.color.primary};
  text-align: center;
  background-color: white;
  margin-bottom: 12px;
  padding: 0 12px;
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

export const CommentsSection = styled.div`
  background-color: ${({ theme }) => theme.footer.backgroundColor};
  display: flex;
  justify-content: center;
  padding: 0 20px;
`;

export const CommentsContentWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => `calc(${theme.width.contentMax} - 120px)`};
  color: ${({ theme }) => theme.footer.textColor};
  border-bottom: 1px solid ${({ theme }) => theme.color.grey[700]};
  display: flex;
  flex-direction: column;
  font-size: 10px;
  line-height: 1.5;
  padding: 20px 8px;
`;
