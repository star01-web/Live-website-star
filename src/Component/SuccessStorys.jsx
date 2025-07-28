import React, { useEffect, useState } from "react";
import "../../src/main.css"; // Make sure this includes the scroll animation
import SuccesStorysSchema from "./SuccessStorySchema"
import stateProjects from "./StateProjectData";
// const stateProjects = {
//   "CHHATTISGARH": [
//     { place: "Korba", project: "Buka Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Korba", project: "Satrenga Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Balod", project: "Tandula Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Amba Chowki", project: "Mongra Reservoirs", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Mahasamund", project: "Kodar Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Chhuikhadan Khairagarh", project: "Nathela Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Khairagarh", project: "Pipariya Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Kabirdham Kawardha", project: "Saroda Sagar Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Kabirdham Kawardha", project: "Behrakhar Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Gariyaband", project: "Sikaser Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Ambikapur", project: "Ghunghutta Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Rajnandgaon", project: "kharkhara Dam", product_service: "Aquaculture Cage", status: "Completed" },
//   ],
//   "ODISHA": [
//     { place: "Sambalpur", project: "HiraKud Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Barkul  Odisha", project: "INS Chilka Lake", product_service: "Floating Jetty", status: "Completed" },
//     { place: "Sundergarh Odisha", project: "Dalmia Cement", product_service: "Floating Jetty", status: "Completed" },
//   ],
//   "BIHAR": [
//     { place: "Lakhisarai", project: "Morwe Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Lakhisarai", project: "Shringi Rishi Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Jamui", project: "Shrikhandi Jalashay", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Jamui", project: "Kailash Ghati Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Sasaram", project: "Indrapuri Reservoirs", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Sasaram", project: "Chenari Talab", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Phulwariya-Nawada", project: "Hardiya Dam ", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Munger", project: "Kakolat Dam", product_service: "Aquaculture Cage", status: "Completed" },
    
//     ],
//   "TELANGANA": [
//     { place: "Suryapet", project: "Musi Dam", product_service: "Aquaculture Cage", status: "Completed" },
//   ],
//   "MAHARASHTRA": [
//     { place: "Khadakwasla Pune", project: "National Defence Academy", product_service: "Floating Jetty", status: "Completed" },
//     { place: "Nashik", project: "Dhule Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Amrawati", project: "Apar Wardha Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Pench Maharashtra", project: "Pench Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Gadchirauli Maharashtra", project: "Asola Mendha Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Chandrapur Maharashtra", project: "Chandrabhaga Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Bhandara Maharashtra", project: "Wainganga River", product_service: "Floating Jetty", status: "Completed" },
//   ],
//   "UTTAR PRADESH": [
//     { place: "Gadhmukteshwar (Hapur)", project: "Ganga Ghat Gadhmukteshwar", product_service: "Floating Jetty", status: "Completed" },
//     { place: "Sonbhadra", project: "Obra Dam", product_service: "Aquaculture Cage", status: "Completed" },
//     { place: "Renukoot", project: "Rihand Sagar Dam", product_service: "Aquaculture Cage", status: "Completed" },
//   ],
//   "West Bangal": [
//     { place: "Chakrambati Asansol", project: "dewatering systems Project", product_service: "Floating Jetty", status: "Completed" },
//   ],
//   "Jharkhand": [
//     { place: "Ranchi", project: "Getalsud Dam", product_service: "Aquaculture Cage", status: "Under Process" },
//   ],
//   "Rajasthan": [
//     { place: "Udaipur", project: "Badi Talab", product_service: "Aquaculture Cage", status: "Under Process" },
//     { place: "Udaipur", project: "Daya Dam", product_service: "Aquaculture Cage", status: "Under Process" },
    
//   ],
// };

const SuccessStorys = () => {
  const [projects, setProjects] = useState([]);
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

  return (
    <><SuccesStorysSchema />
    <div className="w-full px-4 sm:px-6 lg:px-8 mt-40 mb-4">
  <div className="max-w-7xl mx-auto">
    {/* 🔶 Header Section */}
    <div className="bg-[#e1b92c] p-4 rounded-t-xl text-black h-25 text-center">
      <h1 className="text-xl sm:text-2xl font-bold">Our Project</h1>
    </div>

    {/* 🟦 Scrolling Data Section */}
    <div className="overflow-hidden h-[600px] relative border-x border-b rounded-b-xl shadow-lg">
      <div className="flex flex-col gap-4 animate-scroll-vertical hover:[animation-play-state:paused]">
        {projects.concat(projects).map((project, index) => (
          <div
            key={index}
            className="p-4 bg-indigo-50 rounded-lg border border-indigo-200 w-full"
          >
            <h3 className="font-bold text-indigo-900">{project.project}</h3>
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
        ))}
      </div>
    </div>
  </div>
</div></>

  );
};

export default SuccessStorys;
