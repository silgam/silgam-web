import styled from "styled-components";

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
  padding-top: ${({ theme }) => theme.header.height};
  overflow: hidden;
  padding-bottom: 10%;
`;

export const HomePageSubtitle = styled.h2`
  font-size: 28px;
  font-weight: 400;
  color: black;
`;

export const HomePageTitle = styled.h1`
  font-size: 60px;
  font-weight: 900;
  color: black;
  margin-top: 20px;
  margin-bottom: 60px;
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
`;

export const ChevronDown = styled.div`
  position: absolute;
  bottom: 40px;
  padding: 20px;
  cursor: pointer;

  svg {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const CommentsSection = styled.div`
  background-color: ${({ theme }) => theme.footer.backgroundColor};
  display: flex;
  justify-content: center;
`;

export const CommentsContentWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.contentMaxWidth};
  color: ${({ theme }) => theme.footer.textColor};
  border-bottom: 1px solid ${({ theme }) => theme.color.grey[700]};
  display: flex;
  flex-direction: column;
  font-size: 10px;
  line-height: 1.5;
  padding: 20px 60px;
`;
