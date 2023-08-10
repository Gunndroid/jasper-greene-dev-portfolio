import React, { useState } from "react";
import "./../app/globals.css";

interface ColorOption {
  color: string;
  onClick: () => void;
}

interface ColorToggleBtnProps {
  options: ColorOption[];
  activeColor: string;
}

const ColorToggleBtn: React.FC<ColorToggleBtnProps> = ({
  options,
  activeColor,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const colorDisplayNames = {
    green: "Forest",
    purple: "Berry",
    blue: "Ocean",
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className={`rounded-full p-2 bg-c-green-gray transition-all duration-300 `}
        aria-label="Open color dropdown"
      >
        <svg
          fill="#000000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M19.988,8.756a7.991,7.991,0,0,0-15.976,0A7.991,7.991,0,0,0,12,22.411,7.992,7.992,0,0,0,19.988,8.756Zm-3.315,4a8,8,0,0,0-2.354-3.713,5.938,5.938,0,0,1,3.625.737A5.963,5.963,0,0,1,16.673,12.754ZM12,20.188a6.013,6.013,0,0,1-2.807-3.706,7.864,7.864,0,0,0,5.614,0A6.013,6.013,0,0,1,12,20.188ZM6.056,9.778a5.934,5.934,0,0,1,3.625-.737,8,8,0,0,0-2.354,3.713A5.963,5.963,0,0,1,6.056,9.778Zm8.888,4.444a5.959,5.959,0,0,1-5.888,0A6,6,0,0,1,12,9.812,6,6,0,0,1,14.944,14.222ZM12,3a6,6,0,0,1,5.807,4.518A7.9,7.9,0,0,0,12,7.589a7.9,7.9,0,0,0-5.807-.071A6,6,0,0,1,12,3ZM9,21a5.993,5.993,0,0,1-4.673-9.754,8.018,8.018,0,0,0,2.685,4,7.971,7.971,0,0,0,2.669,5.715A6.133,6.133,0,0,1,9,21Zm6,0a6.133,6.133,0,0,1-.681-.041,7.971,7.971,0,0,0,2.669-5.715,8.018,8.018,0,0,0,2.685-4A5.993,5.993,0,0,1,15,21Z"></path>
          </g>
        </svg>
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 mr-2 w-fit rounded-md shadow-lg bg-c-green-gray ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => {
                  option.onClick();
                  setShowDropdown(false);
                }}
                className={`block px-4 py-2 text-sm w-full text-left ${
                  activeColor === option.color
                    ? "font-bold bg-gray-500"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                role="menuitem"
              >
                {colorDisplayNames[option.color]}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorToggleBtn;
