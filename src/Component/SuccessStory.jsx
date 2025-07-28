import React, { useState, useEffect, useRef } from "react";
// import indiaMapSvg from "../../assets/IndiaMap.svg?url";
import indiaMapSvg from "../../src/assets/IndiaMap.svg?url";
import "../../src/main.css";
import MapSchema from "./SuccessStorySchema";
const stateProjects = {
  "CHHATTISGARH": [
    { "place": "Korba", "project": "Buka Dam", "product_service": "Fish Cage", "status": "Completed" },
    { "place": "Korba", "project": "Satranga Dam", "product_service": "Fish Cage", "status": "Completed" },
    { "place": "Balod", "project": "Tandula Dam", "product_service": "Fish Cage", "status": "Completed" },
    { "place": "Mahasamund", "project": "Kodar Dam", "product_service": "Fish Cage", "status": "Completed" },
    { "place": "Chhuikhadan Khairagarh", "project": "Nathela Dam", "product_service": "Fish Cage", "status": "Completed" },
    { "place": "Khairagarh", "project": "Pipariya Dam", "product_service": "Fish Cage", "status": "Completed" },
    { "place": "Kabirdham Kawardha", "project": "Saroda Sagar Dam", "product_service": "Fish Cage", "status": "Completed" },
    { "place": "Kabirdham Kawardha", "project": "Baherakhar Dam", "product_service": "Fish Cage", "status": "Completed" },
    { "place": "Gariyaband", "project": "Sikasar Dam", "product_service": "Fish Cage", "status": "Completed" },
    { "place": "Ambikapur", "project": "Ghunghutta Dam", "product_service": "Fish Cage", "status": "Completed" }
  ],
  "ODISHA": [
    { "place": "Sambalpur", "project": "HiraKund Dam", "product_service": "Fish Cage", "status": "Completed" },
    { "place": "Puri", "project": "Chilka Lake", "product_service": "Floting Jetty", "status": "Completed" }
  ],
  "BIHAR": [
    { "place": "Lakhisarai", "project": "Morve Dam", "product_service": "Fish Cage", "status": "Completed" },
    { "place": "Jamui", "project": "Shrikhandi Jalashay", "product_service": "Fish Cage", "status": "Completed" },
    { "place": "Jamui", "project": "Kailash Ghati Dam", "product_service": "Fish Cage", "status": "Completed" },
    { "place": "Sasaram", "project": "Indrapuri Dam", "product_service": "Fish Cage", "status": "Completed" }
  ],
  "TELANGANA": [
    { "place": "Suryapet", "project": "Musi Dam", "product_service": "Fish Cage", "status": "Completed" }
  ],
  "MAHARASHTRA": [
    { "place": "Khadakwasla", "project": "National Defence Academy", "product_service": "Floting Jetty", "status": "Completed" }
  ],
  "UTTAR PRADESH": [
    { "place": "Hapud", "project": "Ganga Mandir Ghat", "product_service": "Floting Jetty", "status": "Completed" },
    { "place": "Hapud", "project": "Ganga Mandir Ghat", "product_service": "Floting Jetty", "status": "Completed" },
    { "place": "Hapud", "project": "Ganga Mandir Ghat", "product_service": "Floting Jetty", "status": "Completed" },
    { "place": "Hapud", "project": "Ganga Mandir Ghat", "product_service": "Floting Jetty", "status": "Completed" },
    { "place": "Hapud", "project": "Ganga Mandir Ghat", "product_service": "Floting Jetty", "status": "Completed" }
  ],

  // Default fallback entries for other states
  "ANDHRA PRADESH": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "ARUNACHAL PRADESH": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "ASSAM": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "GOA": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "GUJARAT": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "HARYANA": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "HIMACHAL PRADESH": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "JHARKHAND": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "KARNATAKA": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "KERALA": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "MADHYA PRADESH": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "MANIPUR": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "MEGHALAYA": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "MIZORAM": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "NAGALAND": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "PUNJAB": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "RAJASTHAN": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "SIKKIM": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "TAMIL NADU": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "TRIPURA": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "UTTARAKHAND": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "WEST BENGAL": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "ANDAMAN AND NICOBAR ISLANDS": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "CHANDIGARH": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "DADRA AND NAGAR HAVELI": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "DAMAN AND DIU": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "DELHI": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "JAMMU AND KASHMIR": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "LADAKH": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }],
  "PUDUCHERRY": [{ "place": "Coming Soon", "project": "Coming Soon", "product_service": "Coming Soon", "status": "Coming Soon" }]
};


const SuccessStory = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [svgContent, setSvgContent] = useState("");
  const svgRef = useRef(null);
  // Load SVG content
  useEffect(() => {
    fetch(indiaMapSvg)
      .then(response => response.text())
      .then(data => setSvgContent(data))
      .catch(error => console.error("Error loading SVG:", error));
  }, []);

  // Handle SVG click
  const handleSvgClick = (e) => {
  const path = e.target;
  if (path.tagName === "path" && path.id) {
    const stateCode = path.id.replace("IN-", "");  // Extract clean state code
    const newState = selectedState === stateCode ? null : stateCode;
    setSelectedState(newState);
    setSearchTerm("");
  }
};

  // Highlight selected state
  useEffect(() => {
    if (!svgRef.current) return;

    const paths = svgRef.current.querySelectorAll("path");
    paths.forEach(path => {
      path.classList.remove("selected");
      path.style.fill = "";
    });

    if (selectedState) {
      const selectedPath = svgRef.current.querySelector(`#${selectedState}`);
      if (selectedPath) {
        selectedPath.classList.add("selected");
        selectedPath.style.fill = "#4f46e5";
      }
    }
  }, [selectedState, svgContent]);

  // Filter projects
  useEffect(() => {
    if (!selectedState) {
      setFilteredProjects([]);
      return;
    }

    const projects = stateProjects[selectedState] || [];
    
    if (!searchTerm) {
      setFilteredProjects(projects);
      return;
    }

    const lowerSearchTerm = searchTerm.toLowerCase();
    const filtered = projects.filter(project => 
      project.place.toLowerCase().includes(lowerSearchTerm) ||
      project.project.toLowerCase().includes(lowerSearchTerm) ||
      project.product_service.toLowerCase().includes(lowerSearchTerm) ||
      project.status.toLowerCase().includes(lowerSearchTerm)
    );

    setFilteredProjects(filtered);
  }, [selectedState, searchTerm]);

  return (
    <>
    <MapSchema/>
    <div className="flex flex-col lg:flex-row gap-6 p-2 sm:p-4 md:p-6 mt-24 sm:mt-28 md:mt-32 xl:mt-36 2xl:mt-40">
      {/* SVG Map Display */}
      <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        <div className="p-2 sm:p-4 bg-[#e1b92c] text-black ">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">India Projects Map</h2>
          <p className="text-black text-xs sm:text-sm md:text-base">
            {selectedState 
              ? `Showing projects for ${selectedState}` 
              : "Click on a state to view projects"}
          </p>
        </div>
        <div className="p-1 sm:p-2 md:p-4 ">
          {svgContent ? (
            <div 
              ref={svgRef}
              className="w-full h-auto cursor-pointer max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto "
              onClick={handleSvgClick}
              dangerouslySetInnerHTML={{ __html: svgContent }}
            />
          ) : (
            <div className="h-64 sm:h-80 md:h-96 flex items-center justify-center bg-gray-100">
              <p className="text-gray-500">Loading map...</p>
            </div>
          )}
        </div>
      </div>

      {/* Project Data Panel */}
      <div className="w-full lg:w-1/3  rounded-xl shadow-lg overflow-hidden flex flex-col mt-6 lg:mt-0">
        <div className="p-2 sm:p-4 bg-[#e1b92c] text-black">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
            {selectedState ? `Projects in ${selectedState}` : "Select a State"}
          </h2>
          {selectedState && (
            <div className="mt-2 sm:mt-3">
              <div className="flex flex-col sm:flex-row justify-between items-center mb-1 gap-2">
                <span className="text-xs sm:text-sm">
                  {filteredProjects.length} of {stateProjects[selectedState]?.length || 0} projects
                </span>
                <button 
                  className="text-xs bg-white text-indigo-800 px-2 py-1 rounded mt-2 sm:mt-0"
                  onClick={() => setSelectedState(null)}
                >
                  Clear Selection
                </button>
              </div>
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full p-2 rounded text-gray-800 text-xs sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="flex-grow overflow-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] p-2 sm:p-4">
          {!selectedState ? (
            <div className="text-center py-8 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-xs sm:text-base">Select a state on the map to view projects</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 sm:h-16 sm:w-16 mx-auto text-indigo-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="mt-4 text-xs sm:text-base">No projects found{searchTerm && ` for "${searchTerm}"`}</p>
              <button 
                className="mt-2 text-indigo-600 hover:underline text-xs sm:text-sm"
                onClick={() => setSearchTerm('')}
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="p-2 sm:p-3 bg-indigo-50 rounded-lg border border-indigo-100 hover:border-indigo-300 transition-colors"
                >
                  <h3 className="font-bold text-indigo-800 text-sm sm:text-base">{project.project}</h3>
                  <div className="flex flex-col sm:flex-row justify-between mt-1 gap-1 sm:gap-0">
                    <span className="text-xs sm:text-sm bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                      {project.place}
                    </span>
                    <span className={`text-xs font-medium px-2 py-1 rounded ${
                      project.status === 'Completed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2 text-xs sm:text-sm">{project.product_service}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div></>
  );
};

export default SuccessStory;