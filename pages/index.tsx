import React, { useState, useEffect } from "react";
import "../app/globals.css";
import Header from "@/components/header";
import Landing from "@/components/landing";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects1";
import Footer from "@/components/footer";
import ColorToggleBtn from "@/components/colorButton";

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
    <div
      className={`bg-c-${colorScheme}-medium relative transition-all duration-700 ease-in-out `}
    >
      <div className="flex space-x-2 fixed top-5 right-5 z-[100]">
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
      </div>

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
          <About colorScheme={colorScheme} />
          <Skills colorScheme={colorScheme} />
          <Projects colorScheme={colorScheme} />
          <Footer colorScheme={colorScheme} />
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-5 right-5 p-2 rounded-full bg-c-${colorScheme}-dark text-c-${colorScheme}-gray cursor-pointer focus:outline-none  transition-all duration-700 ease-in-out`}
          aria-label="Scroll to top"
        >
          {/* ↑ */}
          <div className="w-8">
            <svg
              viewBox="-7.5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              // xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g id="icomoon-ignore"> </g>{" "}
                <path
                  d="M17.067 16.693c0-7.147-4.8-12.373-8.533-16.693-3.733 4.32-8.533 9.547-8.533 16.693 0 6.72 4.96 8.48 8 9.44v5.867h1.067v-5.867c3.040-0.96 8-2.72 8-9.44zM9.067 25.013v-4.16l3.36-3.36-0.747-0.747-2.613 2.613v-10.827h-1.067v5.12l-2.773-2.773-0.747 0.747 3.52 3.52v9.867c-2.933-0.96-6.933-2.613-6.933-8.32 0-6.24 3.893-10.933 7.467-15.040 3.573 4.107 7.467 8.8 7.467 15.040 0 5.707-4 7.36-6.933 8.32z"
                  fill="#f0efeb"
                >
                  {" "}
                </path>{" "}
              </g>
            </svg>
          </div>
        </button>
      </main>
    </div>
  );
};

export default Home;
