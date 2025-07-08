import React from "react";
import AboutMe from "../Sections/AboutMe";
import Skills from "../Sections/Skills";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import Education from "../Sections/Education";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";

const Home = ({ projects }) => {
  return (
    <>
      <div className="md:w-9/12 w-11/12 mx-auto py-20">
        <div className="flex max-md:flex-col items-center justify-center gap-12 md:gap-20">
          <div className="avatar p-5 rounded-full bg-[#444444]">
            <div className="max-w-96 rounded-full">
              <img src="https://i.ibb.co/Q7d0hWK1/Muhammad-Akib-Anjum.jpg" />
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
            <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
              <a href="https://www.facebook.com/akib.anjum.5" target="_blank">
                <FaFacebook
                  size={34}
                  className="hover:text-blue-500 hover:scale-120 duration-150 ease-in"
                />
              </a>
              <a href="https://github.com/Akib-dev1" target="_blank">
                <FaGithubSquare
                  size={36}
                  className="hover:scale-120 duration-150 ease-in"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammad-akib"
                target="_blank"
              >
                <FaLinkedin
                  size={36}
                  className="hover:text-blue-600 hover:scale-120 duration-150 ease-in"
                />
              </a>
            </div>
            <div className="mt-5 flex items-center justify-center md:justify-start">
              <a className="btn bg-inherit shadow-xl rounded-full border-blue-600 hover:bg-blue-600 duration-200 ease-in" href="/Muhammad Akib Anjum Resume.pdf" download>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      <section id="about" className="md:w-9/12 w-11/12 mx-auto py-10 md:py-20">
        <AboutMe />
      </section>
      <section id="skills" className="md:w-9/12 w-11/12 mx-auto py-10 md:py-20">
        <Skills />
      </section>
      <section
        id="education"
        className="md:w-9/12 w-11/12 mx-auto py-10 md:py-20"
      >
        <Education />
      </section>
      <section
        id="projects"
        className="md:w-9/12 w-11/12 mx-auto py-10 md:py-20"
      >
        <Projects projects={projects} />
      </section>
      <section
        id="contact"
        className="md:w-9/12 w-11/12 mx-auto py-10 md:py-20"
      >
        <Contact />
      </section>
    </>
  );
};

export default Home;
