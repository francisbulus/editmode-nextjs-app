/* eslint-disable react/prop-types */
import React from "react";
import Layout from "../components/Layout";
import Logo from "../components/Logo.js";
import dynamic from "next/dynamic";
const Profile = dynamic(() => import("../components/Profile"), {
  ssr: false,
});

const ThirdPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Logo />
      <Profile />
    </Layout>
  );
};

export default ThirdPage;
