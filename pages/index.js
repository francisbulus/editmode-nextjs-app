import Head from "next/head";
import dynamic from "next/dynamic";
import Layout from "../components/Layout";
const Hero = dynamic(() => import("../components/Hero"), {
  ssr: false,
});
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}
