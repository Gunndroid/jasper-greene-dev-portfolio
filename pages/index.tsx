import React, { useState, useEffect } from "react";
import "../app/globals.css";
import Header from "@/components/header";
import Landing from "@/components/landing";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects1";
import Footer from "@/components/footer";
import ColorToggleBtn from "@/components/colorButton";
import Projects2 from "@/components/Projects2";
import Skills2 from "@/components/Skills2";

const Home: React.FC = () => {
  const [colorScheme, setColorScheme] = useState("blue"); // default is 'green'
  const [isNavShow, setIsNavShow] = useState(false);

  const toggleColorScheme = (targetColor: any) => {
    if (colorScheme !== targetColor) {
      setColorScheme(targetColor);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    console.log("colorScheme changed to", colorScheme);
  }, [colorScheme]);

  return (
    <div className='relative transition-all duration-700 ease-in-out  bg-green-950  '>
      {/* <div className='flex space-x-2 fixed top-5 right-5 z-[100]'>
        <ColorToggleBtn
          activeColor={colorScheme}
          options={[
            {
              color: "green", // changed from "Forest"
              onClick: () => toggleColorScheme("green"),
            },
            {
              color: "purple", // changed from "Berry"
              onClick: () => toggleColorScheme("purple"),
            },
            {
              color: "blue", // changed from "Ocean"
              onClick: () => toggleColorScheme("blue"),
            },
          ]}
        />
      </div> */}

      <main>
        {/* <Header colorScheme={colorScheme} /> */}
        <Header
          colorScheme={colorScheme}
          isNavShow={isNavShow}
          setIsNavShow={setIsNavShow}
        />

        <div
          className={`${
            isNavShow
              ? "blur-[5px] sm:blur-none transition-all duration-500"
              : "transition-all duration-500"
          }`}
        >
          <Landing colorScheme={colorScheme} />
          {/* <About colorScheme={colorScheme} /> */}
          <Projects2 colorScheme={colorScheme} />
          <Skills2  />
          <Footer colorScheme={colorScheme} />
        </div>

        {/* <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-5 right-5 p-2 rounded-full bg-c-${colorScheme}-dark text-c-${colorScheme}-gray cursor-pointer focus:outline-none  transition-all duration-700 ease-in-out`}
          aria-label='Scroll to top'
        ></button> */}
      </main>
    </div>
  );
};

export default Home;
