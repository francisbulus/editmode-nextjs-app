/* eslint-disable react/prop-types */
import React from "react";
import useProjects from "../hooks/use-projects";
import Layout from "../components/layout";
import Logo from "../components/Logo.js";
const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
});

const SecondPage = ({ location }) => {
  const projects = useProjects();
  console.log(projects);
  return (
    <Layout location={location}>
      <Logo />
      <Projects projects={projects} />
    </Layout>
  );
};

export default SecondPage;
