/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
  colorScheme: string;
}
const Header: React.FC<HeaderProps> = ({ colorScheme }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let lastY = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const currentY = window.scrollY;
          if (currentY < lastY) {
            // scrolling up
            if (entry.isIntersecting && entry.intersectionRatio >= 0.05) {
              setActiveSection(entry.target.id);
            }
          } else {
            // scrolling down
            if (entry.isIntersecting && entry.intersectionRatio >= 0.95) {
              setActiveSection(entry.target.id);
            }
          }
          lastY = currentY;
        });
      },
      { threshold: [0.05, 0.95] }
    );

    const sections = document.querySelectorAll(
      "#home-section, #about-section, #projects-section, #skills-section"
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <nav
        className={`bg-transparent fixed top-0 w-full ml-10 flex justify-center h-10 ${
          activeSection === "about-section" ||
          activeSection === "projects-section"
            ? `text-c-${colorScheme}-darker`
            : `text-c-${colorScheme}-gray`
        } items-center z-50`}
      >
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
        </div>
      </nav>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ">
          <div
            className={`bg-c-${colorScheme}-gray pt-10 pb-4 px-4 rounded-lg relative h-[95%] w-1/2`}
          >
            <embed
              src="/GunnarCurryResume_GameGrid.pdf"
              type="application/pdf"
              className="w-full h-full rounded-md"
            />
            <button
              onClick={closeModal}
              className={`absolute top-0 right-0 m-2 mr-4 text-c-${colorScheme}-dark`}
            >
              Close
            </button>
            <a
              href="/GunnarCurryResume_GameGrid.pdf"
              download
              className={`absolute top-0 right-14 m-2 mr-4 text-c-${colorScheme}-dark`}
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
