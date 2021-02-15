import React from "react";
import Icon from "../svgs/home.svg";
import styled from "styled-components";
import Link from "next/link";
import media from "../styles/media-queries";

export const Wrapper = styled.div`
  display: none;
  ${media.tablet`
  display: flex;
  align-self: flex-end;

`}

@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}

  a,
  svg {
    display: block;
    animation-name: spin;
    animation-duration: 5000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear; 
  }

  a {
    width: 1.65rem;
    ${media.tablet`
    position: fixed;
    margin-top: -20px;
    width: 1.95rem;
  `}
  }
  svg {
    width: 100%;
    height: auto;
  }
  }
`;

const HomeIcon = () => (
  <Wrapper>
    <Link href="/">
      <Icon />
    </Link>
  </Wrapper>
);

export default HomeIcon;
