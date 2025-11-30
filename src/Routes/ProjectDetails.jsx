import React, { use } from "react";
import { useParams } from "react-router";

const ProjectDetails = ({ projects }) => {
  const items = use(projects);
  const param = useParams();
  const project = items.find(
    (item) => item.title.toLowerCase() === param.name.toLowerCase()
  );
  return (
    <div className="min-h-screen md:w-9/12 w-11/12 mx-auto py-20">
      <div className="card lg:card-side bg-[#252525] shadow-sm">
        <figure>
          <img src={project.image} alt={project.title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{project.cardTitle}</h2>
          <p className="text-[#D5D5D5]">{project.description}</p>
          <p className="text-[#D5D5D5]">
            <span className="font-semibold text-white">Challenges:</span>{" "}
            {project.challenges}
          </p>
          <p className="text-[#D5D5D5]">
            <span className="font-semibold text-white">Future Plans:</span>{" "}
            {project.futurePlans}
          </p>
          <div className="">
            <h3 className="font-semibold mt-4">Tech Stack:</h3>
            <ul className="list-disc pl-5">
              {project.techStack.map((tech, index) => (
                <li key={index} className="text-[#D5D5D5]">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={project.liveLink}
              className="btn bg-[#fff] text-black mr-2"
              target="_blank"
            >
              Live Demo
            </a>
            <a
              href={project.githubLink}
              className="btn bg-[#252525] text-white"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="/"
              className="btn bg-inherit border-blue-600 hover:bg-blue-600 duration-200 ease-in"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
