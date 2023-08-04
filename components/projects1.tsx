import React from "react";
import Image from "next/image";

import commandcenter from "../public/img/commandcenter.png";
import puffwizz from "../public/img/puffwizz.png";
import whale from "../public/img/whale.png";
// import sleep from "../media/img/sleep.png";
import random_color from "../public/img/random_color.png";
import f1 from "../public/img/f1cuts.png";
import brwr from "../public/img/brwr.png";
// import lbk from "../public/media/img/lbk.png";
// import ars from "../public/media/img/ARS.png";
import swm from "../public/img/sport.png";

// Images imported here

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Lil Bird Kitchens",
      href: "https://lilbirdkitchens.com/",
      description: "Vegetable Mixes Ecommerce Site",
      technologies: "(WordPress, Elementor)",
      image: swm,
      color: "bg-red-900",
    },
    {
      title: "Sport With Me",
      href: "https://sportwithme.vercel.app/",
      description: "A Sports App Connecting Pupils and Coaches",
      technologies: "(Next.js, Express.js)",
      image: swm,
      color: "bg-lime-900",
    },
    {
      title: "F1 Cuts",
      href: "https://f1-cuts.vercel.app/",
      description: "This App is a Video Marketing Agency.",
      technologies: "(React, Tailwind CSS)",
      image: f1,
      color: "bg-red-800",
    },
    // {
    //   title: "American RFID Solutions",
    //   href: "https://stg-americanrfidsolutionscom-staging.kinsta.cloud/",
    //   description: "RFID Ecommerce Site",
    //   technologies: "(Wordpress and Elementor)",
    //   image: null, // Replace with the appropriate image
    // },
    {
      title: "PuffWizz NFT",
      href: "https://puffwizz-nft.vercel.app/",
      description: "My Puffwizz NFT project.",
      technologies: "(React, Solidity)",
      image: puffwizz,
      color: "bg-pink-800",
    },
    // {
    //   title: "Command Center",
    //   href: "https://cmdcntr.io/",
    //   description: "This App Manages Tickets for Web Development.",
    //   technologies: "(React, Tailwind CSS)",
    //   image: commandcenter,
    // },
    {
      title: "Big Run Wolf Ranch",
      href: "https://bigrunwolfranch.org/",
      description: "Wildlife Ranch with Events and Animal Education",
      technologies: "(WordPress, Elementor)",
      image: brwr,
      color: "bg-stone-800",
    },
    // {
    //   title: "Human to Whale Speech",
    //   href: "https://gunndroid.github.io/Human-to-Whale-Talk/",
    //   description: "This App Will Translate English into Whale Speech.",
    //   technologies: "(Javascript)",
    //   image: whale,
    // },
    // {
    //   title: "Color Randomizer",
    //   href: "https://gunndroid.github.io/random_color/",
    //   description: "This App Generates a Random RGB Color.",
    //   technologies: "(React)",
    //   image: random_color,
    // },
  ];

  return (
    <section id="projects-box" className="flex flex-col h-screen ">
      <h3 className="text-white text-2xl text-center font-bold m-5 ">
        <span className="px-10 py-2 text-c-green-medium text-4xl ">
          Recent Works
        </span>
      </h3>

      {projects.map((project) => (
        <div
          className={`flex flex-col items-center justify-center h-screen ${project.color} `} // Added top and bottom margin
          key={project.title}
        >
          <div className="flex items-center w-5/6 mx-auto">
            {" "}
            <div className="flex flex-col mr-14 text-white">
              {" "}
              <p className="font-bold text-3xl">{project.title}</p>
              <p className="text-md">
                {project.description}
                <br />
                <i>{project.technologies}</i>
              </p>
            </div>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="h-screen"
            >
              {project.image && (
                <Image
                  className="rounded-md shadow-black shadow-md w-5/6"
                  src={project.image}
                  alt={project.title}
                />
              )}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
