import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import BlogData from './blogSection';
import BlogSchema from './BlogSchema';
import { FaUser } from 'react-icons/fa';
import SeoSchema from './SeoSchema';

const BlogView = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const headingRefs = useRef({});

  function generateSlug(title) {
    const t = String(title || "");
    return t
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  useEffect(() => {
    const found = BlogData.find(item => generateSlug(item.title) === slug);
    setBlog(found);
  }, [slug]);

  useEffect(() => {
    if (blog) window.scrollTo(0, 0);
  }, [blog]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-150px 0px -50% 0px', threshold: 0.1 }
    );

    const elements = Object.values(headingRefs.current).filter(Boolean);
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => {
        try {
          observer.unobserve(el);
        } catch (e) {
          console.warn('observer.unobserve failed', e);
        }
      });
      try {
        observer.disconnect();
      } catch (e) {
        console.warn('observer.disconnect failed', e);
      }
    };
  }, [blog]);

  if (!blog) {
    return (
      <div className="text-center text-red-500 font-semibold text-xl py-20">
        Blog post not found
      </div>
    );
  }

  return (
    <>
      {blog && <SeoSchema blog={blog} />}

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-48 gap-8">
        {/* Left Section: Content */}
        <div className="md:w-2/3 space-y-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">{blog.title}</h1>
            
           <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[500px] sm:h-[400px] md:h-[500px] object-cover rounded-lg shadow-md"
          />

          <div className="space-y-6 text-gray-700 leading-relaxed text-[17px]">
            <p>{blog.introduction}</p>

            {blog.sections?.map((section, i) => (
              <div key={i}>
                <h2
                  id={section.heading.replace(/\s+/g, '-').toLowerCase()}
                  ref={(el) => headingRefs.current[section.heading.replace(/\s+/g, '-').toLowerCase()] = el}
                  className={`scroll-mt-32 text-2xl font-semibold mt-8 mb-2 text-black transition-transform duration-300 ${
                    activeId === section.heading.replace(/\s+/g, '-').toLowerCase() ? 'scale-105 text-blue-700' : ''
                  }`}
                >
                  {section.heading}
                </h2>

                {section.content && <p>{section.content}</p>}

                {section.subsections?.map((sub, j) => (
                  <div key={j} className="mt-4">
                    <h3 className="text-xl font-semibold mb-1 text-black">{sub.title}</h3>
                    {sub.content && <p>{sub.content}</p>}
                    {sub.list && (
                      <ul className="list-disc list-inside space-y-1 mt-2">
                        {sub.list.map((item, k) => (
                          <li key={k}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {section.faqs && (
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">FAQs</h3>
                    <ul className="space-y-4">
                      {section.faqs.map((faq, idx) => (
                        <li key={idx}>
                          <p className="font-semibold">{faq.question}</p>
                          <p className="text-gray-700">{faq.answer}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}

            <div className="text-sm text-gray-600 font-bold mt-4">
              <div className='flex space-x-5 text-black'><span><FaUser className="h-4 text-black"/></span> <span>{blog.meta.author} | {blog.meta.published_date}</span></div>
            </div>
          </div>
        </div>

        {/* Right Section: TOC */}
        {blog.sections && (
          <aside className="md:w-1/3 hidden md:block">
            <div className="sticky top-24 bg-white rounded-lg shadow-md border border-gray-200 p-5">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Table of Contents</h3>
              <ul className="space-y-2 text-sm text-blue-700">
                {blog.sections.map((sec, i) => {
                  const secId = sec.heading.replace(/\s+/g, '-').toLowerCase();
                  return (
                    <li key={i}>
                      <a
                        href={`#${secId}`}
                        className={`hover:underline ${activeId === secId ? 'font-bold text-blue-700' : ''}`}
                      >
                        {sec.heading}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        )}
      </div>
    </>
  );
};

export default BlogView;
