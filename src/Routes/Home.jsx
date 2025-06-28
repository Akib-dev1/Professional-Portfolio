import React from "react";
import AboutMe from "../Sections/AboutMe";
import Skills from "../Sections/Skills";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import Education from "../Sections/Education";

const Home = () => {
  return (
    <>
      <div className="md:w-9/12 w-11/12 mx-auto py-20">
        <div className="flex max-md:flex-col items-center justify-center gap-12 md:gap-20">
          <div className="avatar p-5 rounded-full bg-[#444444]">
            <div className="max-w-96 rounded-full">
              <img src="https://i.ibb.co/7x9LmPqb/image.png" />
            </div>
          </div>
          <div className="max-md:text-center">
            <p className="text-[#D5D5D5] text-lg font-thin">
              Mern Stack Developer
            </p>
            <h1 className="font-bold text-5xl my-6 text-white">
              Muhammad Akib Anjum
            </h1>
            <p className="max-w-3xl text-lg text-[#D5D5D5]">
              Hi, I’m Akib — a passionate MERN Stack Developer with a focus on
              building responsive full-stack web applications using React,
              Node.js, and MongoDB. I enjoy writing clean code, crafting modern
              UIs, and constantly learning new technologies.
            </p>
            <div className="flex items-center gap-4 mt-8 justify-center md:justify-start">
              <a href="https://www.facebook.com/akib.anjum.5" target="_blank">
                <FaFacebook size={34} className="text-[#007CED]"/>
              </a>
              <a href="https://github.com/Akib-dev1" target="_blank">
                <FaGithubSquare size={36} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="md:w-9/12 w-11/12 mx-auto py-10 md:py-20">
        <AboutMe />
      </section>
      <section className="md:w-9/12 w-11/12 mx-auto py-10 md:py-20">
        <Skills />
      </section>
      <section className="md:w-9/12 w-11/12 mx-auto py-10 md:py-20">
        <Education />
      </section>
    </>
  );
};

export default Home;
