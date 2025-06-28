import React from "react";
import { PiGraduationCapFill } from "react-icons/pi";

const Education = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-1.5">Education</h1>
      <div className="h-0.5 w-26 -translate-x-0.5 rounded-full bg-[#444444] mb-4">
        <div className="w-1/3 rounded-full bg-[#007CED] h-full"></div>
      </div>
      <ul className="timeline mt-10 timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <PiGraduationCapFill size={60} className="text-[#007CED]" />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2010 - 2021</time>
            <div className="text-lg font-black text-[#D5D5D5]">SSC</div> Monipur
            High School and College, Bangladesh
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <PiGraduationCapFill size={60} className="text-[#007CED]" />
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2021 - 2023</time>
            <div className="text-lg font-black text-[#D5D5D5]">HSC</div> Shaheed
            Police Smrity College, Bangladesh
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <PiGraduationCapFill size={60} className="text-[#007CED]" />
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2024 - Present</time>
            <div className="text-lg font-black text-[#D5D5D5]">
              BSc in Computer Science and Engineering
            </div>{" "}
            American International University - Bangladesh (AIUB)
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Education;
