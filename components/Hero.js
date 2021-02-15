import React from "react";
import styled from "styled-components";
import { mixins } from "../styles/shared-styles";
import CustomSection from "./CustomSection";
import media from "../styles/media-queries";
import theme from "../styles/theme";
import { generateSpace } from "../styles/shared-styles";

import { Editmode, Chunk } from "editmode-react";

const Container = styled(CustomSection)`
  ${mixins.flexCenter};
  margin: 0 auto;
  ${generateSpace("padding")};
  max-width: 800px;
  ${media.tablet`padding: 10px 20px;`};
  flex-direction: column;
  align-items: flex-start;
  height: 100vh;
  ${media.tablet`padding: 2.2rem;`};
`;

const StyledCTAButton = styled.a`
  ${mixins.bigButton};
  // align-self: center;
  margin-top: 50px;
  font-family: ${theme.fonts.Inconsolata};
  border: 0.5px solid ${theme.colors.darkYellow};
  border-radius: 0px;
`;

const StyledIntro = styled.div`
  color: ${theme.colors.darkYellow};
  font-size: ${theme.fontSizes.md};
  font-weight: normal;
  margin: 0 0 18px 0px;
  font-family: "Roboto Mono";
`;

const StyledTitle = styled.h2`
  font-size: 45px;
  color: ${theme.colors.titleWhite};
  line-height: 1.1;
  span {
    color: ${theme.colors.darkYellow};
  }

  ${media.tablet`font-size: 37px !important;`};
  ${media.mobile`font-size: 31px !important;`};
`;

const StyledDescription = styled.div`
  margin-top: 18px;
  width: 100%;
  max-width: 650px;
  font-family: ${theme.fonts.FuturaPT};
  font-weight: normal;
  color: #adbbca;
  ${media.mobile`${theme.fontSizes.sm}`};
  del {
    text-decoration: line-through;
    text-decoration-color: ${theme.colors.darkYellow};
    text-decoration-thickness: auto;
  }
  p {
    ${media.phablet`line-height: 1.625em !important;`}
  }
`;

export default function Hero() {
  return (
    <>
      <Editmode projectId="prj_TnN3cMjGrc4u">
        <Container>
          <StyledIntro>
            <Chunk identifier="cnk_1fa0e002ae2fb278c83f" />
          </StyledIntro>
          <StyledTitle>
            <Chunk identifier="cnk_e00c86ee69a9ed3cbf51" />
          </StyledTitle>
          <StyledDescription>
            <Chunk identifier="cnk_cb6ab5d4a6ade8c6fb95" />
          </StyledDescription>
          <StyledCTAButton href={`mailto:notchera@gmail.com`}>
            GET IN TOUCH
          </StyledCTAButton>
        </Container>
      </Editmode>
    </>
  );
}
