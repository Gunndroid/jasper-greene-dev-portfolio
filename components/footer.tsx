import React from "react";

interface FooterProps {
  colorScheme: string; // add other color options as necessary
}

const Footer: React.FC<FooterProps> = ({ colorScheme }) => (
  <div className={`transition-all duration-700 ease-in-out text-white`}>
    {/* <section className='p-7 flex flex-col items-center justify-center  w-full  '>
      <div className='flex sm:flex-row flex-col gap-3 justify-between sm:w-10/12 pt-16 '>
        <div className='md:ml-10 text-center sm:text-left mb-10 sm:mb-0'></div>
        <div className='md:mr-10 text-center'>
          <h3 className='md:text-3xl text-2xl font-bold mb-4 sm:ml-0 '>
            Socialize With Me
          </h3>
          <div className='flex gap-10 sm:gap-0 sm:justify-between justify-center flex-wrap '>
            <a
              href='https://github.com/Gunndroid'
              target='_blank'
              rel='noreferrer'
              className='hover:scale-110 transition-all'
            >
              <div className='w-10'>
                <svg
                  viewBox='0 0 20 20'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#f0efeb'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {" "}
                    <title>github [#f0efeb]</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id='Page-1'
                      stroke='none'
                      stroke-width='1'
                      fill='f0efeb'
                      fill-rule='evenodd'
                    >
                      {" "}
                      <g
                        id='Dribbble-Light-Preview'
                        transform='translate(-140.000000, -7559.000000)'
                        fill='#f0efeb'
                      >
                        {" "}
                        <g
                          id='icons'
                          transform='translate(56.000000, 160.000000)'
                        >
                          {" "}
                          <path
                            d='M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399'
                            id='github-[#f0efeb]'
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
            <a
              href='https://github.com/Gunndroid/greenThumbPortfolio'
              target='_blank'
              rel='noreferrer'
              className='hover:scale-110 transition-all'
            >
              <div className='w-10 '>
                <svg
                  viewBox='0 0 24 24'
                  fill='f0efeb'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {" "}
                    <path
                      d='M14.0184 7.36446C14.1256 6.96436 13.8882 6.55311 13.4881 6.4459C13.088 6.3387 12.6767 6.57614 12.5695 6.97623L9.98131 16.6355C9.8741 17.0356 10.1115 17.4468 10.5116 17.5541C10.9117 17.6613 11.323 17.4238 11.4302 17.0237L14.0184 7.36446Z'
                      fill='#f0efeb'
                    ></path>{" "}
                    <path
                      d='M16.0303 8.46967C15.7374 8.17678 15.2626 8.17678 14.9697 8.46967C14.6768 8.76256 14.6768 9.23744 14.9697 9.53033L15.1412 9.7019C15.8229 10.3836 16.2797 10.8426 16.5753 11.2301C16.8577 11.6002 16.9216 11.8157 16.9216 12C16.9216 12.1843 16.8577 12.3998 16.5753 12.7699C16.2797 13.1574 15.8229 13.6164 15.1412 14.2981L14.9697 14.4697C14.6768 14.7626 14.6768 15.2374 14.9697 15.5303C15.2626 15.8232 15.7374 15.8232 16.0303 15.5303L16.2387 15.322C16.874 14.6867 17.4038 14.1569 17.7678 13.6798C18.1521 13.1762 18.4216 12.6441 18.4216 12C18.4216 11.3559 18.1521 10.8238 17.7678 10.3202C17.4038 9.84307 16.874 9.31331 16.2387 8.67801L16.0303 8.46967Z'
                      fill='#f0efeb'
                    ></path>{" "}
                    <path
                      d='M7.96986 8.46967C8.26275 8.17678 8.73762 8.17678 9.03052 8.46967C9.32341 8.76256 9.32341 9.23744 9.03052 9.53033L8.85894 9.7019C8.17729 10.3836 7.72052 10.8426 7.42488 11.2301C7.14245 11.6002 7.07861 11.8157 7.07861 12C7.07861 12.1843 7.14245 12.3998 7.42488 12.7699C7.72052 13.1574 8.17729 13.6164 8.85894 14.2981L9.03052 14.4697C9.32341 14.7626 9.32341 15.2374 9.03052 15.5303C8.73762 15.8232 8.26275 15.8232 7.96986 15.5303L7.76151 15.322C7.12618 14.6867 6.59637 14.1569 6.23235 13.6798C5.84811 13.1762 5.57861 12.6441 5.57861 12C5.57861 11.3559 5.84811 10.8238 6.23235 10.3202C6.59637 9.84307 7.12617 9.31332 7.7615 8.67802L7.96986 8.46967Z'
                      fill='#f0efeb'
                    ></path>{" "}
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62178 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62178 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62178 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z'
                      fill='#f0efeb'
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </a>
            <a
              href='https://www.linkedin.com/in/gunnarlukari/'
              target='_blank'
              rel='noreferrer'
              className='hover:scale-110 transition-all'
            >
              <div className='w-10'>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {" "}
                    <path
                      d='M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z'
                      fill='#f0efeb'
                    ></path>{" "}
                    <path
                      d='M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z'
                      fill='#f0efeb'
                    ></path>{" "}
                    <path
                      d='M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z'
                      fill='#f0efeb'
                    ></path>{" "}
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z'
                      fill='#f0efeb'
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </a>
            <a
              href='mailto:gunnarcurry@icloud.com'
              className='hover:scale-110 transition-all'
            >
              <div className='w-10 '>
                <svg
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
                  <g
                    id='SVGRepo_tracerCarrier'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></g>
                  <g id='SVGRepo_iconCarrier'>
                    {" "}
                    <path
                      d='M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7'
                      stroke='#f0efeb'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>{" "}
                    <rect
                      x='3'
                      y='5'
                      width='18'
                      height='14'
                      rx='2'
                      stroke='#f0efeb'
                      stroke-width='2'
                      stroke-linecap='round'
                    ></rect>{" "}
                  </g>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section> */}
    <footer className='p-6 pt-10'>
      <div
        className={`text-center border-c-${colorScheme}-gray pt-6 border-t-[1px] transition-all duration-700 ease-in-out`}
      >
        <a href='mailto:main@jasperxgreene.com' className='underline'>
          main@jasperxgreene.com
        </a>
        <p className='cursor-default text-md'>
          ©Jasper Greene{new Date().getFullYear()}
        </p>
      </div>
    </footer>
  </div>
);

export default Footer;
