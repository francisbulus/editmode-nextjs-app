/* eslint-disable react/prop-types */
import React from "react";
import styled, { css } from "styled-components";
import media from "../styles/media-queries";
import theme from "../styles/theme";
import { generateSpace } from "../styles/shared-styles";
import Link from "./Link";

const NavWrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  pointer-events: none;
  ${generateSpace("padding")};
  ${(props) => (!props.open ? `counter-reset: li;` : "")}

  ul:last-child li {
    text-align: right;

    a {
      transition: color 0.4s ease;
      will-change: color;
      position: relative;

      &:not(.active)::before {
        opacity: 1;
        transform: translate(-1rem, -50%);
      }

      &:hover {
        color: #fff;

        &::before {
          transform: translate(0, -50%);
          opacity: 1;
        }
      }
    }
  }
  ${media.tablet`
  position: static;
  padding: 0;
`}
`;

export const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 50%;
  max-width: 14rem;
`;

export const NavItem = styled.li`
  list-style: none;
  padding: 0.5rem 0;
  line-height: 0.85em;

  &:last-child {
    padding-bottom: 0;
  }

  a {
    font-size: 0.8rem;
    font-family: ${theme.fonts.Inconsolata};
    pointer-events: all;
    transition: color 0.1s ease;
    line-height: 1em;
    ${(props) =>
      props.highlight
        ? css`
            color: ${theme.colors.darkYellow};

            &:hover::before {
              display: none !important;
              color: #fff;
            }
          `
        : css`
            color: ${theme.colors.darkGrey};
            &:hover {
              color: white;
            }
          `}
  }
`;
export const NavLink = styled.a`
  &.active {
    color: #fff;

    &::before {
      transform: translate(0, -50%);
      opacity: 1;
    }
  }
`;

const EmailMe = ({ className, text }) => (
  <a className={className} rel="noopener" href="mailto:notchera@gmail.com">
    {text}
  </a>
);

const Menu = ({ open }) => (
  <NavWrapper open={open}>
    <Nav open={open}>
      <NavItem>
        <a
          href="https://twitter.com/auxinom"
          rel="noopener noreferrer"
          target="_blank"
        >
          TWITTER
        </a>
      </NavItem>
      <NavItem>
        <a
          href="https://github.com/francisbulus"
          rel="noopener noreferrer"
          target="_blank"
        >
          GITHUB
        </a>
      </NavItem>
      <NavItem>
        <a
          href="https://medium.com/@AuxiNom"
          rel="noopener noreferrer"
          target="_blank"
        >
          MEDIUM
        </a>
      </NavItem>
      <NavItem>
        <a
          href="https://www.linkedin.com/in/francis-bulus"
          rel="noopener noreferrer"
          target="_blank"
        >
          LINKEDIN
        </a>
      </NavItem>
    </Nav>
    <Nav>
      <NavItem open={open}>
        <NavLink open={open} href="/" activeClassName="current-page">
          HOME
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/work" activeClassName="current-page">
          WORK
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/profile" activeClassName="current-page">
          PROFILE
        </NavLink>
      </NavItem>
      <NavItem highlight>
        <EmailMe text="CONTACT" />
      </NavItem>
    </Nav>
  </NavWrapper>
);

export default Menu;
