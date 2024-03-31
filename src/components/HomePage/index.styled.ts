import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FullHeightSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url("/static/images/landing_image.png");
  background-size: cover;
  background-position-x: 20%;
  padding: ${({ theme }) => theme.header.height} 8px 8px 8px;
  overflow: hidden;
  font-size: 28px;

  @media (max-width: 640px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.header.heightMobile} 8px 8px 8px;
  }
`;

export const TitlesContainer = styled.div`
  position: absolute;
  bottom: 18vh;
  right: 10vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;
`;

export const HomePageSubtitle = styled.h2`
  font-size: 1em;
  font-weight: 400;
  color: white;
  text-align: right;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;

export const HomePageTitle = styled.h1`
  font-size: 2.14em;
  font-weight: 900;
  color: white;
  margin-top: 20px;
  margin-bottom: 60px;
  text-align: right;

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
  align-self: center;
  padding: 20px;
  cursor: pointer;

  svg {
    width: 48px;
    height: 48px;
    color: rgba(255, 255, 255, 0.3);

    @media (max-width: 640px) {
      width: 32px;
      height: 32px;
    }
  }
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
