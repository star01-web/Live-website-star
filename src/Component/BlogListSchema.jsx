// src/components/schema/BlogListSchema.jsx
import React from "react";
import { Helmet } from "react-helmet-async";

const BlogListSchema = ({ blogs }) => {
  if (!blogs || blogs.length === 0) return null;

  const baseUrl = "https://starmultiventure.in/blog/";

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": blogs.map((blog, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.description?.slice(0, 150),
        "url": `${baseUrl}${blog.id}`,
        "datePublished": blog.date,
        "author": {
          "@type": "Person",
          "name": blog.writer || "Star Multiventure"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Star Multiventure Pvt. Ltd.",
          "logo": {
            "@type": "ImageObject",
            "url": "https://starmultiventure.in/logo.png"
          }
        }
      }
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default BlogListSchema;
