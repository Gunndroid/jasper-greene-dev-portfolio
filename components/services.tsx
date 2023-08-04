import React from "react";

const Services: React.FC = () => {
  return (
    <main
      id="services-section"
      className="bg-c-green-gray text-c-gray h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold text-center mb-10">Services</h1>
      <table className="border border-c-gray text-center text-xl">
        <tbody>
          {[
            "Wordpress Website Design",
            "React Apps",
            "Solidity Smart Contract Development",
            "Video Editing",
            "Photo Editing",
            "Logo Design",
            "AI Image Generation",
            "English Lessons",
            "Proofreading",
          ].map((service, index) => (
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
    </main>
  );
};

export default Services;
