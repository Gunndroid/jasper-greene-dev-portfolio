import React from "react";
import "../app/globals.css";

const SkillsAndServices: React.FC = () => {
  // const services = [
  //   "Wordpress Website Design",
  //   "React Apps",
  //   "Solidity Smart Contract Development",
  //   "Video Editing",
  //   "Photo Editing",
  //   "Logo Design",
  //   "AI Image Generation",
  //   "English Lessons",
  //   "Proofreading",
  // ];

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
      className="bg-c-green-dark text-c-gray h-screen flex items-center justify-center"
    >
      <section className="w-1/2 flex flex-col items-center py-10 border-r border-c-gray">
        <div className="skills-container">
          <h1 className="skills-text text-c-gray text-4xl font-bold text-center mb-10">
            Skills
          </h1>

          <style>
            {`

.skills-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  margin: 0 auto;
}

.skills-text {
  position: absolute;
  z-index: 1; /* Optional, to ensure the text is above the icons */
}


        .circle-container {
          position: relative;
          width: 350px;
          height: 350px;
          margin: 0 auto;
        }
        
        .icon-container {
          position: absolute;
          width: 100px;
          height: 100px;
          left: 40%;
          top: 40%;
          transform-origin: top center;
          animation-duration: 200s;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        
        .icon {
          width: 65px;
          height: 65px;
          transform-origin: top center;
          filter: grayscale(100%); /* Grayscale effect */
          transition: filter 0.3s; /* Smooth transition */
        }
        
        .icon:hover {
          filter: grayscale(0%); /* Revert to color on hover */
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
              }deg) translateY(-180px) rotate(${
              (-360 / icons.length) * index
            }deg);
            }
            60% {
              transform: rotate(${
                (360 / icons.length) * index + 180
              }deg) translateY(-180px) rotate(${
              (-360 / icons.length) * index - 180
            }deg);
            }
          }
        `
          )
          .join("\n")}
      `}
          </style>
          <div className="circle-container">
            {icons.map((item, index) => (
              <div key={index} className={`icon-container icon-${index}`}>
                <img className="icon" src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-1/2 flex flex-col items-center py-10 text-c-gray">
        <h1 className="text-4xl font-bold text-center mb-10 text-c-gray">
          Services
        </h1>
        <table className="border border-c-gray text-center text-xl mx-auto w-2/3 text-c-gray">
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td
                  className={`px-10 py-2 border border-c-gray ${
                    index % 2 === 0 ? "bg-c-green-medium" : ""
                  }`}
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
