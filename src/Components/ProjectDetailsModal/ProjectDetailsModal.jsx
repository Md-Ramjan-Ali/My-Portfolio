import React from "react";

const ProjectDetailsModal = ({ project }) => {
  return (
    <dialog id="my_project_model" className="modal">
      <div className="modal-box max-w-6xl bg-[#1e1e2f] text-gray-400 p-6">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute top-2 left-2 md:right-2 md:top-2 hover:bg-[#ff014f] hover:border-0 text-white">
            ✕
          </button>
        </form>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 lg:pt-0">
          {/* Left: Image + buttons */}
          <div>
            <img
              src={project.project_details_image}
              alt={project.project_name}
              className="rounded-xl w-full h-full mb-4"
            />
          </div>

          {/* Right: Details */}
          <div>
            <h3 className="text-2xl font-bold text-[#ff014f] mb-3">
              {project.project_name}
            </h3>

            <p className="mb-4 text-gray-300">{project.description}</p>

            <div className="space-y-2">
              <div>
                <span className="font-semibold text-[1.1rem] text-white">
                  challenges:
                </span>{" "}
                {project.challenges}
              </div>
              <div>
                <span className="font-semibold text-[1.1rem] text-white">
                  futurePlans:
                </span>{" "}
                {project.futurePlans}
              </div>
              <div>
                <span className="font-semibold text-[1.1rem] text-white">
                  Type:
                </span>{" "}
                {project.type}
              </div>
              <div>
                <span className="font-semibold text-[1.1rem] text-white">
                  Languages:
                </span>{" "}
                {project.languages.join(", ")}
              </div>

              <div>
                <span className="font-semibold text-[1.1rem] text-white">
                  Country:
                </span>{" "}
                {project.country}
              </div>
              <div>
                <span className="font-semibold text-[1.1rem] text-white">
                  Live URL :{" "}
                </span>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400"
                >
                  {project.liveLink}
                </a>
              </div>
              <div>
                <span className="font-semibold text-[1.1rem] text-white">
                  GitHub repository(client) :{" "}
                </span>

                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-blue-400"
                >
                  {project.githubClient}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ProjectDetailsModal;
