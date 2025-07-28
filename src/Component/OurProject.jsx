import React, { useState } from 'react';
    import ProjectData from './ProjectData.js';
    import '../main.css'
    const ProjectCard = ({ project }) => (
      <div className="bg-gradient-to-br from-yellow-400 to-yellow-400 p-5 rounded-2xl shadow-lg text-left text-black font-sans relative mb-4 transform transition-transform duration-300 hover:scale-105 ">
        <p className="text-sm font-bold m-0">{project.state}</p>
        <p className="text-sm font-bold m-0">{project.city}</p>
        <h1 className="text-4xl font-bold my-2">{project.ProjectName}</h1>
        <p className="text-sm font-bold m-0">{project.ProjectType}</p>
        <p className="text-sm italic text-gray-700 mt-2">Status: {project.status}</p>
      </div>
    );

    const OurProject = () => {
      const [filter, setFilter] = useState('All');
      const [statusFilter, setStatusFilter] = useState({
        Completed: false,
        "Under Process": false,
      });

      // Ensure ProjectData is an array
      if (!Array.isArray(ProjectData)) {
        return <div>Error: ProjectData is not an array</div>;
      }

      // Combined filtering logic
        const filteredProjects = ProjectData.filter((project) => {
        const matchesType = filter === 'All' || project.ProjectType.trim() === filter;
        const noStatusSelected = !statusFilter.Completed && !statusFilter["Under Process"];
        const normalizedStatus = project.status?.trim().toLowerCase();
        const matchesStatus =
          noStatusSelected ||
          (statusFilter.Completed && normalizedStatus === 'completed') ||
          (statusFilter["Under Process"] && normalizedStatus === 'under process');
      
        return matchesType && matchesStatus;
      });
      
      // Checkbox toggle handler
      const handleStatusChange = (status) => {
        setStatusFilter((prev) => {
          console.log('Before:', prev); 
          const updated = {
            Completed: status === 'Completed' ? !prev.Completed : false,
            "Under Process": status === 'Under Process' ? !prev["Under Process"] : false,
          };
          console.log('After:', updated);
          return updated;
        });
      };
      
      return (
        <div className="container mx-auto px-4 py-8 pt-[10%] responsive-project pb-[5%] p">
          <h1 className="text-yellow-500 text-4xl font-bold text-center underline mb-8">
            Our Projects
          </h1>

          <div className="flex flex-col md:flex-row md:justify-between items-center mb-6">
            <div>
              <label htmlFor="filter" className="mr-2 font-medium">Filter by Project Type:</label>
              <select
                id="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="p-2 border rounded"
              >
                <option value="All">All</option>
                <option value="Fish Cage">Fish Cage</option>
                <option value="Floting Jetty">Floting Jetty</option>
                <option value="Floating House">Floating House</option>
              </select>
            </div>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="completed"
                  checked={statusFilter.Completed}
                  onChange={() => handleStatusChange('Completed')}
                />
                <span>Completed Projects</span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="underProcess"
                  checked={statusFilter["Under Process"]}
                  onChange={() => handleStatusChange('Under Process')}
                />
                <span>Under Process Projects</span>
              </label>
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-600">No projects found for the selected filters.</div>
          )}
        </div>
      );
    };

    export default OurProject;
