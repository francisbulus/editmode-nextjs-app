/* eslint-disable react/prop-types */
import React from "react";
import Layout from "../components/layout";
// import Logo from "../components/Logo.js";
import Projects from "../components/Projects";
import works from "../lib/projects";

const SecondPage = ({ location }) => {
  return (
    <Layout location={location}>
      {/* <Logo /> */}
      <Projects projects={works} />
    </Layout>
  );
};

export default SecondPage;
