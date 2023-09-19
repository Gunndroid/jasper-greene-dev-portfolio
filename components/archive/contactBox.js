import Image from "next/image";

import React from "react";
import portrait from "../public/img/gunnLukariAI.JPG";

function ContactBox() {
  return (
    <div className="p-5">
      <Image
        className="w-1/2 rounded-lg border-2 border-white mx-auto shadow-gray-600 shadow-md"
        src={portrait}
        alt="This is a portrait of Gunndroid."
      />

      {/* contact email link */}
      {/* <div className="text-black text-center grid grid-cols-2 p-4">
          <div>
            <a
              id="resume"
              className="links"
              href={resume}
              target="_blank" rel="noreferrer"
              rel="noopener noreferrer"
            >
              resume
            </a>
          </div>
          <div>
            <a
              id="github"
              className="links"
              href="https://github.com/Gunndroid?tab=repositories"
              target="_blank" rel="noreferrer"
            >
              github
            </a>
          </div>
        </div>*/}
    </div>
  );
}

export default ContactBox;
