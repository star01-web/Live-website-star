import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
// Utility: Slug generator for URLs
function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

const BlogCard = ({ post }) => {
  const slug = generateSlug(post.title);

  return (
    <Link
      to={`/blog/${slug}`}
      className="bg-white rounded-lg shadow hover:shadow-lg transform hover:scale-[1.02] transition duration-300 flex flex-col"
    >

      <img
        src={post.image }
        alt={post.title}
        className="w-full h-72 object-cover rounded-t-lg"
      />
      <div className="p-4 flex flex-col flex-grow">
        <p className="text-xs text-gray-500 mb-1">
          <span className="uppercase font-semibold">{post.meta?.category || "AquaCulture"}</span>
          {post.meta?.read_time ? ` · ${post.meta.read_time} read` : ""}
        </p>
        <h2 className="text-md font-semibold text-gray-800 leading-snug mb-2 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">
          {post.meta?.description || "No summary available."}
        </p>
        <div className="mt-auto text-xs text-gray-400 flex justify-between">
          <div className="flex space-x-3 text-black"><span><FaUser className="h-4"/></span>
          <span>{post.meta?.author || "Unknown Author"}</span></div>
          <span className="text-black">{post.meta?.published_date || "Unknown Date"}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
