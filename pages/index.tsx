import React from "react";
import "../app/globals.css";
import Header from "@/components/header";
import Landing from "@/components/landing";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects1";
import Footer from "@/components/footer";

const Home: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main>
      <Header />
      <Landing />
      <About />
      <Skills />
      <Projects />
      <Footer />
      <button
        onClick={scrollToTop}
        className="fixed bottom-5 right-5 p-3 rounded-full bg-c-green-dark text-c-gray cursor-pointer focus:outline-none hover:bg-opacity-80 transition-all"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </main>
  );
};

export default Home;
