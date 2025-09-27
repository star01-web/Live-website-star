import React, { useEffect, useState } from "react";
import "../../src/main.css"; 
import SuccesStorysSchema from "./SuccessStorySchema"
import { SlMagnifier } from "react-icons/sl";
import stateProjects from "./StateProjectData";
import SeoSchema from "./SeoSchema";

const SuccessStorys = () => {
  const [projects, setProjects] = useState([]);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Flatten stateProjects into one array and add state name to each project
    const flatProjects = Object.entries(stateProjects).flatMap(([state, projects]) =>
      projects.map(project => ({ ...project, state }))
    );
    setProjects(flatProjects);
  }, []);

  // 🔹 Filter logic
  const filteredProjects = projects.filter((project) =>
    project.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.place.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.state.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.product_service.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 🔹 Decide what to render (all or filtered)
  const displayProjects = searchTerm ? filteredProjects : projects.concat(projects);

  // 🔹 Conditional container styles
  const containerClass =
    searchTerm
      ? filteredProjects.length > 3
        ? "overflow-y-auto max-h-[600px] border-x border-b rounded-b-xl shadow-lg"
        : "border-x border-b rounded-b-xl shadow-lg"
      : "overflow-hidden h-[600px] relative border-x border-b rounded-b-xl shadow-lg";

  const listClass =
    searchTerm
      ? "flex flex-col gap-4 p-4" // No animation when searching
      : "flex flex-col gap-4 animate-scroll-vertical hover:[animation-play-state:paused]";

  return (
    <>
      <SeoSchema />
      <div className="w-full px-4 sm:px-6 lg:px-8 mt-40 mb-4">
        <div className="max-w-7xl mx-auto">
          {/* 🔶 Header Section */}
          <div className="bg-[#e1b92c] p-4 rounded-t-xl text-black h-25 text-center flex items-center justify-between">
            <h1 className="text-xl sm:text-2xl font-bold">Our Project</h1>
            <button 
              onClick={() => setOpenSearch(!openSearch)} 
              className="text-2xl"
            >
              <SlMagnifier />
            </button>
          </div>

          {/* 🔹 Search box */}
          {openSearch && (
            <div className="p-3 border-x border-b rounded-b-lg bg-white">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
          )}

          {/* 🟦 Data Section */}
          <div className={containerClass}>
            <div className={listClass}>
              {displayProjects.length > 0 ? (
                displayProjects.map((project, index) => (
                  <div
                    key={index}
                    className="p-4 bg-indigo-50 rounded-lg border border-indigo-200 w-full"
                  >
                    <h2 className="font-bold text-indigo-900">{project.project}</h2>
                    <div className="text-sm text-gray-600">{project.place} – {project.state}</div>
                    <div className="text-sm text-gray-500 mt-1">{project.product_service}</div>
                    <div
                      className={`mt-1 text-xs px-2 py-1 rounded inline-block ${
                        project.status === "Completed"
                          ? "bg-green-200 text-green-800"
                          : "bg-yellow-200 text-yellow-800"
                      }`}
                    >
                      {project.status}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 py-6">No results found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStorys;
