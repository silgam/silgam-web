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
  gap: 20px;
  flex-direction: ${({ rightImage }) => (rightImage ? "row-reverse" : "row")};

  & > img {
    filter: ${({ rightImage }) =>
      rightImage
        ? "drop-shadow(20px 8px 20px rgba(0, 0, 0, 0.3))"
        : "drop-shadow(-20px 8px 20px rgba(0, 0, 0, 0.3))"};
  }
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 200px;
`;

export const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
`;

export const SectionDescription = styled.div`
  font-size: 22px;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.grey[800]};
`;
