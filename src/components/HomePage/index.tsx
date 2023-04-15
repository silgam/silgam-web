import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsChevronCompactDown } from "react-icons/bs";

import appleIcon from "../../../public/static/images/icons/apple_icon.png";
import googlePlayIcon from "../../../public/static/images/icons/google_play_icon.png";
import * as Styled from "./index.styled";

export default function HomePage() {
  return (
    <Styled.HomePageContainer>
      <Styled.FullHeightSection>
        <Styled.HomePageSubtitle>
          시험장의 변수 때문에 우리의 노력이 헛되지 않게
        </Styled.HomePageSubtitle>
        <Styled.HomePageTitle>실전 감각, 실감</Styled.HomePageTitle>
        <Styled.DownloadButtonsContainer>
          <Link href="/appstore" target="_blank">
            <Styled.DownloadButton>
              <Image src={appleIcon} alt="appleIcon" width={24} />
              App Store
            </Styled.DownloadButton>
          </Link>
          <Link href="/googleplay" target="_blank">
            <Styled.DownloadButton>
              <Image src={googlePlayIcon} alt="googlePlayIcon" width={24} />
              Google Play
            </Styled.DownloadButton>
          </Link>
        </Styled.DownloadButtonsContainer>
        <Styled.ChevronDown>
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 6 }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          >
            <BsChevronCompactDown size={48} />
          </motion.div>
        </Styled.ChevronDown>
      </Styled.FullHeightSection>
      <Styled.FullHeightSection />
    </Styled.HomePageContainer>
  );
}
