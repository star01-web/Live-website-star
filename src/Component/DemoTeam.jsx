import React from "react";
import { useState } from "react"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../main.css"
const teamMembers = [
  {
    name: "Mirza Navied",
    role: "Founder & Director",
    description:
      "Mirza Navied is a visionary Founder & Director with a strong entrepreneurial mindset and a passion for innovation and sustainable growth. He is responsible for shaping the overall strategic direction of the organization, building high-performing teams, and driving long-term business objectives. With a deep understanding of market dynamics and operational excellence, he oversees key business functions including strategy, partnerships, finance, and organizational development. His leadership style is focused on integrity, innovation, and impact, making him a driving force behind the company’s mission and success.",
    image: "/Team.jpg",
  },
  {
    name: "Mirza Junaid ",
    role: "IT Head",
    description:
      "Mirza Junaid is a highly skilled IT Head with extensive experience in managing and streamlining technology infrastructure to align with business goals. He leads the planning, implementation, and maintenance of IT systems, ensuring security, scalability, and efficiency across all departments. With a strong background in networking, cybersecurity, and enterprise software solutions, he drives digital transformation initiatives and ensures the organization stays ahead with cutting-edge technology. His leadership ensures smooth IT operations, strategic tech adoption, and seamless support for both internal teams and external stakeholders.",
    image: "/Team.jpg",
  },
  {
    name: "Sheikh Akram",
    role: "Marketing Head",
    description:
      
    "Sheikh Akram is a dynamic and result-driven Marketing Head with a strategic vision and hands-on experience in driving brand growth, lead generation, and market expansion. With strong leadership and analytical skills, he oversees all marketing functions including digital marketing, brand positioning, market research, and campaign management. He specializes in crafting data-backed marketing strategies that align with business goals, enhance customer engagement, and increase ROI. Sheikh Akram leads a team of creative professionals and works closely with sales and product teams to ensure consistent messaging and effective go-to-market plans.",
    image: "/Team.jpg",
  },
  {
    name: "Lalita Mahant",
    role: "Zonal Sales Manager",
    description:
      "Lalita Mahant is a performance-driven Zonal Sales Manager with proven expertise in managing regional sales operations, developing high-performing teams, and achieving revenue targets across multiple territories. She is responsible for strategizing and executing sales plans, analyzing market trends, identifying growth opportunities, and building strong relationships with key clients and channel partners. Her leadership ensures smooth coordination between field teams and headquarters, driving consistent sales performance and customer satisfaction within the assigned zone. With strong analytical and communication skills, she plays a pivotal role in expanding the company's market footprint.",
    image: "/Team.jpg",
  },
  {
    name: "Anil Pathak",
    role: "Account Head",
    description:
      "Anil Pathak is an accomplished Account Head with deep expertise in financial planning, budgeting, and strategic account management. He is responsible for overseeing the entire accounting function, ensuring compliance with financial regulations, and maintaining accurate financial records. With a keen eye for detail and a strong command over financial reporting, auditing, and cost control, he plays a critical role in supporting the company’s financial health and business decisions. His leadership ensures transparent financial practices, timely reporting, and effective coordination with internal departments and external auditors.",
    image: "/Team.jpg",
  },
];

const DemoTeam = () => {
   const [expandedIndex, setExpandedIndex] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    centerMode: true,
    centerPadding: "0",
  };
  const toggleDescription = (index)=>{
    setExpandedIndex(expandedIndex=== index ? null : index);
  }

  return (
    <section className="py-10 bg-gray-100 text-center team-responsive">
  <h2 className="text-3xl font-bold text-black mb-6">Our Team</h2>
  <div className="container mx-auto px-4 ">
    <Slider {...settings}>
      {teamMembers.map((member, index) => {
        const isExpanded = expandedIndex === index;
        const shortDesc = member.description.length > 100 ? member.description.slice(0, 100) : member.description;
        return (
          <div key={index} className="team-card bg-white shadow-lg rounded-lg p-4">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-t-lg w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-black-700">{member.name}</h3>
              <p className="text-gray-600 font-medium">{member.role}</p>
              <p className="text-gray-700 mt-2 text-sm">
                {isExpanded ? member.description : shortDesc + "... "}
                <button
                  onClick={() => toggleDescription(index)}
                  className="text-blue-600 font-medium focus:outline-none"
                >
                  {isExpanded ? "See Less" : "See More"}
                </button>
              </p>
            </div>
          </div>
        );
      })}
    </Slider>
  </div>
</section>

  );
};

export default DemoTeam;
