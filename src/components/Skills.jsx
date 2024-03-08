import React from "react";

import HTML from "../assets/html.png";
import ReactIcon from "../assets/react.png";
import GitHub from "../assets/github.png";
import Spring from "../assets/spring.png";
import SQL from "../assets/sql.png";
import CSharp from "../assets/c-sharp.png";
import JavaScript from "../assets/javascript.png";
import Java from "../assets/java.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-600">
            Skills
          </p>
          <p className="py-4">
            I am familiar and have personal experience with these technologies.
          </p>
        </div>

        {/* Skills */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-xl hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-xl hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={Java} alt="Java icon" />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-xl hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto py-4"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-xl hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={CSharp} alt="C# icon" />
            <p className="my-4">C#</p>
          </div>
          <div className="shadow-xl hover:scale-110 duration-500">
            <img
              className="w-[115px] mx-auto py-4"
              src={SQL}
              alt="MySQL icon"
            />
            <p className="my-4">MySQL</p>
          </div>
          <div className="shadow-xl hover:scale-110 duration-500">
            <img
              className="w-[145px] mx-auto py-4"
              src={GitHub}
              alt="GitHub icon"
            />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-xl hover:scale-110 duration-500">
            <img className="w-20 mx-auto py-4" src={Spring} alt="Spring icon" />
            <p className="my-4">Spring Boot</p>
          </div>
          <div className="shadow-xl hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto py-4"
              src={ReactIcon}
              alt="React icon"
            />
            <p className="my-4">React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
