import "../app/globals.css";

import Header from "@/components/header";
import Landing from "@/components/landing";
import About from "@/components/about";
import Projects from "@/components/projects1";

const Home: React.FC = () => (
  <main>
    <Header />
    <Landing />
    <About />
    <Projects />
  </main>
);

export default Home;
