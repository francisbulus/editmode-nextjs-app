import React from "react";
import styled from "styled-components";
import Image from "./ProfileImage";
import media from "../styles/media-queries";
import theme from "../styles/theme";
import { Loader } from "../styles/shared-styles";
import { Editmode, Chunk } from "editmode-react";

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  position: relative;
  ${media.mobile2`
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 2rem;
  `}
`;

export const StyledImage = styled(Image)`
  grid-area: 1 / 4 / last-line / end;
  background: #1e2735;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    padding-top: 150%;
    display: block;
    ${media.mobile2`
      padding-top: 100%;
    `}
  }

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: auto;
    top: -100%;
    right: -100%;
    bottom: -100%;
    left: -100%;
    mix-blend-mode: lighten;
    opacity: 0.1;
    display: block;
    object-fit: cover;
    ${media.mobile2`
      opacity: .2;
    `}
  }

  ${media.mobile2`
    grid-area: 1 / 1 / 1 / 1;
    &:before {
      padding-top: 100%;
    }
  `}
`;

export const InfoWrapper = styled.header`
  grid-row: 1 / 4;
  grid-column: 1 / 6;
  z-index: 3;
  ${media.phablet`
    grid-row: 2 / 4;
    grid-column: 1 / 7;
  `}
  ${media.mobile2`
    grid-row: 2 / 3;
    grid-column: 1 / 1;
  `}
`;

export const Content = styled.main`
  margin-top: 0.5rem;
  line-height: 1.8em;
  font-size: 16.5px;
  margin: 1.5rem 0;
  font-family: ${theme.fonts.FuturaPT};
  h3 {
    font-family: ${theme.fonts.Inconsolata};
    color: ${theme.colors.darkYellow};
  }
  p {
    font-size: 16.5px;
  }
  ${media.mobile2`
    margin-top: 1rem;
  `}

  p {
    margin: 1.5rem 0;
  }

  a {
    color: #fff !important;
    border-bottom: 1px dotted white !important;

    &:hover {
      border-bottom-color: ${theme.colors.darkYellow} !important;
    }
  }
  span {
    color: ${theme.colors.darkYellow};
    font-family: ${theme.fonts.FuturaPT};
    font-size: 13px;
  }
`;

// eslint-disable-next-line react/prop-types
const ProfileIntro = ({ content }) => (
  <Editmode projectId="prj_TnN3cMjGrc4u">
    <Wrapper>
      <InfoWrapper>
        <Content>{content()}</Content>
      </InfoWrapper>
      <StyledImage alt="Francis Bulus" />
    </Wrapper>
  </Editmode>
);

export default ProfileIntro;
