// SeoSchema.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { pages, products, blogs } from "./SeoData.js";

const SeoSchema = () => {
  const location = useLocation();
  const allData = [...pages, ...products, ...blogs];
  const currentPage = allData.find((p) => p.path === location.pathname);

  const canonicalUrl = `https://www.starsupplierss.com${location.pathname}`;

  // ✅ Structured Data Schema
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: canonicalUrl,
    name: currentPage?.title || "Star Suppliers",
    description:
      currentPage?.description ||
      "Star Suppliers - Leading Aquaculture Solutions Provider in India",
    publisher: {
      "@type": "Organization",
      name: "Star Suppliers",
      url: "https://www.starsupplierss.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.starsupplierss.com/logo.png",
      },
    },
  };

  return (
    <Helmet>
      <title>{currentPage?.title || "Star Suppliers"}</title>
      <meta
        name="description"
        content={
          currentPage?.description ||
          "Star Suppliers - Leading Aquaculture Solutions Provider in India"
        }
      />
      <link rel="canonical" href={canonicalUrl} />
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SeoSchema;
