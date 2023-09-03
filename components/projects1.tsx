import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../app/globals.css";

import commandcenter from "../public/img/commandcenter.png";
import puffwizz from "../public/img/puffwizz.png";
import whale from "../public/img/whale.png";
// import sleep from "../media/img/sleep.png";
import random_color from "../public/img/random_color.png";
import f1 from "../public/img/f1cuts.png";
import brwr from "../public/img/brwr.png";
import lbk from "../public/img/lbk2.png";
import mesaku from "../public/img/mesaku.png";
import ars from "../public/img/ARS.png";
import lingoWorld from "../public/img/lingoWorld.png";
// import swm from "../public/img/sport.png";

// Images imported here

interface ProjectProps {
  colorScheme: string;
}

const Projects: React.FC<ProjectProps> = ({ colorScheme }) => {
  const projects = [
    {
      title: "LingoWorld",
      href: "https://lingoworld.vercel.app/",
      description:
        "LingoWorld was envisioned as a digital bridge to connect language enthusiasts from around the world. Built with a modern tech stack, it showcases the passion for community building and cross-cultural interactions.",
      technologies: "NextJS, Tailwind, Typescript",
      image: lingoWorld,
      color: `bg-c-${colorScheme}-gray`,
    },
    {
      title: "Mesaku Sushi",
      href: "https://mesaku.vercel.app/",
      description:
        "This project represents a modern overhaul of the Mesaku Sushi website. By leveraging cutting-edge technology, I've optimized its performance, enhanced SEO, and streamlined user navigation to offer an improved and seamless experience.",
      technologies: "NextJS, Tailwind, Typescript",
      image: mesaku,
      color: `bg-c-${colorScheme}-light`,
    },
    // {
    //   title: "Lil Bird Kitchens",
    //   href: "https://lilbirdkitchens.com/",
    //   description:
    //     "Vegetable Mixes Ecommerce Site. This project consisted of building a food-based ecommerce store from the ground up. I was tasked with improving the branding image and message, creating the products, and giving the business an online voice. Everything from adding to cart to submitting the checkout, I made successfully functional.",
    //   technologies: "WordPress, Elementor",
    //   image: lbk,
    //   color: `bg-c-${colorScheme}-gray`,
    // },

    // {
    //   title: "F1 Cuts",
    //   href: "https://f1-cuts.vercel.app/",
    //   description:
    //     "This App is a Video Marketing Agency. This app was made with react, it encompasses ",
    //   technologies: "(React, Tailwind CSS)",
    //   image: f1,
    //   color: "bg-c-green-light",
    // },
    // {
    //   title: "American RFID Solutions",
    //   href: "https://stg-americanrfidsolutionscom-staging.kinsta.cloud/",
    //   description:
    //     "For this American RFID Company, I built an entirely new landing page. Mockups, updated brand messaging, modernized styling and even some MidJourney AI generated art was used for backgrounds and testimonial profile pictures.",
    //   technologies: "Wordpress and Elementor, PHP",
    //   image: ars,
    //   color: `bg-c-${colorScheme}-light`,
    // },
    {
      title: "PuffWizz NFT",
      href: "https://puffwizz-nft.vercel.app/",
      description:
        "This was an origin project for me, the Puffwizz NFT project. It was this concept that sparked my interest in coding. I was very curious to build an NFT project and write my own Solidity Smart Contract. I wanted to understand how to read and write such contracts and thus this project was born.",
      technologies: "React, Solidity",
      image: puffwizz,
      color: `bg-c-${colorScheme}-medium`,
    },
    {
      title: "Command Center",
      href: "https://cmdcntr.io/",
      description:
        "This App Manages Tickets for Web Development. I worked with CMD CNTR for all of 2022, helping with frontend styling of the app that was being developed. In addition I cleaned up and mainted this site, consistently adding blog posts, using lottie animations, and improving the overall look of the site.",
      technologies: "React, Tailwind CSS, Gatsby, DaisyUI",
      image: commandcenter,
      color: `bg-c-${colorScheme}-dark`,
    },
    {
      title: "Big Run Wolf",
      href: "https://bigrunwolfranch.org/",
      description:
        "Wildlife Ranch with Events and Animal Education. I was tasked with maintaining and upkeep of this site, producing event pages, and updating information related to policies. I'm fond of this project because I have a fascination with different kinds of animals.",
      technologies: "WordPress, Elementor",
      image: brwr,
      color: `bg-c-${colorScheme}-darker`,
    },
    // {
    //   title: "Human to Whale Speech",
    //   href: "https://gunndroid.github.io/Human-to-Whale-Talk/",
    //   description: "This App Will Translate English into Whale Speech.",
    //   technologies: "(Javascript)",
    //   image: whale,
    //   color: "bg-green-800",
    // },
    // {
    //   title: "Color Randomizer",
    //   href: "https://gunndroid.github.io/random_color/",
    //   description: "This App Generates a Random RGB Color.",
    //   technologies: "(React)",
    //   image: random_color,
    //   color: "bg-orange-800",
    // },
  ];

  const [activeProject, setActiveProject] = useState(0);

  return (
    <div id="projects-section" className={`bg-c-blue-gray h-screen min-w-full`}>
      <section
        className={`flex flex-row h-full sm:h-screen overflow-x-auto overflow-y-hidden bg-c-${colorScheme}-darker`}
        onMouseLeave={() => setActiveProject(0)}
      >
        <h3
          className={`right-10 font-bold sm:pt-10 pt-4 md:pt-12  cursor-default text-c-${colorScheme}-darker md:text-c-green-gray md:text-4xl sm:text-3xl text-xl absolute`}
        >
          Projects
        </h3>

        {projects.map((project, index) => (
          <div
            onMouseEnter={() => setActiveProject(index)}
            className={`flex flex-col items-center justify-center transition-all duration-700 ease-in-out  ${
              project.color
            } ${activeProject === index ? "w-full" : "sm:w-14"}`}
            key={project.title}
          >
            {/* Div holding image and text */}
            <div className="flex flex-col lg:flex-row items-start md:items-center justify-center w-11/12  ">
              <div className="flex flex-col items-center text-center ml-4 sm:ml-10 mb-2 md:mb-0 ">
                {activeProject === index && (
                  // Project Title and Desc
                  <div
                    className={`sm:w-5/6 text-left lg:text-justify ${
                      [
                        "PuffWizz NFT",
                        "Command Center",
                        "Big Run Wolf",
                      ].includes(project.title)
                        ? `text-c-${colorScheme}-gray`
                        : `text-c-${colorScheme}-darker`
                    }`}
                  >
                    <p className="font-bold sm:text-lg text-xl md:text-3xl mb-6 p-2 whitespace-nowrap mt-20">
                      {project.title}
                    </p>
                    <div className=" text-lg mb-12 lg:mb-0 text-justify ">
                      <div className="mb-4 p-2">{project.description}</div>
                      <i className="p-2">{project.technologies}</i>
                    </div>
                  </div>
                )}
              </div>
              {/* IMAGE AS LINK */}
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="h-5/6 flex items-center justify-center mb-20 sm:mb-0"
              >
                {activeProject === index && project.image && (
                  <Image
                    className={`project-image rounded-md shadow-black shadow-md w-10/12 mt-4   min-w-[10rem] ${
                      index === 0
                        ? "filter grayscale hover:grayscale-0 transition-all duration-500 ease-in-out"
                        : ""
                    }`}
                    src={project.image}
                    alt={project.title}
                  />
                )}
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Projects;
