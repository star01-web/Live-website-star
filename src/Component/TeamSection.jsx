import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Parmeshwar Bareth",
    role: "Trainer",
    description:
      "Parmeshwar Bareth trains businesses in advanced IT solutions and digital marketing techniques, empowering them to excel in a rapidly evolving technological landscape.",
    image: "/award.png",
  },
  {
    name: "Vikram Singh",
    role: "IT Manager",
    description:
      "Vikram Singh manages IT operations, ensuring smooth and secure technology deployment, which supports the company's digital marketing services and client needs.",
    image: "/path-to-image/vikram.jpg",
  },
  {
    name: "Md Tajuddin Sadique",
    role: "Social Media Manager",
    description:
      "Md Tajuddin Sadique oversees the company’s social media presence, managing campaigns, creating content strategies, and engaging with the audience to enhance brand visibility and interaction.",
    image: "/path-to-image/tajuddin.jpg",
  },
];

const TeamSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Team</h2>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg max-w-xs p-4 mx-1">
            <img
              src={member.image}
              alt={member.name}
              className="rounded-t-lg w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-blue-700">{member.name}</h3>
              <p className="text-gray-600 font-medium">{member.role}</p>
              <p className="text-gray-700 mt-2 text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TeamSection;
