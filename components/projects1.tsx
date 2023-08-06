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
// import ars from "../public/media/img/ARS.png";
import swm from "../public/img/sport.png";

// Images imported here

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Lil Bird Kitchens",
      href: "https://lilbirdkitchens.com/",
      description: "Vegetable Mixes Ecommerce Site",
      technologies: "WordPress, Elementor",
      image: lbk,
      color: "bg-c-gray",
    },
    // {
    //   title: "Sport With Me",
    //   href: "https://sportwithme.vercel.app/",
    //   description: "A Sports App Connecting Pupils and Coaches",
    //   technologies: "(Next.js, Express.js)",
    //   image: swm,
    //   color: "bg-lime-900",
    // },
    {
      title: "F1 Cuts",
      href: "https://f1-cuts.vercel.app/",
      description: "This App is a Video Marketing Agency.",
      technologies: "(React, Tailwind CSS)",
      image: f1,
      color: "bg-c-green-light",
    },
    // {
    //   title: "American RFID Solutions",
    //   href: "https://stg-americanrfidsolutionscom-staging.kinsta.cloud/",
    //   description: "RFID Ecommerce Site",
    //   technologies: "Wordpress and Elementor",
    //   image: null, // Replace with the appropriate image
    //   color: "bg-c-green-medium",
    // },
    {
      title: "PuffWizz NFT",
      href: "https://puffwizz-nft.vercel.app/",
      description: "My Puffwizz NFT project.",
      technologies: "React, Solidity",
      image: puffwizz,
      color: "bg-c-green-medium",
    },
    {
      title: "Command Center",
      href: "https://cmdcntr.io/",
      description: "This App Manages Tickets for Web Development.",
      technologies: "React, Tailwind CSS",
      image: commandcenter,
      color: "bg-c-green-darker",
    },
    {
      title: "Big Run Wolf Ranch",
      href: "https://bigrunwolfranch.org/",
      description: "Wildlife Ranch with Events and Animal Education",
      technologies: "WordPress, Elementor",
      image: brwr,
      color: "bg-stone-800",
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

  const [activeProject, setActiveProject] = useState(0); // Initialize activeProject to 0

  return (
    <div id="projects-section" className="bg-c-gray h-screen min-w-full ">
      <section
        className="flex flex-row h-screen overflow-x-auto overflow-y-hidden bg-stone-800"
        onMouseLeave={() => setActiveProject(0)} // Set activeProject to 0 when mouse leaves the section
      >
        <h3 className="right-12 font-bold pt-12 text-c-gray text-4xl absolute ">
          Projects
        </h3>
        {projects.map((project, index) => (
          <div
            onMouseEnter={() => setActiveProject(index)}
            className={`flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
              project.color
            } ${activeProject === index ? "w-full" : "w-14"}`}
            key={project.title}
          >
            <div className="flex flex-row items-center justify-center w-full space-x-10">
              {" "}
              <div className="flex flex-col text-stone-700 text-center ml-16">
                {activeProject === index && (
                  <>
                    <p className="font-bold text-3xl mb-6">{project.title}</p>
                    <div className="text-md">
                      <div className="mb-4">{project.description}</div>
                      <i>{project.technologies}</i>
                    </div>
                  </>
                )}
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="h-5/6 flex items-center justify-center" // Add these classes
              >
                {project.image && (
                  <Image
                    className={`project-image rounded-md shadow-black shadow-md w-5/6 ${
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
