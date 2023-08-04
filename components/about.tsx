import React from "react";
import "../app/globals.css";

const About: React.FC = () => {
  return (
    <main
      id="about-section"
      className="flex flex-col items-center justify-center h-screen text-justify bg-c-gray"
    >
      <div className="text-lg w-2/3">
        <h1 className="text-4xl mb-8 text-c-green-medium font-bold">About</h1>
        {/* <p className="mb-4">
          I have a history of creativity, I spent years of my life as a
          filmmaker and photographer, I&apos;ve created hundreds of
          illustrations and paintings.
        </p>
        <p className="mb-4">
          I started my programming journey due to my interest in understanding
          Solidity Smart Contracts, shortly after attempting to read them, I
          realized I needed to learn Javascript first.
        </p>
        <p className="mb-4">Thats how this all began.</p>
        <br />
        <p className="mb-4">
          Currently, I enjoy working with React and Next.js along with Tailwind
          CSS to craft visually stunning and responsive user interfaces.
        </p>
        <p className="mb-4">
          I write code to create useful projects that make a difference.
        </p>
        <br />
        <p className="mb-4">
          In addition to all that, I am a traveler. I&apos;ve had the pleasure
          of visiting more than 25 countries including; Ukraine, Brazil, and
          Japan. I&apos;m very fond of learning and experiencing other cultures.
        </p> */}
        <p className="mb-4">
          With a rich background in creativity, I dedicated several years of my
          life to filmmaking and photography. Over time, I&apos;ve crafted
          hundreds of illustrations and paintings, each reflecting my artistic
          vision.
        </p>
        <p className="mb-4">
          My journey into programming began with a curiosity to understand
          Solidity Smart Contracts. Upon attempting to decipher them, I quickly
          realized the necessity to learn Javascript first.
        </p>
        <p className="mb-4">That&apos;s how this journey began.</p>
        <br />
        <p className="mb-4">
          At present, I find myself working with React and Next.js, complemented
          by Tailwind CSS. These tools enable me to craft visually stunning and
          responsive user interfaces that not only please the eye but also
          provide functionality.
        </p>
        <p className="mb-4">
          My code is more than lines and syntax; it represents my endeavor to
          create impactful projects that make a difference.
        </p>
        <br />
        <p className="mb-4">
          Beyond the digital realm, I am an devoted traveler. I&apos;ve had the
          pleasure of exploring more than 25 countries, including diverse
          destinations such as Ukraine, Brazil, and Japan. Each journey extends
          my appreciation for learning and immersing myself in various cultures.
        </p>
      </div>
    </main>
  );
};

export default About;
