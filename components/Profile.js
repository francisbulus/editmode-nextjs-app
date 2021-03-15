/* eslint-disable react/display-name */
import React from "react";
import ProfileIntro from "./ProfileIntro";
import styled from "styled-components";
import media from "../styles/media-queries";
import { Editmode, Chunk } from "editmode-react";

const Container = styled.section`
  max-width: 68rem;
  width: calc(100% - 9.25rem * 2);
  margin: 11rem auto 5rem;
  ${media.pseudo`
  margin: 8rem auto 3rem;
  width: calc(100% - 11rem * 2);
`}

  ${media.phablet`
  width: 100%;
  margin: 4rem auto 0;
  padding: 0 3rem 6rem;
  margin-top: 8rem !important;
`}

${media.mobile`
  margin: 2rem auto 0;
  padding: 0 2rem 6rem;
`}
`;

export default () => {
  return (
    <Editmode projectId="prj_TnN3cMjGrc4u">
      <Container>
        <ProfileIntro
          content={() => (
            <>
              <h3>QUIS SUM</h3>
              <Chunk identifier="cnk_fcd336d483cf97c46d6c" />
            </>
          )}
        />
      </Container>
    </Editmode>
  );
};
