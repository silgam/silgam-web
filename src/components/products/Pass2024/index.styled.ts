import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
`;

const SectionImage = styled(Image)`
  width: 100%;
  max-width: 800px;
  pointer-events: none;
`;
