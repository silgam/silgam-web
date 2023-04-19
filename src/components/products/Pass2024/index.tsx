import Image from "next/image";

import * as Styled from "./index.styled";

export default function Pass2024Page() {
  return (
    <Styled.Container>
      <Styled.Section>
        <Image
          src="/static/images/pass_page/pass2024/section1.png"
          alt="section1"
        />
      </Styled.Section>
    </Styled.Container>
  );
}
