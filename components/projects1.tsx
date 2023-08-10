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
import ars from "../public/img/ARS.png";
// import swm from "../public/img/sport.png";

// Images imported here

interface ProjectProps {
  colorScheme: string;
}

const Projects: React.FC<ProjectProps> = ({ colorScheme }) => {
  const projects = [
    {
      title: "Lil Bird Kitchens",
      href: "https://lilbirdkitchens.com/",
      description:
        "Vegetable Mixes Ecommerce Site. This project consisted of building a food-based ecommerce store from the ground up. I was tasked with improving the branding image and message, creating the products, and giving the business an online voice. Everything from adding to cart to submitting the checkout, I made successfully functional.",
      technologies: "WordPress, Elementor",
      image: lbk,
      color: `bg-c-${colorScheme}-gray`,
    },

    // {
    //   title: "F1 Cuts",
    //   href: "https://f1-cuts.vercel.app/",
    //   description:
    //     "This App is a Video Marketing Agency. This app was made with react, it encompasses ",
    //   technologies: "(React, Tailwind CSS)",
    //   image: f1,
    //   color: "bg-c-green-light",
    // },
    {
      title: "American RFID Solutions",
      href: "https://stg-americanrfidsolutionscom-staging.kinsta.cloud/",
      description:
        "RFID Ecommerce Site Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Donec in efficitur ipsum. Proin a diam et dui fermentum molestie non id neque. Duis at venenatis eros, eget lacinia elit.",
      technologies: "Wordpress and Elementor",
      image: ars, // Replace with the appropriate image
      color: `bg-c-${colorScheme}-light`,
    },
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
        className="flex flex-row h-screen overflow-x-auto overflow-y-hidden bg-stone-800"
        onMouseLeave={() => setActiveProject(0)}
      >
        <h3
          className={`right-12 font-bold pt-12 text-c-${colorScheme}-gray text-4xl absolute`}
        >
          Projects
        </h3>
        {projects.map((project, index) => (
          <div
            onMouseEnter={() => setActiveProject(index)}
            className={`flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
              project.color
            } ${activeProject === index ? "w-full" : "w-14"}`}
            key={project.title}
          >
            <div className="flex flex-row items-center justify-center w-full ">
              <div className="flex flex-col text-center ml-20">
                {activeProject === index && (
                  <div
                    className={`w-5/6 text-justify ${
                      [
                        "PuffWizz NFT",
                        "Command Center",
                        "Big Run Wolf",
                      ].includes(project.title)
                        ? `text-c-${colorScheme}-gray`
                        : `text-${colorScheme}-dark`
                    }`}
                  >
                    <p className="font-bold text-3xl mb-6">{project.title}</p>
                    <div className="text-md">
                      <div className="mb-4">{project.description}</div>
                      <i>{project.technologies}</i>
                    </div>
                  </div>
                )}
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="h-5/6 flex items-center justify-center"
              >
                {activeProject === index && project.image && (
                  <Image
                    className={`project-image rounded-md shadow-black shadow-md w-11/12 mr-16 ${
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
