import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import ProjectDetailsModal from "../ProjectDetailsModal/ProjectDetailsModal";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    axios.get("projectsData.json").then((res) => setProjects(res.data));
  }, []);

  return (
    <div
      id="projects"
      className="bg-[#212428] text-white py-16 px-4 md:px-10 lg:px-20 space-y-14"
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
          className="text-5xl font-bold text-gray-100 mb-10"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: false }}
        >
          My Porjects
        </motion.h2>
      </div>

      {projects.map((project) => (
        <div
          key={project.id}
          className="max-w-6xl mx-auto rounded-xl overflow-hidden relative group"
        >
          {/* Project Image */}
          <img
            src={project.project_image}
            alt={project.project_name}
            className="w-full h-[550px] object-cover rounded-xl transform group-hover:scale-105 transition duration-500"
          />

          {/* Overlay Content */}
          <motion.div
            className="absolute bottom-10 left-10 bg-gray-800/50 p-6 rounded-xl max-w-sm shadow-md backdrop-blur-md"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            viewport={{ once: false }}
          >
            <h3 className="text-2xl font-bold mb-2">{project.project_name}</h3>
            <p className="text-sm text-gray-300 mb-4">{project.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelectedProject(project);
                document.getElementById("my_project_model").showModal();
              }}
              className="inline-block border px-4 py-2 rounded hover:bg-[#ff014f] text-white hover:border-0 transition text-sm cursor-pointer"
            >
              View Project →
            </motion.button>
          </motion.div>

          {/* Tech Stack Tags */}
          <div className="absolute bottom-6 right-6 flex flex-wrap gap-3">
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
      {/* open project model */}
      {selectedProject && (
        <ProjectDetailsModal project={selectedProject}></ProjectDetailsModal>
      )}
    </div>
  );
};

export default Projects;
