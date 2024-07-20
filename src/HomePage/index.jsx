import React from "react";
import Logo from "../assets/jspdf-logo.png";
import Button from "../utilComponent/Button";
import GithubButton from "../utilComponent/GithubButton";
import Features from "./Features";
const HomePage = ({}) => {
  return (
    <div>
      {/* HEADER */}
      <div className="w-full p-5 flex justify-between items-center flex-wrap">
        <div className="flex items-center gap-4">
          <img src={Logo} className="h-[60px]" />
        </div>
        <GithubButton />
      </div>
      {/* HERO */}
      <div className="w-full min-h-[calc(100vh-100px)] grid  place-items-center pt-5 mt-5">
        <div className=" flex justify-center items-center">
          <div className="">
            <div className=" text-center text-4xl font-extrabold  md:text-5xl md:grid-cols-3 lg:text-6xl">
              See Your jsPDF Code in Action
            </div>
            <div className="text-center text-[24px] mb-5 mt-2">
              Real-Time{" "}
              <span className="bg-[#5188ff] text-white px-3 py-1 rounded-lg ">
                Previews
              </span>{" "}
              Made{" "}
              <span className="bg-[#48e1c5] -white px-3 py-1 rounded-lg">
                Easy
              </span>{" "}
              !
            </div>
            <div className="text-center">
              <a href="/playground" target="_blank">
                <Button>
                  <span className="flex items-center gap-2">
                    Playground{" "}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 10 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.25403 1.46875C2.83987 1.46875 2.5041 1.80446 2.50403 2.21862C2.50396 2.63289 2.83977 2.96875 3.25403 2.96875H5.94325L1.47358 7.43842C1.18068 7.73131 1.18068 8.20619 1.47358 8.49908C1.76647 8.79197 2.24134 8.79197 2.53424 8.49908L7.00299 4.03033L7.00314 6.71982C7.00316 7.13345 7.34024 7.46875 7.75387 7.46875C8.16752 7.46875 8.50108 7.13342 8.50108 6.71978V2.21875C8.50108 1.80454 8.16529 1.46875 7.75108 1.46875H3.25403Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* SUB */}
      <div className="w-full min-h-screen grid  place-items-center">
        <Features />
      </div>
      {/* Footer */}
      <div className="text-center py-5 text-2xl text-gray-500">
        Build by Prashant
      </div>
    </div>
  );
};

export default HomePage;
