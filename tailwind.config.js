/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",

  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    options: {
      safelist: [
        "bg-c-green-gray",
        "text-c-green-gray",
        "border-c-green-gray",
        "bg-c-green-light",
        "text-c-green-light",
        "border-c-green-light",
        "bg-c-green-medium",
        "text-c-green-medium",
        "border-c-green-medium",
        "bg-c-green-dark",
        "text-c-green-dark",
        "border-c-green-dark",
        "bg-c-green-darker",
        "text-c-green-darker",
        "border-c-green-darker",

        "bg-c-blue-gray",
        "text-c-blue-gray",
        "border-c-blue-gray",
        "bg-c-blue-light",
        "text-c-blue-light",
        "border-c-blue-light",
        "bg-c-blue-medium",
        "text-c-blue-medium",
        "border-c-blue-medium",
        "bg-c-blue-dark",
        "text-c-blue-dark",
        "border-c-blue-dark",
        "bg-c-blue-darker",
        "text-c-blue-darker",
        "border-c-blue-darker",

        "bg-c-pastel-light",
        "text-c-pastel-light",
        "border-c-pastel-light",
        "bg-c-pastel-medium",
        "text-c-pastel-medium",
        "border-c-pastel-medium",
        "bg-c-pastel-gray",
        "text-c-pastel-gray",
        "border-c-pastel-gray",
        "bg-c-pastel-dark",
        "text-c-pastel-dark",
        "border-c-pastel-dark",
        "bg-c-pastel-darker",
        "text-c-pastel-darker",
        "border-c-pastel-darker",

        "bg-c-purple-gray",
        "text-c-purple-gray",
        "border-c-purple-gray",
        "bg-c-purple-light",
        "text-c-purple-light",
        "border-c-purple-light",
        "bg-c-purple-medium",
        "text-c-purple-medium",
        "border-c-purple-medium",
        "bg-c-purple-dark",
        "text-c-purple-dark",
        "border-c-purple-dark",
        "bg-c-purple-darker",
        "text-c-purple-darker",
        "border-c-purple-darker",

        "bg-c-rose-gray",
        "bg-c-rose-light",
        "bg-c-rose-medium",
        "bg-c-rose-dark",
        "bg-c-rose-darker",
        "text-c-rose-gray",
        "text-c-rose-light",
        "text-c-rose-medium",
        "text-c-rose-dark",
        "text-c-rose-darker",
      ],
    },
  },

  theme: {
    extend: {
      colors: {
        "c-green-gray": "#DAD7CD",
        "c-green-light": "#A3B18A",
        "c-green-medium": "#588157",
        "c-green-dark": "#3A5A40",
        "c-green-darker": "#344E41",

        // "c-blue-gray": "#caf0f8",
        // "c-blue-light": "#90E0EF",
        // "c-blue-medium": "#00B4D8",
        // "c-blue-dark": "#0077B6",
        // "c-blue-darker": "#03045E",

        "c-blue-gray": "#DAD7CD",
        "c-blue-light": "#0582ca",
        "c-blue-medium": "#006494",
        "c-blue-dark": "#003554",
        "c-blue-darker": "#051923",

        // "c-pastel-gray": "#073b4c",
        // "c-pastel-light": "#118ab2",
        // "c-pastel-medium": "#06d6a0",
        // "c-pastel-dark": "#ffd166",
        // "c-pastel-darker": "#ef476f",

        "c-purple-gray": "#DAD7CD",
        "c-purple-light": "#be95c4",
        "c-purple-medium": "#9f86c0",
        "c-purple-dark": "#5e548e",
        "c-purple-darker": "#231942",

        // "c-rose-gray": "#ffd9da",
        // "c-rose-light": "#ea638c",
        // "c-rose-medium": "#30343f",
        // "c-rose-dark": "#89023e",
        // "c-rose-darker": "#1b2021",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
