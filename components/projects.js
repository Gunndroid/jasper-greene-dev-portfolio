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

const Projects = () => {
  return (
    <section id="projects-box">
      <h3 className="text-white text-2xl text-center font-bold m-5 ">
        <span className="px-10 py-2 bg-stone-700 rounded-md uppercase">
          Portfolio
        </span>
      </h3>

      <div className="grid md:grid-cols-3 grid-rows-3 gap-14 text-black text-center text-lg m-14 mb-24">
        <div>
          <p className="font-bold">Lil Bird Kitchens</p>
          <a
            href="https://stg-lilbirdkitchens-staging.kinsta.cloud/"
            target="_blank"
            rel="noreferrer"
          >
            {/* <Image
              className="rounded-md shadow-gray-500 border-white shadow-md border-2 w-5/6 mx-auto m-4"
              src={lbk}
              alt=""
            /> */}
          </a>
          <p>
            Vegetable Mixes Ecommerce Site
            <br />
            <i>(WordPress, Elementor)</i>
          </p>
        </div>

        <div id="sleep">
          <p className="font-bold">Sport With Me</p>
          <a
            href="https://sportwithme.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="rounded-md shadow-gray-500 border-white shadow-md border-2 w-5/6 mx-auto m-4"
              src={swm}
              alt="Sport With Me"
            />
          </a>
          <p>
            A Sports App Connecting Pupils and Coaches <br />
            <i>(Next.js, Express.js)</i>
          </p>
        </div>

        <div>
          <p className="font-bold">F1 Cuts</p>
          <a
            href="https://f1-cuts.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="rounded-md shadow-gray-500 border-white shadow-md border-2 w-5/6 mx-auto m-4"
              src={f1}
              alt="Command Center project"
            />
          </a>
          <p>
            This App is a Video Marketing Agency.
            <br />
            <i>(React, Tailwind CSS)</i>
          </p>
        </div>
        <div id="randomColor">
          <p className="font-bold">American RFID Solutions</p>
          <a
            href="https://stg-americanrfidsolutionscom-staging.kinsta.cloud/"
            target="_blank"
            rel="noreferrer"
          >
            {/* <Image
              className="rounded-md shadow-gray-500 border-white shadow-md border-2 w-5/6 mx-auto m-4"
              src={ars}
              alt="Color Randomizer app"
            /> */}
          </a>
          <p>
            RFID Ecommerce Site
            <br />
            <i>(Wordpress and Elementor)</i>
          </p>
        </div>

        <div id="puffwizz">
          <p className="font-bold">PuffWizz NFT</p>
          <a
            href="https://puffwizz-nft.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="rounded-md shadow-gray-500 border-white shadow-md border-2 w-5/6 mx-auto m-4"
              src={puffwizz}
              alt="Puffwizz NFT project"
            />
          </a>
          <p>
            My Puffwizz NFT project.
            <br />
            <i>(React, Solidity)</i>
          </p>
        </div>

        <div id="randomColor">
          <p className="font-bold">Command Center</p>
          <a href="https://cmdcntr.io/" target="_blank" rel="noreferrer">
            <Image
              className="rounded-md shadow-gray-500 border-white shadow-md border-2 w-5/6 mx-auto m-4"
              src={commandcenter}
              alt="Command Center project"
            />
          </a>

          <p>
            This App Manages Tickets for Web Development.
            <br />
            <i>(React, Tailwind CSS)</i>
          </p>
        </div>

        <div>
          <p className="font-bold">Big Run Wolf Ranch</p>
          <a
            href="https://bigrunwolfranch.org/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="rounded-md shadow-gray-500 border-white shadow-md border-2 w-5/6 mx-auto m-4"
              src={brwr}
              alt=""
            />
          </a>
          <p>
            Wildlife Ranch with Events and Animal Education
            <br />
            <i>(WordPress, Elementor)</i>
          </p>
        </div>

        <div id="whale">
          <p className="font-bold">Human to Whale Speech</p>
          <a
            href="https://gunndroid.github.io/Human-to-Whale-Talk/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="rounded-md shadow-gray-500 border-white shadow-md border-2 w-5/6 mx-auto m-4"
              src={whale}
              alt="Human to Whale Speech project"
            />
          </a>
          <p>
            This App Will Translate English into Whale Speech.
            <br />
            <i>(Javascript)</i>
          </p>
        </div>

        {/* <div id="sleep">
          <p className="font-bold">Sleep Debt Calculator</p>
          <a
            href="https://gunndroid.github.io/sleepDebtCalculator/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="rounded-md shadow-gray-500 border-white shadow-md border-2 w-5/6 mx-auto m-4"
              src={sleep}
              alt="Sleep Debt Calculator project"
            />
          </a>
          <p>
            Built to Calculate if You Need More Sleep.
            <br />
            <i>(Javascript)</i>
          </p>
        </div> */}

        <div id="randomColor">
          <p className="font-bold">Color Randomizer</p>
          <a
            href="https://gunndroid.github.io/random_color/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="rounded-md shadow-gray-500 border-white shadow-md border-2 w-5/6 mx-auto m-4"
              src={random_color}
              alt="Color Randomizer app"
            />
          </a>
          <p>
            This App Generates a Random RGB Color.
            <br />
            <i>(React)</i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
