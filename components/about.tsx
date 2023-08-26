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
            With a history in creativity, I&apos;ve dedicated several years of
            my life to filmmaking and photography. Over time, I&apos;ve crafted
            hundreds of illustrations and paintings, each reflecting my artistic
            vision.
          </p>
          <p className="mb-4">
            My journey into programming began with a curiosity to understand
            Solidity Smart Contracts. Upon attempting to decipher them, I
            quickly realized the necessity to learn Javascript first.
          </p>
          <p className="mb-4">That&apos;s how this all began.</p>
          <br />
          <p className="mb-4">
            At present, I find myself working with Next.js and Typescript
            complemented by Tailwind CSS. These tools enable me to craft
            visually stunning and responsive user interfaces that not only
            please the eye but also provide functionality.
          </p>
          <p className="mb-4">
            My code is more than lines and syntax; it represents my endeavor to
            create impactful projects that make a difference.
          </p>
          <br />
          <p className="mb-4">
            Beyond the digital realm, I am an devoted traveler. I&apos;ve had
            the pleasure of exploring more than 25 countries, including diverse
            destinations such as Ukraine, Brazil, and Japan. Each journey
            extends my appreciation for learning and immersing myself in various
            cultures.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
