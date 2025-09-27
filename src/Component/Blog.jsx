import React, { useEffect, useState } from 'react';
import BlogData from './blogSection.js';
import BlogSchema from './BlogSchema.jsx';
import BlogCard from './BlogCard';
import SeoSchema from './SeoSchema.jsx';

const POSTS_PER_PAGE = 6;

function Blog() {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // ✅ Sort by date: latest first
  const sortedBlogData = [...BlogData].sort(
    (a, b) => new Date(b.published_date) - new Date(a.published_date)
  );

  const totalPages = Math.ceil(sortedBlogData.length / POSTS_PER_PAGE);
const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
const currentPosts = sortedBlogData.slice(startIndex, startIndex + POSTS_PER_PAGE);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
       <SeoSchema blog={sortedBlogData} />

      <div className="container mx-auto px-4 mt-40 mb-16">
        <h1 className="text-4xl font-bold text-center text-black mb-12">
          Latest Blogs
        </h1>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentPosts.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2 text-sm">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1
                  ? "bg-black text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded hover:bg-gray-100 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Blog;
