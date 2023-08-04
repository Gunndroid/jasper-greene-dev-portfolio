import React from "react";

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
    "Custom Website Design",
    "E-commerce Solutions",
    "React Apps",
    "WordPress Theme Development",
    "Search Engine Optimization (SEO)",
    "UX/UI Design",
    "Content Management Systems (CMS)",
    "API Integrations",
    "Website Maintenance & Support",
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
        <h1 className="text-c-gray text-4xl font-bold text-center mb-10">
          Skills
        </h1>
        <div className="text-lg grid grid-cols-3 gap-8 w-2/3 mx-auto">
          {icons.map((item, index) => (
            <img
              key={index}
              className="w-16 mx-auto transform-gpu transition-transform duration-300 hover:scale-125 "
              src={item.src}
              alt={item.alt}
            />
          ))}
        </div>
      </section>
      <section className="w-1/2 flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Services</h1>
        <table className="border border-c-gray text-center text-xl mx-auto w-2/3">
          <tbody>
            {services.map((service, index) => (
              <tr key={index}>
                <td
                  className={`px-10 py-2 border border-c-gray ${
                    index % 2 === 0 ? "bg-c-green-light" : ""
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
