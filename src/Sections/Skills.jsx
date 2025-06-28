import React from "react";

const Skills = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-1.5">Skills</h1>
      <div className="h-0.5 w-15 -translate-x-0.5 rounded-full bg-[#444444] mb-4">
        <div className="w-1/3 rounded-full bg-[#007CED] h-full"></div>
      </div>
      <div className="grid mt-10 grid-cols-2 max-md:grid-cols-1 md:gap-32 gap-12">
        <div className="">
          <h1 className="font-bold text-lg">Front End</h1>
          <h3 className="text-lg font-semibold mt-6">HTML</h3>
          <div className="h-2 w-full -translate-x-0.5 rounded-full bg-[#444444] mb-4">
            <div className="w-3/4 rounded-full bg-[#007CED] h-full"></div>
          </div>
          <h3 className="text-lg font-semibold mt-4">CSS</h3>
          <div className="h-2 w-full -translate-x-0.5 rounded-full bg-[#444444] mb-4">
            <div className="w-3/5 rounded-full bg-[#007CED] h-full"></div>
          </div>
          <h3 className="text-lg font-semibold mt-4">Tailwind CSS</h3>
          <div className="h-2 w-full -translate-x-0.5 rounded-full bg-[#444444] mb-4">
            <div className="w-4/5 rounded-full bg-[#007CED] h-full"></div>
          </div>
          <h3 className="text-lg font-semibold mt-4">JavaScript</h3>
          <div className="h-2 w-full -translate-x-0.5 rounded-full bg-[#444444] mb-4">
            <div className="w-3/4 rounded-full bg-[#007CED] h-full"></div>
          </div>
          <h3 className="text-lg font-semibold mt-4">React.js</h3>
          <div className="h-2 w-full -translate-x-0.5 rounded-full bg-[#444444] mb-4">
            <div className="w-5/6 rounded-full bg-[#007CED] h-full"></div>
          </div>
          <h3 className="text-lg font-semibold mt-4">Firebase</h3>
          <div className="h-2 w-full -translate-x-0.5 rounded-full bg-[#444444] mb-4">
            <div className="w-3/5 rounded-full bg-[#007CED] h-full"></div>
          </div>
        </div>
        <div className="">
          <h1 className="font-bold text-lg">Back End</h1>
          <h3 className="text-lg font-semibold mt-6">Node.js</h3>
          <div className="h-2 w-full -translate-x-0.5 rounded-full bg-[#444444] mb-4">
            <div className="w-1/4 rounded-full bg-[#007CED] h-full"></div>
          </div>
          <h3 className="text-lg font-semibold mt-4">Express.js</h3>
          <div className="h-2 w-full -translate-x-0.5 rounded-full bg-[#444444] mb-4">
            <div className="w-2/4 rounded-full bg-[#007CED] h-full"></div>
          </div>
          <h3 className="text-lg font-semibold mt-4">MongoDB</h3>
          <div className="h-2 w-full -translate-x-0.5 rounded-full bg-[#444444] mb-4">
            <div className="w-3/5 rounded-full bg-[#007CED] h-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
