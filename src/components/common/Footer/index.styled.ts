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
  gap: 10px;
  padding: 40px 80px;
  font-size: 12px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 4px;
  gap: 8px;
  margin-top: 20px;

  span {
    font-weight: 700;
    font-size: 18px;
    color: ${({ theme }) => theme.color.grey[200]};
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 20px;
`;

export const IconButton = styled(Link)`
  padding: 4px;
`;
