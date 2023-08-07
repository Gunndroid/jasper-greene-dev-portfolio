/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <nav className="bg-transparent fixed top-0 w-full flex justify-between h-10 text-c-gray items-center z-50">
        <img src="/path/to/your/logo.png" alt="Logo" className="h-8 ml-4" />

        <div className="flex space-x-10 mr-8 mt-5">
          <Link legacyBehavior href="#home-section">
            <a className="w-fit text-center mx-auto">Home</a>
          </Link>
          <Link legacyBehavior href="#about-section">
            <a className="w-fit mx-auto">About</a>
          </Link>

          <Link legacyBehavior href="#skills-section">
            <a className="w-fit mx-auto">Skills</a>
          </Link>
          <Link legacyBehavior href="#projects-section">
            <a className="w-fit mx-auto">Projects</a>
          </Link>

          <a onClick={openModal} className="w-fit mx-auto cursor-pointer">
            Resume
          </a>
          {/* <a
          href="https://github.com/Gunndroid"
          target="_blank"
          rel="noreferrer"
          className="w-fit mx-auto"
        >
          GitHub
        </a> */}

          {/* <div>
          <a
            id="contact"
            className="w-fit"
            href="mailto:glukari@protonmail.com"
          >
            Contact
          </a>
        </div> */}
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          <div className="bg-c-gray pt-10 pb-4 px-4 rounded-lg relative h-[95%] w-1/2">
            <embed
              src="/GunnarCurryResume_GameGrid.pdf"
              type="application/pdf"
              className="w-full h-full rounded-md"
            />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-2 mr-4 text-c-green-dark"
            >
              Close
            </button>
            <a
              href="/GunnarCurryResume_GameGrid.pdf"
              download
              className="absolute top-0 right-14 m-2 mr-4 text-c-green-dark"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
