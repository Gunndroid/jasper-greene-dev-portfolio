import React from "react";
import "../app/globals.css";

interface AboutProps {
  colorScheme: string;
}

const About: React.FC<AboutProps> = ({ colorScheme }) => {
  return (
    <main
      id="about-section"
      className={`flex flex-col items-center justify-center md:min-h-screen text-justify bg-c-${colorScheme}-gray transition-all duration-700 ease-in-out`}
    >
      <div className="text-lg w-full sm:w-3/4 p-12  overflow-y-auto ">
        <h1
          className={`text-4xl mb-8 text-c-${colorScheme}-medium font-bold transition-all duration-700 ease-in-out`}
        >
          About
        </h1>
        <div
          className={`text-c-${colorScheme}-darker transition-all duration-700 ease-in-out`}
        >
          <p className="mb-4">
            My journey into the intricate world of programming was sparked by an
            interest in Solidity Smart Contracts. However, I soon recognized the
            foundational importance of mastering Javascript, which marked the
            inception of my coding odyssey.
          </p>

          <p className="mb-4">
            Currently, my expertise lies in leveraging the capabilities of React
            and Typescript, augmented by the finesse of Tailwind CSS. This suite
            empowers me to design user interfaces that are not merely
            aesthetically captivating but are also steeped in functionality. For
            me, coding transcends the binary of zeros and ones—it stands as a
            testament to my commitment to pioneering projects with tangible
            impacts.
          </p>

          <p className="mb-4">
            Outside the confines of the digital sphere, I possess an unwavering
            passion for travel. With footprints across over 25 nations, from the
            historic lanes of Ukraine to the bustling streets of Brazil and the
            serene landscapes of Japan, each expedition has enriched my
            perspective, amplifying my zeal for continual learning and cultural
            immersion.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
