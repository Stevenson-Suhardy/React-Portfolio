import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import Photo from "../assets/photo.jpeg";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen grid sm:grid-cols-2 items-center pt-[6rem]"
    >
      {/* Container */}
      <div className="ml-auto flex flex-col justify-center h-full">
        <p>Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold">Stevenson Suhardy</h1>
        <h2 className="text-2xl sm:text-4xl font-bold">I'm a Web Developer.</h2>
        <p className="py-4 max-w-[600px]">
          Currently, I am a third year student at Durham College and I am about
          to graduate in April 2024. I am a web developer and I am passionate
          about web development. I am also a fast learner and I am always eager
          to learn new things.
        </p>
        <div className="flex py-1">
          <a
            className="pr-2"
            href="https://www.linkedin.com/in/stevensonsuhardy/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            className="px-2"
            href="https://github.com/Stevenson-Suhardy"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a className="px-2" href="mailto:vensen.teng@gmail.com">
            <HiOutlineMail size={30} />
          </a>
        </div>

        <div className="flex">
          <a
            href=""
            className="group border-2 px-6 py-3 my-3 mr-2 flex items-center hover:text-white hover:font-bold hover:bg-blue-600 hover:border-blue-600"
          >
            Download CV
          </a>
          <Link to="projects" smooth={true} duration={500}>
            <button className="group border-2 px-6 py-3 my-3 mx-2 flex items-center hover:text-white hover:font-bold hover:bg-blue-600 hover:border-blue-600">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div className="max-w-[500px] max-h-[500px] mx-auto">
        <img className="rounded-full w-[30rem]" src={Photo} alt="my-photo" />
      </div>
    </div>
  );
};

export default Home;
