import React from "react";
import Link from "next/link";

const Header: React.FC = () => (
  <>
    <nav className="bg-transparent fixed top-0 w-full flex justify-between h-10 text-c-gray items-center">
      <img src="/path/to/your/logo.png" alt="Logo" className="h-8 ml-4" />
      <div className="flex space-x-10 mr-8 mt-5">
        {/* <Link legacyBehavior href="/">
          <a className="w-fit text-center mx-auto">Home</a>
        </Link> */}
        <Link legacyBehavior href="/services">
          <a className="w-fit mx-auto">About</a>
        </Link>
        <Link legacyBehavior href="/services">
          <a className="w-fit mx-auto">Skills</a>
        </Link>
        <Link legacyBehavior href="/services">
          <a className="w-fit mx-auto">Services</a>
        </Link>
        <Link legacyBehavior href="/resume">
          <a className="w-fit mx-auto">Resume</a>
        </Link>
        <a
          href="https://github.com/Gunndroid"
          target="_blank"
          rel="noreferrer"
          className="w-fit mx-auto"
        >
          GitHub
        </a>
        <div>
          <a
            id="contact"
            className="w-fit"
            href="mailto:glukari@protonmail.com"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  </>
);

export default Header;
