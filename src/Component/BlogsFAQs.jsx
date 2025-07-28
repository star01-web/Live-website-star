import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import BlogData from "./blogSection.js";
import '../main.css';
import { Helmet } from "react-helmet-async";
import BlogListSchema from "./BlogListSchema.jsx";

function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')  
    .replace(/\s+/g, '-');          
}

function Blog() {
  const navigate = useNavigate();

  const handlePostClick = (slug) => {
    navigate(`/blog/${slug}`);
    window.scrollTo(0, 0); 
  };

  function BlogsFAQs() {
    const faqs = [
      {
        question: "What types of aquaculture cages do you manufacture?",
        answer: "Cage aquaculture, though relatively new to the inland aquaculture scenario of the country, brings in new opportunities...",
        plainTextAnswer: "Cage aquaculture, though relatively new to the inland aquaculture scenario of the country, brings in new opportunities..."
      },
      {
        question: "What materials do you primarily use for cage construction?",
        answer: "(HDPE, PVC, galvanized steel, fiberglass) are the primary materials used for cage construction.",
        plainTextAnswer: "(HDPE, PVC, galvanized steel, fiberglass) are the primary materials used for cage construction."
      },
      {
        question: "Can you customize cage designs to fit my specific needs?",
        answer: "Absolutely! Most cage manufacturers can customize cage designs to fit your specific needs...",
        plainTextAnswer: "Absolutely! Most cage manufacturers can customize cage designs to fit your specific needs..."
      },
      {
        question: "What type of netting do you use for the cages?",
        answer: "Mesh size, material, knotless or knotted, and twine thickness are all important considerations...",
        plainTextAnswer: "Mesh size, material, knotless or knotted, and twine thickness are all important considerations..."
      },
      {
        question: "How are the cages anchored and moored?",
        answer: "Proper mooring ensures the cages remain in place, withstand rough waters, and protect fish stocks from escaping...",
        plainTextAnswer: "Proper mooring ensures the cages remain in place, withstand rough waters, and protect fish stocks from escaping..."
      },
      {
        question: "How do you ensure the cages can withstand harsh weather conditions?",
        answer: "Our cages use heavy-duty anchors, HDPE frames, and reinforced nets to withstand harsh weather...",
        plainTextAnswer: "Our cages use heavy-duty anchors, HDPE frames, and reinforced nets to withstand harsh weather..."
      },
      {
        question: "What is your typical cage size range?",
        answer: "Our cages are available in various sizes, ranging from small, medium, to large...",
        plainTextAnswer: "Our cages are available in various sizes, ranging from small, medium, to large..."
      },
      {
        question: "Government Schemes for Cage Fish Farming in India?",
        answer: (
          <>
            Pradhan Mantri Matsya Sampada Yojana (PMMSY) – More Information:  
            <br />
            Visit the official websites:
            <ul className="list-disc list-inside mt-2 text-blue-600 underline">
              <li><a href="https://pmmkssy.dof.gov.in/pmmkssy/#/" target="_blank" rel="noopener noreferrer">PMMSY Portal</a></li>
              <li><a href="https://nfdb.gov.in/" target="_blank" rel="noopener noreferrer">National Fisheries Development Board (NFDB)</a></li>
              <li><a href="https://mpeda.gov.in/" target="_blank" rel="noopener noreferrer">MPEDA</a></li>
              <li><a href="https://www.cmfri.org.in/" target="_blank" rel="noopener noreferrer">CMFRI</a></li>
            </ul>
          </>
        ),
        plainTextAnswer: "Pradhan Mantri Matsya Sampada Yojana (PMMSY) – Visit PMMSY Portal, NFDB, MPEDA, and CMFRI official websites."
      }
    ];

    const [openFAQ, setOpenFAQ] = useState(null);

    return (
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-wrap gap-12 faqblog-responsive">
        <BlogListSchema />
        <div className="flex-1 min-w-0">
          <h2 className="text-center text-2xl font-bold text-black hover:text-black relative inline-block before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-black before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">Recent Blogs</h2>
          <div className="mt-6 space-y-4">
           {BlogData
  .sort((a, b) => new Date(b.meta.published_date) - new Date(a.meta.published_date))
  .slice(0, 3)
  .map((blog, index) => {
    const slug = generateSlug(blog.title);
    return (
      <div
        key={index}
        className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
        onClick={() => handlePostClick(slug)}
      >
        <h3 className="text-lg font-semibold">{blog.title}</h3>
        <p className="text-gray-600 flex items-center mt-2">
          <FaUser className="mr-2 text-black" />
          {blog.meta.author} | {blog.meta.published_date}
        </p>
        <button
          className="mt-3 bg-black text-white px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition"
          onClick={(e) => {
            e.stopPropagation();
            handlePostClick(slug);
          }}
        >
          Read More
        </button>
      </div>
    );
  })}

          </div>
          <div className="text-center mt-6">
            <Link to='/blog'>
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-yellow-500 hover:text-black transition" >
                More Blogs
              </button>
            </Link>
          </div>
        </div>

        {/* JSON-LD Structured FAQ Schema */}
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.plainTextAnswer
                }
              }))
            })}
          </script>
        </Helmet>

        {/* FAQ Section */}
        <div className="flex-1 min-w-0">
          <h1 className="text-center text-2xl font-bold text-black hover:text-black relative inline-block before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-black before:transition-all before:duration-300 before:ease-in-out hover:before:w-full">FAQs</h1>
          <div className="mt-6 space-y-2">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  className="w-full text-left bg-black text-white py-3 px-4 rounded-lg flex justify-between items-center"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  {faq.question}
                  <span className="text-xl">{openFAQ === index ? "−" : "+"}</span>
                </button>
                {openFAQ === index && (
                  <div className="bg-white text-gray-700 p-4 border-l-4 border-blue-600 rounded-b-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return <BlogsFAQs />;
}

export default Blog;
