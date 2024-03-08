import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0A192F]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#CCD6F6]">
          Stevenson Suhardy
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892B0]">
          I'm a Web Developer.
        </h2>
        <p className="text-[#8892B0] py-4 max-w-[700px]">
          Currently, I am a third year student at Durham College. I am a
          hard-working person, a team player, and a quick learner about
          programming related skills.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
