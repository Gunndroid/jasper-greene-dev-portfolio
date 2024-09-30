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
import sport from "../public/img/sportwme.png";
import fix30 from "../public/img/fix30small.jpg";
import amorvia from "../public/img/amorvia.jpg";
import hh from "../public/img/hh.png";

// Assuming the same interface and projects array from Projects1
interface ProjectProps {
  colorScheme: string;
}

const Projects2: React.FC<ProjectProps> = ({ colorScheme }) => {
  const [activeProject, setActiveProject] = useState(0);

  // Assuming the same projects array from Projects1
  const projects = [
    {
      title: "Amorvia: Connecting Travelers",
      href: "",
      description:
        "LingoWorld was envisioned as a digital bridge to connect language enthusiasts from around the world. Built with a modern tech stack, it showcases the passion for community building and cross-cultural interactions.",
      technologies: "React-Native",
      image: amorvia,
    },
    {
      title: "30fix: Habits Made Simple",
      href: "https://apps.apple.com/us/app/30fix-habits-made-simple/id6504657742",
      description:
        "LingoWorld was envisioned as a digital bridge to connect language enthusiasts from around the world. Built with a modern tech stack, it showcases the passion for community building and cross-cultural interactions.",
      technologies: "React-Native",
      image: fix30,
    },
    {
      title: "HouseHound",
      href: "https://househound.ai/main/home",
      description:
        "LingoWorld was envisioned as a digital bridge to connect language enthusiasts from around the world. Built with a modern tech stack, it showcases the passion for community building and cross-cultural interactions.",
      technologies: "React",
      image: hh,
    },
    {
      title: "Sport with Me",
      href: "https://sportwithme.vercel.app/",
      description:
        "LingoWorld was envisioned as a digital bridge to connect language enthusiasts from around the world. Built with a modern tech stack, it showcases the passion for community building and cross-cultural interactions.",
      technologies: "React",
      image: sport,
    },
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
      technologies: "React, Tailwind CSS",
      image: f1,
    },
    {
      title: "American RFID",
      href: "https://stg-americanrfidsolutionscom-staging.kinsta.cloud/",
      description:
        "For this American RFID Company, I built an entirely new landing page. Mockups, updated brand messaging, modernized styling and even some MidJourney AI generated art was used for backgrounds and testimonial profile pictures.",
      technologies: "Wordpress + Elementor, PHP",
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
      technologies: "React",
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
      <h2 className='text-3xl font-semibold pt-10 text-center text-emerald-700'>
        Projects
      </h2>

      {projects.map((project, index) => (
        <a
          key={index}
          href={project.href}
          target='_blank'
          rel='noreferrer'
          className='flex md:w-[600px] md:mx-auto justify-between items-center border border-white
          p-1 mx-2 rounded-[6px] transition-all duration-300 ease-in-out md:overflow-hidden md:my-20 my-8 hover:bg-emerald-800 bg-emerald-900'
        >
          {project.image && (
            <Image
              className='rounded-md shadow-sm w-60'
              src={project.image}
              alt={project.title}
            />
          )}
          <div className={`text-right text-white md:pr-6 pr-2`}>
            <p className='font-bold text-xl'>{project.title}</p>
            <i className='text-md'>{project.technologies}</i>
            {/* <p className='text-sm'>{project.description}</p> */}
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects2;
