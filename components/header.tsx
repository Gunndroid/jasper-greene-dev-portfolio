/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface HeaderProps {
  colorScheme: string;
  isNavShow: boolean;
  setIsNavShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  colorScheme,
  isNavShow,
  setIsNavShow,
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  // const [isNavShow, setIsNavShow] = useState(false);

  // const toggleMobileMenu = () => {
  //   setIsNavShow(!isNavShow);
  // };

  const toggleMobileMenu = () => {
    setIsNavShow((prevState) => !prevState);
  };

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
    setIsNavShow(false); // Close the mobile menu when the modal opens
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='w-full text-center  pt-6'>
      <a
        href='mailto:main@jasperxgreene.com'
        className='underline text-emerald-400 '
      >
        main@jasperxgreene.com
      </a>
      <nav
        className={`bg-transparent fixed top-0 w-full sm:ml-10  sm:flex justify-left h-10 items-center z-20 text-white`}
      >
        {/* mobile nav */}
        <div className='relative'>
          {/* <div
            className={`text-4xl absolute cursor-pointer sm:hidden m-4 z-50 text-c-${colorScheme}-light  `}
            onClick={toggleMobileMenu}
          >
            {isNavShow ? "×" : "☰"}
          </div> */}

          {isNavShow && (
            <div
              className={`sm:hidden fixed top-0 flex flex-col justify-center items-center gap-4 p-5 w-full shadow-2xl bg-c-${colorScheme}-darker  transition-all text-c-green-gray sm:text-c-${colorScheme}-darker `}
            >
              <Link href='#home-section'>
                <span className='hover:scale-110 transition-all'>Home</span>
              </Link>
              <Link href='#about-section'>
                <span className='hover:scale-110 transition-all'>About</span>
              </Link>
              <Link href='#skills-section'>
                <span className='hover:scale-110 transition-all'>Skills</span>
              </Link>
              <Link href='#projects-section'>
                <span className='hover:scale-110 transition-all'>Projects</span>
              </Link>
              {/* <a
                onClick={openModal}
                className='hover:scale-110 transition-all cursor-pointer'
              >
                Resume
              </a> */}
            </div>
          )}
        </div>

        {/* desktop nav */}
        <div
          className={`hidden sm:flex space-x-10 mr-8 mt-5 text-${colorScheme}-light`}
        >
          <Link href='#home-section'>
            <span className='w-fit text-center mx-auto hover:scale-110 transition-all'>
              Home
            </span>
          </Link>
          {/* <Link href='#about-section'>
            <span className='w-fit mx-auto hover:scale-110 transition-all'>
              About
            </span>
          </Link>
          <Link href='#skills-section'>
            <span className='w-fit mx-auto hover:scale-110 transition-all'>
              Skills
            </span>
          </Link> */}
          <Link href='#projects-section'>
            <span className='w-fit mx-auto hover:scale-110 transition-all'>
              Projects
            </span>
          </Link>
          {/* <a
            onClick={openModal}
            className='w-fit mx-auto hover:scale-110 transition-all cursor-pointer border border-white rounded-lg px-2'
          >
            Resume
          </a> */}
        </div>
      </nav>

      {/* {isModalOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100] '>
          <div
            className={`bg-c-${colorScheme}-gray pt-10 pb-4 px-4 rounded-lg relative h-[95%] md:w-1/2 w-full`}
          >
            <embed
              src='/GunnarCurryResume1.pdf'
              type='application/pdf'
              className='w-full h-full rounded-md'
            />
            <button
              onClick={closeModal}
              className={`absolute top-0 right-0 m-2 mr-4 text-c-${colorScheme}-dark`}
            >
              Close
            </button>
            <a
              href='/GunnarCurryResume1.pdf'
              download
              className={`absolute top-0 right-14 m-2 mr-4 text-c-${colorScheme}-dark`}
            >
              Download
            </a>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Header;
