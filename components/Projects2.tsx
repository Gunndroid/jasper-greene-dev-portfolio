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
import tropicool from "../public/img/tropicool.png";

// Assuming the same interface and projects array from Projects1
interface ProjectProps {
  colorScheme: string;
}

const Projects2: React.FC<ProjectProps> = ({ colorScheme }) => {
  const [activeProject, setActiveProject] = useState(0);

  // Assuming the same projects array from Projects1
  const projects = [
    {
      title: "LingoWorld",
      href: "https://lingoworld.vercel.app/",
      description:
        "LingoWorld was envisioned as a digital bridge to connect language enthusiasts from around the world. Built with a modern tech stack, it showcases the passion for community building and cross-cultural interactions.",
      technologies: "NextJS, Tailwind, Typescript",
      image: lingoWorld,
    },
    {
      title: "Tropicool Treats",
      href: "https://tropicooltreats.vercel.app/",
      description:
        "This project was inspired by a local Hawaiian Ice Creamery.",
      technologies: "NextJS, Tailwind, Typescript",
      image: tropicool,
    },
    {
      title: "F1 Cuts",
      href: "https://f1-cuts.vercel.app/",
      description:
        "This App is a Video Marketing Agency. This app was made with react, it encompasses ",
      technologies: "(React, Tailwind CSS)",
      image: f1,
    },
    {
      title: "American RFID",
      href: "https://stg-americanrfidsolutionscom-staging.kinsta.cloud/",
      description:
        "For this American RFID Company, I built an entirely new landing page. Mockups, updated brand messaging, modernized styling and even some MidJourney AI generated art was used for backgrounds and testimonial profile pictures.",
      technologies: "Wordpress and Elementor, PHP",
      image: ars,
    },
    {
      title: "PuffWizz NFT",
      href: "https://puffwizz-nft.vercel.app/",
      description:
        "This was an origin project for me, the Puffwizz NFT project. It was this concept that sparked my interest in coding. I was very curious to build an NFT project and write my own Solidity Smart Contract. I wanted to understand how to read and write such contracts and thus this project was born.",
      technologies: "React, Solidity",
      image: puffwizz,
    },

    {
      title: "Color Randomizer",
      href: "https://gunndroid.github.io/random_color/",
      description: "This App Generates a Random RGB Color.",
      technologies: "(React)",
      image: random_color,
    },

    // {
    //   title: "Big Run Wolf",
    //   href: "https://bigrunwolfranch.org/",
    //   description:
    //     "Wildlife Ranch with Events and Animal Education. I was tasked with maintaining and upkeep of this site, producing event pages, and updating information related to policies. I'm fond of this project because I have a fascination with different kinds of animals.",
    //   technologies: "WordPress, Elementor",
    //   image: brwr,

    // },
    // {
    //   title: "Lil Bird Kitchens",
    //   href: "https://lilbirdkitchens.com/",
    //   description:
    //     "Vegetable Mixes Ecommerce Site. This project consisted of building a food-based ecommerce store from the ground up. I was tasked with improving the branding image and message, creating the products, and giving the business an online voice. Everything from adding to cart to submitting the checkout, I made successfully functional.",
    //   technologies: "WordPress, Elementor",
    //   image: lbk,

    // },
  ];

  return (
    <div id='projects-section' className={` border-t border-b border-white`}>
      {projects.map((project, index) => (
        <a
          href={project.href}
          target='_blank'
          rel='noreferrer'
          className='flex md:w-[600px] mx-auto justify-between items-center border border-white
          p-1 rounded-[6px] transition-all duration-300 ease-in-out md:overflow-hidden md:my-20 my-8 hover:bg-emerald-800 bg-emerald-900'
        >
          {project.image && (
            <Image
              className='rounded-md shadow-sm w-60'
              src={project.image}
              alt={project.title}
            />
          )}
          <div className={`text-right text-white md:pr-6 pr-2`}>
            <p className='font-bold text-lg'>{project.title}</p>
            <i className='text-xs'>{project.technologies}</i>
            {/* <p className='text-sm'>{project.description}</p> */}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects2;
