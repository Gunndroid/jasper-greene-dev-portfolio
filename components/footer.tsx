import React from "react";

interface FooterProps {
  colorScheme: string; // add other color options as necessary
}

const Footer: React.FC<FooterProps> = ({ colorScheme }) => (
  <div
    className={`bg-c-${colorScheme}-dark text-c-${colorScheme}-gray transition-all duration-700 ease-in-out`}
  >
    <section className="p-7 flex flex-col items-center justify-center  w-full  ">
      <div className="flex sm:flex-row flex-col gap-3 justify-between sm:w-10/12 pt-16 ">
        {/* Column 1 */}
        <div className="md:ml-10 text-center sm:text-left mb-10 sm:mb-0">
          <h2 className="md:text-3xl text-2xl font-bold mb-2">
            Need a Developer?
          </h2>
          <p className="mb-4">Let&apos;s build something awesome together.</p>
          <a href="mailto:gunnarcurry@icloud.com" className="underline">
            gunnarcurry@icloud.com
          </a>
        </div>
        {/* Column 2 */}
        <div className="md:mr-10 text-center">
          <div className="">
            <h3 className="md:text-3xl text-2xl font-bold mb-4 sm:ml-0 ">
              Socialize With Me
            </h3>
            <div className="flex gap-10 sm:gap-0 sm:justify-between justify-center flex-wrap ">
              {/* GitHub */}
              <a
                href="https://github.com/Gunndroid"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-all"
              >
                <div className="w-10">
                  <svg
                    viewBox="0 0 20 20"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>github [#DAD7CD]</title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="Page-1"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-140.000000, -7559.000000)"
                          fill="#DAD7CD"
                        >
                          {" "}
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            {" "}
                            <path
                              d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                              id="github-[#DAD7CD]"
                            >
                              {" "}
                            </path>{" "}
                          </g>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
              </a>
              {/* Linkedin */}
              <a
                href="https://www.linkedin.com/in/gunnarlukari/"
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110 transition-all"
              >
                <div className="w-10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                        fill="#DAD7CD"
                      ></path>{" "}
                      <path
                        d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                        fill="#DAD7CD"
                      ></path>{" "}
                      <path
                        d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                        fill="#DAD7CD"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                        fill="#DAD7CD"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </a>
              {/* Email */}
              <a
                href="mailto:gunnarcurry@icloud.com"
                className="hover:scale-110 transition-all"
              >
                <div className="w-10 ">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                        stroke="#DAD7CD"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                        stroke="#DAD7CD"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></rect>{" "}
                    </g>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          {/* <div className="mt-4">
            <h3 className="text-xl font-bold mb-2">View My Resume</h3>
            <a href="/GunnarCurryResume3.pdf" download className="underline">
              Download
            </a>
          </div> */}
        </div>
      </div>
    </section>
    <footer className="p-6 pt-10">
      <div
        className={`text-center border-c-${colorScheme}-gray pt-6 border-t-[1px] transition-all duration-700 ease-in-out`}
      >
        <p className="cursor-default text-md">
          ©GunnarCurry{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  </div>
);

export default Footer;
