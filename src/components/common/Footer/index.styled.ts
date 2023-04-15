import Link from "next/link";
import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.footer.textColor};
  background-color: ${({ theme }) => theme.footer.backgroundColor};
  text-align: center;
  gap: 30px;
  padding: 48px 80px;
  font-size: 12px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const IconButton = styled(Link)`
  padding: 4px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 8px;

  span {
    font-weight: 700;
    font-size: 18px;
    color: ${({ theme }) => theme.color.grey[200]};
  }
`;
