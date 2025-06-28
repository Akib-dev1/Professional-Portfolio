import React, { use } from "react";
import { Link } from "react-router";

const Projects = ({projects}) => {
  const items = use(projects);
  return (
    <div>
      <h1 className="font-bold text-xl mb-1.5">Projects</h1>
      <div className="h-0.5 w-22 -translate-x-0.5 rounded-full bg-[#444444] mb-4">
        <div className="w-1/3 rounded-full bg-[#007CED] h-full"></div>
      </div>
      <div className="grid max-md:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div
            className="card bg-base-100 w-full h-full image-full shadow-sm"
            key={index}
          >
            <figure>
              <img src={item.image} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.cardTitle}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <Link to={`/projects/${item.title}`} className="btn border-none bg-[#007CED]">
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
