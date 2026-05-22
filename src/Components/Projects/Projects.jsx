import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import ProjectDetailsModal from "../ProjectDetailsModal/ProjectDetailsModal";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get("projectsData.json").then((res) => setProjects(res.data));

     if (selectedProject) {
       const modal = document.getElementById("my_project_model");
       if (modal) {
         modal.showModal();
       }
     }
  }, [selectedProject]);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div
      id="projects"
      className="bg-[#212428] text-white py-10 px-4 space-y-14"
    >
      <div className="text-center">
        <motion.p
          className="text-[#ff014f] uppercase tracking-widest text-sm font-semibold mb-2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
        >
          Featured
        </motion.p>
        <motion.h2
          className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-100 mb-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
        >
          My Porjects
        </motion.h2>
      </div>

      {visibleProjects.map((project) => (
        <div
          key={project.id}
          className="max-w-6xl mx-auto rounded-xl overflow-hidden relative group xl:px-36 bg-black"
        >
          {/* Project Image */}
          <img
            src={project.project_image}
            alt={project.project_name}
            className="w-full h-[450px] md:h-[550px] object-center rounded-xl transform group-hover:scale-105 transition duration-500"
          />

          {/* Overlay Content */}
          <motion.div
            className="absolute bottom-1 left-1 md:bottom-10 md:left-10 bg-gray-800/50 p-6 rounded-xl max-w-sm shadow-md backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold mb-2">{project.project_name}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedProject(project);
              }}
              className="inline-block border px-4 py-2 rounded hover:bg-[#ff014f] text-white hover:border-0 transition text-sm cursor-pointer"
            >
              View Project →
            </motion.button>
          </motion.div>

          {/* Tech Stack Tags */}
          <div className="absolute bottom-6 right-6 hidden lg:flex flex-wrap gap-3">
            {project.techStack.map((tech, i) => (
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                key={i}
                className="border border-gray-500 px-4 py-2 hover:border-0 text-sm rounded-md hover:bg-[#ff014f] text-white transition cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      ))}

      {/* See More / See Less Button */}
      {projects.length > 3 && (
        <div className="flex justify-center pt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-white transition-colors duration-300 font-medium cursor-pointer"
          >
            <span className="text-base tracking-wide">{showAll ? "See Less" : "See more"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className={`w-5 h-5 transform transition-transform duration-300 ${
                showAll ? "rotate-180" : "group-hover:translate-y-0.5"
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      )}
      {/* open project model */}
      {selectedProject && (
        <ProjectDetailsModal project={selectedProject}></ProjectDetailsModal>
      )}
    </div>
  );
};

export default Projects;
