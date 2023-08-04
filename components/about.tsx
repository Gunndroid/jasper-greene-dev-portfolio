import React from "react";
import "../app/globals.css";

const About: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-justify">
      <div className="text-lg w-2/3">
        <h1 className="text-4xl mb-8 text-c-green-light font-bold">About</h1>

        <p className="mb-4">
          I write code to create useful projects that make a difference.
        </p>
        <p className="mb-4">
          I enjoy working with React and Next.js along with Tailwind CSS to
          craft visually stunning and responsive user interfaces.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          non nunc lorem. Fusce vel quam vel leo pellentesque suscipit.
        </p>
        <p className="mb-4">
          Integer vel massa ex. Quisque in tincidunt dui. Donec in lacinia
          dolor, et dictum metus. Sed at dui auctor, lacinia erat ut, fringilla
          sapien.
        </p>
        <p className="mb-4">
          Aliquam a arcu sed mi commodo faucibus. Aenean id libero ut turpis
          fermentum tristique. Nam quis libero id orci ornare facilisis.
        </p>
      </div>
    </main>
  );
};

export default About;
