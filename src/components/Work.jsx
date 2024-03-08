import React from "react";

import Crestama from "../assets/crestama.jpg";
import KingWilliamHotel from "../assets/king-william-hotel.png";
import DurhamRegion from "../assets/durham-region.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0A192F]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        {/* Projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${Crestama})` }}
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text2xl font-bold text-white tracking-wider">
                Crestama Company Website
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://www.crestama.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Stevenson-Suhardy/Crestama"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <span className="text2xl font-bold text-white tracking-wider">
                Tech Stack: Spring, MySQL
              </span>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${KingWilliamHotel})` }}
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text2xl font-bold text-white tracking-wider">
                King William Hotel
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/Stevenson-Suhardy/King-William-Project"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              <span className="text2xl font-bold text-white tracking-wider">
                Tech Stack: Node.js, MySQL
              </span>
            </div>
          </div>
          {/* Card */}
          <div
            style={{ backgroundImage: `url(${DurhamRegion})` }}
            className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text2xl font-bold text-white tracking-wider">
                Material Testing App <br /> (Durham Region)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github.com/DurhamRegion-Projects/Works-Material-Testing-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                    disabled
                  >
                    Ongoing Capstone Project
                  </button>
                </a>
              </div>
              <span className="text2xl font-bold text-white tracking-wider">
                Tech Stack: ASP.NET, SQL Server
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
