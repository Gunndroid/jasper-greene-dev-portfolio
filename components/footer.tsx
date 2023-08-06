/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer: React.FC = () => (
  <footer className="bg-c-green-dark text-c-gray p-7">
    <div className="container mx-auto grid grid-cols-3 gap-8">
      <div>
        <h3 className="font-bold text-lg mb-3">Need a Developer?</h3>
        <p className="text-sm">Let&apos;s build something</p>
        <p className="text-sm">gunnarcurry@icloud.com</p>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-3">Contact</h3>
        <p className="text-sm">
          Feel free to get in touch with me via{" "}
          <a href="mailto:glukari@protonmail.com">email</a> or follow me on
        </p>
        <div className="flex space-x-4 mt-2">
          <a
            href="https://github.com/Gunndroid"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/github.png" alt="GitHub" className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/gunnarlukari/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/linkedin.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="mailto:glukari@protonmail.com">
            <img src="/icons/email.png" alt="Email" className="w-6 h-6" />
          </a>
          {/* <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/icons/twitter.png" alt="Twitter" className="w-6 h-6" />
          </a> */}
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-3">Resume</h3>
        <a
          href="/GunnarCurryResume3.pdf"
          download
          className="text-sm underline"
        >
          Download my resume
        </a>
      </div>
    </div>
    <div className="text-center mt-10 border-t pt-5">
      <p className="cursor-default  text-md">©GunnarCurry2023</p>
    </div>
  </footer>
);

export default Footer;
