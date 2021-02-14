/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import GlobalStyle from "../styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
// import Head from "./Head";
// import "../styles/main.scss";

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Head /> */}
      <main>{children}</main>
      <Navigation location={location} />
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
