import "../app/globals.css";
import ContactBox from "../components/contactBox";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Header from "@/components/header";
import Head from "@/node_modules/next/head";
import About from "@/components/about";

import Landing from "@/components/landing";

const Home: React.FC = () => (
  <main>
    <Header />
    <Landing />
    <About />
  </main>
);

export default Home;
