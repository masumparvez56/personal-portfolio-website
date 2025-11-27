// src/components/Skills/Skills.jsx
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import {
  SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiJavascript, SiReact,
  SiNodedotjs, SiGithub, SiPostman, SiMongoose, SiExpress, SiMongodb, SiFirebase, SiFigma, SiCanva, SiVercel,
  SiGit
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";

const Skills = () => {
  const frontendSkills = [
    { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-cyan-500" /> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Mongoose", icon: <SiMongoose className="text-red-800" /> },
  ];

  const toolsSkills = [
    { name: "Git", icon: <SiGit className="text-orange-500" /> },
    { name: "Github", icon: <SiGithub className="text-white" /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
    { name: "Canva", icon: <SiCanva className="text-cyan-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "VS Code", icon: <VscCode className="text-blue-500" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
  ];

  const renderSkills = (skills) => (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-col items-center justify-center bg-[#1e293b]/70 border border-[#334155] hover:shadow-sm hover:shadow-indigo-800 hover:border-indigo-800 rounded-xl p-4 transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="text-3xl mb-2">{skill.icon}</div>
          <p className="text-gray-300 text-sm font-medium">{skill.name}</p>
        </div>
      ))}
    </div>
  );

   useEffect(() => {
          Aos.init({ duration: 1000, once: true });
      }, []);

  return (
    <section id="skills" className="text-white pt-20 pb-12 md:py-20 px-4 md:px-8 bg-skills-gradient clip-path-custom-2">
      <div className="max-w-6xl mb-16 md:mb-28 mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">Skills</h2>
        <div className="h-1 w-24 mx-auto bg-linear-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mb-4"></div>
        <p className="text-gray-300 md:text-lg mb-6 md:mb-16 max-w-2xl mx-auto">
          A snapshot of my technical toolkit — the languages, frameworks, and tools that power my projects.
        </p>

        <div className="mb-6 md:mb-12 mt-3" data-aos="fade-up">
          <h3 className="text-xl md:text-2xl font-semibold mb-1 items-center">Frontend</h3>
          <div className="h-0.5 w-24 md:w-28 mx-auto bg-linear-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mb-8"></div>
          {renderSkills(frontendSkills)}
        </div>

        <div className="mb-6 md:mb-12 mt-3" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl md:text-2xl font-semibold mb-1 items-center">Backend</h3>
          <div className="h-0.5 w-24 md:w-28 mx-auto bg-linear-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mb-8"></div>
          {renderSkills(backendSkills)}
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="mt-6">
          <h3 className="text-xl md:text-2xl font-semibold mb-1 items-center">Tools & Technologies</h3>
          <div className="h-0.5 w-56 md:w-60 mx-auto bg-linear-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mb-8"></div>
          {renderSkills(toolsSkills)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
