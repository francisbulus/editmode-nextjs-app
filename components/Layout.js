/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import Navigation from "../components/Navigation";
import Home from "./HomeIcon";

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>{children}</main>
      <Navigation location={location} />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
