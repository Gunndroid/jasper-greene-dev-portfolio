/* eslint-disable @next/next/no-img-element */
import React from "react";
import "../app/globals.css";

interface SkillsAndServicesProps {
  colorScheme: string;
}

const SkillsAndServices: React.FC<SkillsAndServicesProps> = ({
  colorScheme,
}) => {
  const services = [
    "React Apps",
    "Custom Website Design",
    "API Integrations",
    "UX/UI Design",
    "Content Management Systems (CMS)",
    "Search Engine Optimization (SEO)",
    "E-commerce Solutions",
    "Website Maintenance & Support",
    "WordPress Theme Development",
  ];

  const icons = [
    { src: "/icons/vscode.png", alt: "Visual Studio code icon" },
    { src: "/icons/html3.png", alt: "html icon" },
    { src: "/icons/css4.png", alt: "css icon" },
    { src: "/icons/Tailwind.svg", alt: "tailwind icon" },
    { src: "/icons/sass2.png", alt: "sass icon" },
    { src: "/icons/js.png", alt: "javascript icon" },
    { src: "/icons/react.png", alt: "react icon" },
    { src: "/icons/node.png", alt: "node.js icon" },
    { src: "/icons/git.png", alt: "git icon" },
    { src: "/icons/solidity.svg", alt: "solidity icon" },
    { src: "/icons/WordPress.com-Logo2.png", alt: "wordpress icon" },
  ];

  return (
    <main
      id="skills-section"
      className={`bg-c-${colorScheme}-dark text-c-green-gray  flex lg:flex-row flex-col md:min-h-screen lg:py-0 pt-[5rem] pb-[3rem] items-center justify-center transition-all duration-700 ease-in-out`}
    >
      <section
        className={`sm:w-1/2 flex flex-col items-center py-10 lg:border-r lg:border-c-${colorScheme}-gray transition-all duration-700 ease-in-out mb-12 sm:mb-20 lg:mb-0  `}
      >
        <div className="relative flex justify-center items-center w-[350px] h-[350px]">
          <h1
            className={`absolute z-10 flex text-c-${colorScheme}-gray sm:text-4xl text-4xl font-bold text-center transition-all duration-700 ease-in-out m-0 my-auto`}
          >
            Skills
          </h1>

          <style>
            {`


// .circle-container {
//   position: relative;
//   width: 350px;
//   height: 350px;
//   margin: 0 auto;
// }

.circle-container {
  position: relative;
  width: 350px;
  height: 350px;
  margin: 0 auto;
  display: flex;
  align-items: center; // This vertically centers the children
  justify-content: center; // This horizontally centers the children
}


/* Default values for mobile sizes */
.icon-container {
  position: absolute;
  width: 50px;    /* Smaller size for mobile */
  height: 50px;   /* Smaller size for mobile */
  // left:43%;
  // top:44%;
  transform-origin: top center;
  animation-duration: 200s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.icon {
  width: 50px;    /* Smaller size for mobile */
  height: 50px;   /* Smaller size for mobile */
  transform-origin: top center;
  filter: grayscale(100%);
  transition: filter 0.3s;
}

.icon:hover {
  filter: grayscale(0%);
}


${icons
  .map(
    (_, index) => `
.icon-${index} {
  animation-name: rotate-${index};
}

@keyframes rotate-${index} {
  0%, 100% {
    transform: rotate(${
      (360 / icons.length) * index
    }deg) translateY(-150px) rotate(${
      (-360 / icons.length) * index
    }deg); /* Adjusted translateY value for smaller screens */
  }
  60% {
    transform: rotate(${
      (360 / icons.length) * index + 180
    }deg) translateY(-150px) rotate(${(-360 / icons.length) * index - 180}deg);
  }
}
`
  )
  .join("\n")}

/* Adjustments for medium (tablet) sizes */
@media (min-width: 650px) {
  .icon-container {
    width: 65px;
    height: 65px;
  }
  .icon {
    width: 65px;
    height: 65px;
  }









  ${icons
    .map(
      (_, index) => `
  @keyframes rotate-${index} {
    0%, 100% {
      transform: rotate(${
        (360 / icons.length) * index
      }deg) translateY(-210px) rotate(${
        (-360 / icons.length) * index
      }deg); /* Original translateY value */
    }
    60% {
      transform: rotate(${
        (360 / icons.length) * index + 180
      }deg) translateY(-210px) rotate(${
        (-360 / icons.length) * index - 180
      }deg);
    }
  }
  `
    )
    .join("\n")}
} transition-all duration-700 ease-in-out`}
          </style>

          <div className="circle-container flex justify-center ">
            {icons.map((item, index) => (
              <div
                key={index}
                className={`icon-container relative w-[350px] h-[350px] sm:w-28 sm:h-28 lg:w-40 lg:h-40 icon-${index} transition-all duration-700 ease-in-out`}
              >
                <img className="icon" src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------- SERVICES --------------------- */}
      <section
        className={` lg:w-1/2 w-full flex flex-col items-center py-10 text-c-${colorScheme}-gray transition-all duration-700 ease-in-out `}
      >
        <h1
          className={`text-4xl font-bold text-center mb-10 text-c-${colorScheme}-gray transition-all duration-700 ease-in-out`}
        >
          Services
        </h1>
        <table
          className={`border border-c-${colorScheme}-gray text-center text-xl mx-auto w-[90%] sm:w-2/3 text-c-${colorScheme}-gray transition-all duration-700 ease-in-out`}
        >
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td
                  className={`px-10 py-2 border border-c-${colorScheme}-gray ${
                    index % 2 === 0 ? `bg-c-${colorScheme}-medium` : ""
                  } transition-all duration-700 ease-in-out`}
                >
                  {service}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default SkillsAndServices;
