import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0A192F] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Stevenson, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am a hard-working person, a team player, and a quick learner
              about programming related skills. I am passionate about learning
              new things, and building excellent applications to improve lives
              around me. In college, I have learned and I have experience with
              Python, C#, SQL, HTML, PHP, and Java.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
