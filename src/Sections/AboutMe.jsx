import React from "react";

const AboutMe = () => {
  return (
    <div>
      <h1 className="font-bold text-xl mb-1.5">About Me</h1>
      <div className="h-0.5 w-24 -translate-x-0.5 rounded-full bg-[#444444] mb-4">
        <div className="w-1/3 rounded-full bg-[#007CED] h-full"></div>
      </div>
      <p className="mb-6 text-lg leading-relaxed text-[#D5D5D5]">
        Hello! I’m <strong>Muhammad Akib Anjum</strong>, a passionate and
        curious Computer Science student with a strong focus on full-stack web
        development. My programming journey started with the basics of HTML and
        CSS, but things really took off when I discovered JavaScript and later,
        the powerful MERN stack (MongoDB, Express.js, React.js, Node.js). Since
        then, I’ve been building responsive, scalable, and modern web
        applications that solve real-world problems.
      </p>

      <p className="mb-6 text-lg leading-relaxed text-[#D5D5D5]">
        I love working on front-end projects that combine design with logic —
        turning ideas into clean, user-friendly interfaces is something I truly
        enjoy. Whether it's creating a sleek landing page, a dynamic dashboard,
        or integrating Firebase authentication, I always aim for performance and
        simplicity in every line of code.
      </p>

      <p className="mb-6 text-lg leading-relaxed text-[#D5D5D5]">
        Beyond coding, I’m also skilled in digital marketing. I enjoy crafting
        engaging social media content, running paid ad campaigns, and helping
        brands grow their presence online using platforms like Facebook,
        Instagram, and Canva.
      </p>

      <p className="mb-6 text-lg leading-relaxed text-[#D5D5D5]">
        When I’m not at my desk writing code or running ads, you’ll probably
        find me exploring new tech trends, watching esports (especially
        Valorant), or playing games myself. I also enjoy creative outlets like
        editing videos and designing simple graphics for fun.
      </p>

      <p className="text-lg leading-relaxed text-[#D5D5D5]">
        I believe in continuous learning, collaboration, and staying curious.
        Whether it's contributing to a team project or learning a new JavaScript
        framework, I'm always ready for the next challenge. Let’s build
        something awesome together!
      </p>
    </div>
  );
};

export default AboutMe;
