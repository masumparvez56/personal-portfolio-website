import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="pt-20 pb-20 px-[12vw] md:px-[7vw] lg:px-[9vw] xl:px-[12vw] relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">PROJECTS</h2>
        <div className="h-1 w-32 md:w-48 mx-auto bg-linear-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mb-5"></div>
        <p className="text-gray-300 md:text-lg mb-6 md:mb-16 max-w-2xl mx-auto">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            data-aos="fade-up"
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Image */}
            <div className="p-4">
              <img
                src={project.images?.[0]}
                alt={project.name}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-500 mb-4 pt-4 line-clamp-3">
                {project.summary}
              </p>

              {/* Tech Stack */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.techStack?.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-white text-3xl font-bold hover:text-purple-500"
              >
                &times;
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex flex-col items-center">
              <img
                src={selectedProject.images?.[0]}
                alt={selectedProject.name}
                className="w-full md:w-[90%] lg:w-[85%] h-auto max-h-[600px] object-contain rounded-2xl shadow-2xl transition-all duration-300"
              />

              <div className="lg:p-8 p-6 w-full text-center">
                <h3 className="lg:text-3xl font-bold text-white mb-4">
                  {selectedProject.name}
                </h3>
                <p className="text-gray-400 mb-6">
                  {selectedProject.description}
                </p>

                {/* Tech Stack in Modal */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {selectedProject.techStack?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap justify-center gap-4">
                  {selectedProject.githubLink && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-purple-800 text-gray-400 px-4 py-2 rounded-xl text-sm font-semibold"
                    >
                      View Code
                    </a>
                  )}
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-800 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                    >
                      View Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
