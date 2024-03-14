import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #283593;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const SectionImage = styled(Image)`
  width: 100%;
  height: auto;
  max-width: 800px;
  pointer-events: none;
`;

const ImageButton = styled(SectionImage)`
  position: absolute;
  pointer-events: all;
  transition: all 0.2s ease-in-out;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

export const ImageButtonPurchase = styled(ImageButton)`
  width: calc(592 / 700 * 100%);
  max-width: calc(592 / 700 * 800px);
  top: calc((473 - 30) / 815 * 100%);
`;

export const ImageButtonTrial = styled(ImageButton)`
  width: calc(592 / 700 * 100%);
  max-width: calc(592 / 700 * 800px);
  top: calc((572.5 - 30) / 848 * 100%);
`;
